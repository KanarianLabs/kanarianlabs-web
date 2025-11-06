'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function FashionAbout() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-32 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-[0.3em] text-gray-500 mb-4 block">
              SOBRE NOSOTROS
            </span>
            <h2 className="fashion-title text-5xl md:text-6xl font-serif mb-8 leading-tight">
              Diseño que<br />trasciende
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Creamos piezas únicas que combinan la elegancia atemporal con
                la innovación contemporánea. Cada diseño nace de una visión
                artística que celebra la individualidad.
              </p>
              <p>
                Nuestro atelier se especializa en diseño textil y moda
                personalizada, trabajando con materiales de la más alta calidad
                y técnicas artesanales que honran la tradición.
              </p>
              <p className="text-sm italic text-gray-500">
                "La moda no es algo que existe solo en los vestidos. La moda
                está en el cielo, en la calle, tiene que ver con ideas, la
                forma en que vivimos, lo que está sucediendo."
              </p>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px]"
          >
            <Image
              src="/fashion/PORTADA_ARTE MODA Y DISEÑO TEXTIL_0.png"
              alt="Fashion Design Studio"
              fill
              className="object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
