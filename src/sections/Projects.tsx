import { motion } from 'framer-motion';
import { MapPin, Zap, ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const projects = [
  {
    image: '/images/projects/project-1.jpg',
    title: 'Royal Garden Resort',
    location: 'Manavgat, Antalya',
    capacity: '250 kW',
    type: 'Otel',
  },
  {
    image: '/images/projects/project-2.jpg',
    title: 'Sunset Villa',
    location: 'Alanya, Antalya',
    capacity: '25 kW',
    type: 'Villa',
  },
  {
    image: '/images/projects/project-3.jpg',
    title: 'Green Valley Tarım',
    location: 'Serik, Antalya',
    capacity: '150 kW',
    type: 'Tarım',
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
              <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="inline-block px-3 py-1 bg-brand-orange text-white text-xs font-semibold rounded-full mb-2">
                        {project.type}
                      </span>
                      <h3 className="text-xl font-bold text-white font-['Poppins'] mb-2 group-hover:text-brand-orange transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-white/80 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Zap className="w-4 h-4" />
                          {project.capacity}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-brand-orange">
                    <ArrowUpRight className="w-5 h-5 text-white" />
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
