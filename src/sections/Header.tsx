import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Sun, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { name: 'Ana Sayfa', href: '#hero' },
  { name: 'Kurumsal', href: '#about' },
  { name: 'Ürünler', href: '#products' },
  { name: 'Projeler', href: '#projects' },
  { name: 'İletişim', href: '#contact' },
];

export function Header() {
  const { isScrolled } = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'bg-brand-green' : 'bg-brand-green'
            }`}>
              <Sun className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold font-['Poppins'] transition-colors ${
              isScrolled ? 'text-brand-green' : 'text-brand-green'
            }`}>
              GESPA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-orange ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+905437434209"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-brand-green transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>0543 743 42 09</span>
            </a>
            <Button
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-2 rounded-lg transition-all hover:scale-105"
            >
              Ücretsiz Teklif Al
            </Button>
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
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-brand-green">
                    <Sun className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-brand-green font-['Poppins']">
                    GESPA
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
