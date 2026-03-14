import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { value: 20, suffix: '+', label: 'Yıllık Tecrübe' },
  { value: 500, suffix: '+', label: 'Tamamlanan Proje' },
  { value: 10, suffix: 'MW+', label: 'Kurulu Güç' },
  { value: 1000, suffix: '+', label: 'Mutlu Müşteri' },
];

function StatItem({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { count, ref } = useCountUp({
    end: value,
    duration: 2500,
    delay,
    suffix,
  });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-['Poppins'] mb-2">
        {count}
      </div>
      <div className="text-white/80 text-sm sm:text-base">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a5f2a 0%, #2d8a4e 100%)',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 150}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
