import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    image: '/images/products/solar-panels.jpg',
    category: 'Güneş Panelleri',
    title: 'Yüksek Verimli Paneller',
    description: 'Monokristal ve polikristal güneş panelleri',
  },
  {
    image: '/images/products/inverters.jpg',
    category: 'İnvertörler',
    title: 'On-Grid & Off-Grid',
    description: 'Her ihtiyaca uygun inverter çözümleri',
  },
  {
    image: '/images/products/batteries.jpg',
    category: 'Aküler',
    title: 'Jel & Lityum Akü',
    description: 'Uzun ömürlü enerji depolama sistemleri',
  },
  {
    image: '/images/products/lighting.jpg',
    category: 'Aydınlatma',
    title: 'Solar Aydınlatma',
    description: 'Dış mekan solar aydınlatma ürünleri',
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

export function Products() {
  return (
    <section id="products" className="py-24 bg-white">
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
            Ürünlerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark font-['Poppins'] mb-4">
            Kaliteli <span className="text-brand-green">Solar</span>{' '}
            Ürünler
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            En kaliteli ve yenilikçi güneş enerjisi ürünleri
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <span className="inline-flex items-center text-white text-sm font-semibold">
                      Detaylı Bilgi
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </motion.div>
                </div>
                <CardContent className="p-5">
                  <Badge
                    variant="secondary"
                    className="mb-2 bg-brand-green/10 text-brand-green hover:bg-brand-green/20"
                  >
                    {product.category}
                  </Badge>
                  <h3 className="text-lg font-bold text-dark font-['Poppins'] mb-1">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {['Şarj Kontrol Cihazları', 'Solar Kablo', 'Konnektörler', 'Montaj Sistemleri'].map(
            (item, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm border-brand-green text-brand-green hover:bg-brand-green hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </Badge>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
