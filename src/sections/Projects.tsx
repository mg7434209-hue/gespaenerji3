import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const projects = [
  {
    image: '/images/projects/project-real-1.jpg',
    alt: 'GESPA Solar Panel Kurulumu',
  },
  {
    image: '/images/projects/project-real-2.jpg',
    alt: 'GESPA Solar Panel Kurulumu',
  },
  {
    image: '/images/projects/project-real-3.jpg',
    alt: 'GESPA Solar Panel Kurulumu',
  },
  {
    image: '/images/projects/project-real-4.jpg',
    alt: 'GESPA Solar Panel Kurulumu',
  },
  {
    image: '/images/projects/project-real-5.jpg',
    alt: 'GESPA Solar Panel Kurulumu',
  },
  {
    image: '/images/projects/project-real-6.jpg',
    alt: 'GESPA Solar Panel Kurulumu',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-sky-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange text-sm font-semibold rounded-full mb-4">
            Projelerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark font-['Poppins'] mb-4">
            Referans <span className="text-brand-green">Projeler</span>
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Tamamladığımız bazı referans projelerimiz
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle Overlay on Hover */}
                  <div className="absolute inset-0 bg-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Arrow Icon on Hover */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    <ArrowUpRight className="w-5 h-5 text-brand-green" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-brand-green font-semibold hover:text-brand-orange transition-colors"
          >
            Tüm Projeleri Gör
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
