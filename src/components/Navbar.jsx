import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaTree, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPopup = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 z-50 w-[90%] max-w-md"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/27787847927"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp size={24} />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="mailto:contact@topcuttreefelling.com"
                className="flex items-center gap-3 p-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              >
                <FaEnvelope size={24} />
                <span>Send Email</span>
              </a>
              <a
                href="tel:+27787847927"
                className="flex items-center gap-3 p-4 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                <FaPhone size={24} />
                <span>Call Us</span>
              </a>
            </div>
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={24} />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
    }`}>
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center gap-2 group"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white"
            >
              <FaTree size={32} />
            </motion.div>
            <span className="text-white text-xl font-bold group-hover:text-accent transition-colors">
              Top Cut Tree Felling
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'services', 'about', 'team', 'reviews'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className="text-white hover:text-accent transition-colors capitalize"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => setIsContactOpen(true)}
              className="btn-secondary flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <FaPhone className="animate-pulse" /> Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-primary/95 backdrop-blur-sm"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['home', 'services', 'about', 'team', 'reviews'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item);
                    }}
                    className="text-white hover:text-accent transition-colors block px-3 py-2 capitalize"
                  >
                    {item}
                  </a>
                ))}
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="btn-secondary flex items-center gap-2 mx-3 justify-center mt-4 w-full"
                >
                  <FaPhone className="animate-pulse" /> Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </nav>
  );
};

export default Navbar;