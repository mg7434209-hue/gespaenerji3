import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Phone, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { name: 'Ana Sayfa', href: '#hero' },
  { name: 'Kurumsal', href: '#about' },
  { name: 'Ürünler', href: '#products' },
  { name: 'Projeler', href: '#projects' },
  { name: 'Hesaplama', href: '#calculator' },
  { name: 'İletişim', href: '#contact' },
];

export function Header() {
  const { isScrolled } = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);

  const sendWhatsApp = () => {
    const phone = '905437434209';
    const message = encodeURIComponent('Merhaba, GESPA web sitenizden ulaşıyorum. Bilgi almak istiyorum.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Animated Logo */}
          <motion.a 
            href="#hero" 
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {/* Animated Hexagon Logo */}
            <div className="relative w-12 h-12">
              {/* Rotating Hexagon */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1a5f2a" />
                      <stop offset="50%" stopColor="#2d8a4e" />
                      <stop offset="100%" stopColor="#f4a020" />
                    </linearGradient>
                  </defs>
                  <polygon 
                    points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
                    fill="url(#logoGrad)"
                    stroke="#1a5f2a"
                    strokeWidth="2"
                  />
                </svg>
              </motion.div>
              
              {/* Static Sun Icon in Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sun className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </div>
            
            {/* GESPA Text */}
            <div className="flex flex-col">
              <span className={`text-2xl font-bold font-['Poppins'] tracking-tight transition-colors ${
                isScrolled ? 'text-brand-green' : 'text-brand-green'
              }`}>
                GE<span className="text-brand-orange">S</span>PA
              </span>
              <span className={`text-[10px] tracking-widest uppercase transition-colors ${
                isScrolled ? 'text-gray-500' : 'text-gray-500'
              }`}>
                Güneş Enerji Sistemleri
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-orange relative group ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="tel:+905437434209"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-brand-green transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4" />
              <span>0543 743 42 09</span>
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={sendWhatsApp}
                className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-5 py-2 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Ücretsiz Teklif Al
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex flex-col gap-8 mt-8">
                {/* Mobile Logo */}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <linearGradient id="mobileLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1a5f2a" />
                          <stop offset="50%" stopColor="#2d8a4e" />
                          <stop offset="100%" stopColor="#f4a020" />
                        </linearGradient>
                      </defs>
                      <polygon 
                        points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
                        fill="url(#mobileLogoGrad)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sun className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <span className="text-xl font-bold text-brand-green font-['Poppins']">
                    GE<span className="text-brand-orange">S</span>PA
                  </span>
                </div>
                
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-gray-700 hover:text-brand-orange transition-colors py-2 border-b border-gray-100"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                
                <div className="flex flex-col gap-4">
                  <a
                    href="tel:+905437434209"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700"
                  >
                    <Phone className="w-4 h-4" />
                    <span>0543 743 42 09</span>
                  </a>
                  <Button
                    onClick={sendWhatsApp}
                    className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold w-full"
                  >
                    Ücretsiz Teklif Al
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
