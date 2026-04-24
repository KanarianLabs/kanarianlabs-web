import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 3
const hits = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return request.headers.get('x-real-ip') || 'unknown'
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || entry.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }
  entry.count += 1
  if (entry.count > RATE_LIMIT_MAX) return true
  return false
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Intenta en unos minutos.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, phone, type, message, website } = body

    // Honeypot: si el campo "website" viene lleno, es un bot
    if (website) {
      return NextResponse.json({ message: 'ok' }, { status: 200 })
    }

    if (!name || !email || !type || !message) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    if (typeof name !== 'string' || name.length > 100) {
      return NextResponse.json({ error: 'Nombre inválido' }, { status: 400 })
    }
    if (typeof email !== 'string' || !EMAIL_REGEX.test(email) || email.length > 150) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }
    if (typeof message !== 'string' || message.length < 10 || message.length > 3000) {
      return NextResponse.json(
        { error: 'El mensaje debe tener entre 10 y 3000 caracteres' },
        { status: 400 }
      )
    }

    const cleanName = escapeHtml(name.trim())
    const cleanEmail = escapeHtml(email.trim())
    const cleanPhone = phone ? escapeHtml(String(phone).trim()) : ''
    const cleanType = escapeHtml(String(type).trim())
    const cleanMessage = escapeHtml(message.trim())

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured')
      return NextResponse.json(
        { error: 'Servicio de correo no configurado. Contáctanos por WhatsApp.' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"KanarianLabs Web" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `🟢 Nueva consulta — ${cleanName} (${cleanType})`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;background:#f4f4f4;margin:0;padding:20px;">
            <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,.08)">
              <div style="background:linear-gradient(135deg,#00BFE7 0%,#F4E86D 100%);padding:24px;text-align:center;">
                <h1 style="color:#0F1419;margin:0;font-size:22px;">🚀 Nueva consulta — KanarianLabs</h1>
              </div>
              <div style="padding:28px">
                <p style="margin:0 0 20px;color:#333">Llegó un lead desde tu sitio web:</p>
                <table style="width:100%;border-collapse:collapse">
                  <tr><td style="padding:10px 12px;background:#f9f9f9;border-left:3px solid #00BFE7"><strong>👤 Nombre</strong><br/>${cleanName}</td></tr>
                  <tr><td style="padding:10px 12px;background:#f9f9f9;border-left:3px solid #00BFE7;margin-top:6px"><strong>📧 Email</strong><br/><a href="mailto:${cleanEmail}">${cleanEmail}</a></td></tr>
                  ${cleanPhone ? `<tr><td style="padding:10px 12px;background:#f9f9f9;border-left:3px solid #00BFE7"><strong>📱 WhatsApp</strong><br/><a href="https://wa.me/${cleanPhone.replace(/\D/g, '')}">${cleanPhone}</a></td></tr>` : ''}
                  <tr><td style="padding:10px 12px;background:#f9f9f9;border-left:3px solid #00BFE7"><strong>🏢 Tipo</strong><br/>${cleanType}</td></tr>
                  <tr><td style="padding:10px 12px;background:#f9f9f9;border-left:3px solid #00BFE7"><strong>💬 Mensaje</strong><br/>${cleanMessage.replace(/\n/g, '<br/>')}</td></tr>
                </table>
                <div style="margin-top:24px;padding:14px;background:#FEF3C7;border-left:3px solid #F59E0B;border-radius:4px">
                  <strong style="color:#92400E">⚡ Responde en menos de 30 min</strong><br/>
                  <span style="color:#78350F;font-size:13px">Los leads que reciben respuesta rápida convierten 7x mejor.</span>
                </div>
              </div>
              <div style="padding:14px;text-align:center;color:#999;font-size:11px;background:#fafafa">
                Enviado automáticamente desde kanarianlabs.com · IP: ${ip}
              </div>
            </div>
          </body>
        </html>
      `,
      text: `Nueva consulta en KanarianLabs\n\nNombre: ${name}\nEmail: ${email}\n${phone ? `WhatsApp: ${phone}\n` : ''}Tipo: ${type}\n\nMensaje:\n${message}\n\n--\nResponder a: ${email}`,
    })

    return NextResponse.json({ message: 'Mensaje enviado exitosamente' }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Por favor intenta de nuevo o escríbenos por WhatsApp.' },
      { status: 500 }
    )
  }
}
