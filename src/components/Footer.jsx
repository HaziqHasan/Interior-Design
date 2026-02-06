import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' }
  ];

  return (
    <footer id="footer" className="bg-[#2c2c2c] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-3xl mb-4 text-[#d4af37]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              LUXE INTERIORS
            </h3>
            <p
              className="text-gray-300 leading-relaxed"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Crafting timeless spaces where luxury meets architectural precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xl mb-4 text-[#d4af37]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-300 hover:text-[#d4af37] transition-colors"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h4
              className="text-xl mb-4 text-[#d4af37]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-[#d4af37]" />
                <span style={{ fontFamily: 'Lato, sans-serif' }}>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-[#d4af37]" />
                <span style={{ fontFamily: 'Lato, sans-serif' }}>info@luxeinteriors.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-[#d4af37] mt-1" />
                <span style={{ fontFamily: 'Lato, sans-serif' }}>
                  123 Design Avenue<br />
                  New York, NY 10001
                </span>
              </div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#d4af37] transition-colors mt-4"
              >
                <Instagram className="w-5 h-5" />
                <span style={{ fontFamily: 'Lato, sans-serif' }}>Follow us on Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p style={{ fontFamily: 'Lato, sans-serif' }}>
            © {new Date().getFullYear()} Luxe Interiors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
