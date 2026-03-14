import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, MessageCircle } from 'lucide-react';

export function CTA() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f4a020 0%, #e8941f 100%)',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white"
        />
        {/* Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center"
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Poppins'] mb-4">
            Profesyonel Hizmet İçin Bizimle İletişime Geçin
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Ücretsiz keşif ve fiyat teklifi için hemen arayın. Uzman ekibimiz
            size en uygun çözümü sunmak için hazır.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+905437434209"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-white text-brand-orange font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Phone className="w-5 h-5" />
              <span>+90 543 743 4209</span>
            </motion.a>
            <Button
              size="lg"
              className="bg-brand-green hover:bg-brand-green-light text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 group"
            >
              Hemen Teklif Al
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-white/80 text-sm"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Ücretsiz Keşif
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              25 Yıl Garanti
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Profesyonel Ekip
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
