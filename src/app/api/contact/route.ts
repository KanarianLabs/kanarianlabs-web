import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, type, message } = body

    // Validación básica
    if (!name || !email || !type || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Configuración del transportador SMTP
    // IMPORTANTE: Configura estas variables de entorno en tu archivo .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER, // Tu correo corporativo (ej: contacto@kanarianlabs.com)
        pass: process.env.SMTP_PASS, // Tu contraseña del correo
      },
    })

    // Contenido del email
    const mailOptions = {
      from: process.env.SMTP_USER, // Remitente (tu correo corporativo)
      to: process.env.NOTIFICATION_EMAIL, // Tu correo personal donde recibirás las notificaciones
      replyTo: email, // Email del cliente para que puedas responder directamente
      subject: `Nueva consulta de ${name} - KanarianLabs`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f4f4f4;
            }
            .header {
              background: linear-gradient(135deg, #22d3ee 0%, #bef264 100%);
              padding: 20px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .header h1 {
              color: white;
              margin: 0;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 15px;
              padding: 10px;
              background-color: #f9f9f9;
              border-left: 4px solid #22d3ee;
            }
            .field strong {
              color: #22d3ee;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 Nueva Consulta - KanarianLabs</h1>
            </div>
            <div class="content">
              <p>Has recibido una nueva consulta desde tu sitio web:</p>

              <div class="field">
                <strong>👤 Nombre:</strong><br/>
                ${name}
              </div>

              <div class="field">
                <strong>📧 Email:</strong><br/>
                <a href="mailto:${email}">${email}</a>
              </div>

              ${phone ? `
              <div class="field">
                <strong>📱 WhatsApp:</strong><br/>
                <a href="https://wa.me/${phone.replace(/\D/g, '')}">${phone}</a>
              </div>
              ` : ''}

              <div class="field">
                <strong>🏢 Tipo de cliente:</strong><br/>
                ${type.charAt(0).toUpperCase() + type.slice(1)}
              </div>

              <div class="field">
                <strong>💬 Mensaje:</strong><br/>
                ${message.replace(/\n/g, '<br/>')}
              </div>

              <div style="margin-top: 30px; padding: 20px; background-color: #fff7ed; border-left: 4px solid #fb923c; border-radius: 5px;">
                <strong style="color: #fb923c;">⚡ Acción requerida:</strong><br/>
                Responde lo antes posible para mantener el interés del cliente.
              </div>
            </div>
            <div class="footer">
              <p>Este correo fue enviado automáticamente desde el formulario de contacto de KanarianLabs.com</p>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Enviar el correo
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error al enviar el correo:', error)
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Por favor intenta de nuevo.' },
      { status: 500 }
    )
  }
}
