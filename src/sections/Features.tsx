import { motion } from 'framer-motion';
import { Zap, Leaf, Sun, Battery, TrendingDown, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Zap,
    title: 'Enerji Tasarrufu',
    description:
      'Çatı üzeri güneş enerji santralinizden ürettiğiniz elektriği kullanın, elektrik faturanız azalsın ve paranız cebinizde kalsın.',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Leaf,
    title: 'Çevre Dostu',
    description:
      'Karbon salınımınızı azaltarak küresel ısınmaya karşı siz de üzerinize düşeni yapın. Temiz enerji, temiz gelecek.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Sun,
    title: 'Enerjide Özgürlük',
    description:
      'Güneşin olduğu her yerde, her çatıya ve her bütçeye göre sonsuz güneş enerji sistemleri.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Battery,
    title: 'Akıllı Depolama',
    description:
      'Fazla enerjinizi depolayın, gece ve bulutlu günlerde bile kendi enerjinizi kullanın.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: TrendingDown,
    title: 'Düşük Bakım Maliyeti',
    description:
      'Güneş panelleri neredeyse bakım gerektirmez. 25 yıl boyunca sorunsuz enerji üretimi.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Shield,
    title: '25 Yıl Garanti',
    description:
      'Tüm ürünlerimizde 25 yıl performans garantisi. Uzun vadeli yatırımınız güvende.',
    color: 'bg-red-100 text-red-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green text-sm font-semibold rounded-full mb-4">
            Avantajlar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark font-['Poppins'] mb-4">
            Neden <span className="text-brand-green">GESPA?</span>
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            20 yıllık tecrübemizle güneş enerjisinin tüm avantajlarını size
            sunuyoruz
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-light-gray/50">
                <CardContent className="p-8">
                  <div
                    className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                  >
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-dark font-['Poppins'] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-body leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
