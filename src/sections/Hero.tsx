import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Calculator } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const stats = [
  { value: '500+', label: 'Kurulum' },
  { value: '25', label: 'Yıl Garanti' },
  { value: '%80', label: 'Tasarruf' },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #e8f5e9 0%, #ffffff 50%, #fff8e7 100%)',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-orange"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-1/2 -left-32 w-64 h-64 rounded-full bg-brand-green"
        />
        {/* Sun rays SVG */}
        <svg
          className="absolute top-20 right-1/4 w-64 h-64 opacity-10"
          viewBox="0 0 100 100"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="20"
            fill="#f4a020"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 35 * Math.cos((i * 45 * Math.PI) / 180)}
              y2={50 + 35 * Math.sin((i * 45 * Math.PI) / 180)}
              stroke="#f4a020"
              strokeWidth="2"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.7 + i * 0.1 }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 rounded-full mb-6"
            >
              <span className="text-brand-green text-sm font-semibold">
                ✦ 2005'ten Beri Güneşin Gücü
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark font-['Poppins'] leading-tight mb-6"
            >
              Geleceğin{' '}
              <span className="text-brand-green">Enerjisini</span>{' '}
              Bugün Üretin
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-body max-w-xl mx-auto lg:mx-0 mb-8"
            >
              GESPA ile çatınızda kendi elektriğinizi üretin, faturanızı %80'e
              varan oranlarda düşürün. Profesyonel kurulum, 25 yıl garanti.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-6 rounded-lg transition-all hover:scale-105 group"
              >
                Ücretsiz Keşif Talebi
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-semibold px-8 py-6 rounded-lg transition-all"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Hemen Hesapla
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <span className="text-sm font-semibold text-dark">
                    {stat.value} {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-house.jpg"
                alt="Modern evde güneş enerjisi sistemi"
                className="w-full h-auto object-cover"
              />
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Aylık Tasarruf</p>
                    <p className="text-2xl font-bold text-brand-green">
                      ₺2.500+
                    </p>
                  </div>
                  <div className="h-12 w-px bg-gray-200" />
                  <div>
                    <p className="text-sm text-gray-500">Yıllık Üretim</p>
                    <p className="text-2xl font-bold text-brand-orange">
                      12.000 kWh
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-brand-green/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-brand-green rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
