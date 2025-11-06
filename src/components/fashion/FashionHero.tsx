'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FashionHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fashion/media_12d33c5bf04cb4a1b9ca2ba06d555cb91f4661d36.png"
          alt="Fashion Hero"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="fashion-title text-7xl md:text-9xl font-serif mb-6 tracking-tight">
            ATELIER
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light tracking-[0.3em] mb-12">
            FASHION & TEXTILE DESIGN
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fashion-btn px-12 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 tracking-widest text-sm font-medium"
          >
            EXPLORAR COLECCIÓN
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-gray-600">SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-[1px] h-12 bg-gray-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
