import { motion } from 'framer-motion';
import { Sun, MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const quickLinks = [
  { name: 'Ana Sayfa', href: '#hero' },
  { name: 'Kurumsal', href: '#about' },
  { name: 'Projeler', href: '#projects' },
  { name: 'İletişim', href: '#contact' },
];

const products = [
  'Güneş Panelleri',
  'İnvertörler',
  'Aküler',
  'Aydınlatma',
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-brand-green">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-['Poppins']">GESPA</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              2005 yılından beri güneş enerjisi çözümleri ile hizmetinizdeyiz.
              Temiz enerji, temiz gelecek.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-orange transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold font-['Poppins'] mb-6">
              Hızlı Linkler
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold font-['Poppins'] mb-6">
              Ürünler
            </h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href="#products"
                    className="text-gray-400 hover:text-brand-orange transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold font-['Poppins'] mb-6">
              İletişim
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Örnek Mah. 1551 sok No:10/1
                  <br />
                  Manavgat / Antalya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <a
                  href="mailto:info@gespaenerji.com"
                  className="text-gray-400 hover:text-brand-orange transition-colors"
                >
                  info@gespaenerji.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <a
                  href="tel:+905437434209"
                  className="text-gray-400 hover:text-brand-orange transition-colors"
                >
                  +90 543 743 4209
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 GESPA Enerji. Tüm Hakları Saklıdır.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-brand-orange transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="hover:text-brand-orange transition-colors">
                Kullanım Şartları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
