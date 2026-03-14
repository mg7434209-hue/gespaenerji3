import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Wrench, Zap } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { value: 20, suffix: '+', label: 'Yıllık Tecrübe', icon: Award },
  { value: 500, suffix: '+', label: 'Tamamlanan Proje', icon: Zap },
  { value: 50, suffix: '+', label: 'Çalışan', icon: Users },
  { value: 1000, suffix: '+', label: 'Bakım Onarım', icon: Wrench },
];

function StatItem({
  value,
  suffix,
  label,
  icon: Icon,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  delay: number;
}) {
  const { count, ref } = useCountUp({
    end: value,
    duration: 2000,
    delay,
    suffix,
  });

  return (
    <div ref={ref} className="text-center">
      <div className="w-12 h-12 mx-auto mb-3 bg-brand-green/10 rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-brand-green" />
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-brand-green font-['Poppins'] mb-1">
        {count}
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-team.jpg"
                alt="GESPA ekibi solar panel kurulumu"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-brand-orange rounded-2xl -z-10" />
            
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-4 -left-4 bg-brand-green text-white rounded-xl p-4 shadow-lg"
            >
              <div className="text-3xl font-bold font-['Poppins']">20+</div>
              <div className="text-sm opacity-90">Yıllık<br />Tecrübe</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange text-sm font-semibold rounded-full mb-4">
              Hakkımızda
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark font-['Poppins'] mb-6">
              GESPA <span className="text-brand-green">Güneş Enerji</span>{' '}
              Sistemleri
            </h2>
            <div className="space-y-4 text-body mb-8">
              <p>
                Firmamız 2005 yılında kurulmuş ve 2007 yılında solar enerji
                sistemlerine başlamıştır. Bu alanda sektöre giriş yapan ve yön
                veren ilk firmalardan biri olma özelliğini taşımaktadır.
              </p>
              <p>
                Ar-Ge çalışmalarına da önem vermekte olan firmamız, geliştirdiği
                ürünlerle sektöre yön vermektedir. 2007 yılından bu yana
                yüzlerce sorunsuz çalışan sistemlerin kurulumunu yaparak
                uzmanlaşmış iş tecrübesine sahiptir.
              </p>
              <p>
                Güneş enerji sistemlerimiz arasında toptan ürün tedariki,
                tarımsal sulama, on-grid ve off-grid ürünleri de
                bulunmaktadır. Bu ürünlerimiz en kaliteli ve yenilikçi
                sistemlerdendir.
              </p>
            </div>

            <Button
              className="bg-brand-green hover:bg-brand-green-light text-white font-semibold px-8 py-3 rounded-lg transition-all hover:scale-105 group"
            >
              Daha Fazla Bilgi
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              delay={index * 100}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
