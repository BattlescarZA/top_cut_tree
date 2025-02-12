import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaTree } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: FaFacebook,
      url: 'https://facebook.com/topcuttreefelling',
      label: 'Facebook'
    },
    {
      icon: FaInstagram,
      url: 'https://instagram.com/topcuttreefelling',
      label: 'Instagram'
    },
    {
      icon: FaWhatsapp,
      url: 'https://wa.me/27787847927',
      label: 'WhatsApp'
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-primary to-primary-dark text-white relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-50" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6bTEyIDI0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnptLTI0IDAtNiA2djI0bDYtNnYtMjR6Ii8+PC9nPjwvc3ZnPg==')] opacity-5" />

      <div className="section-container py-16 relative">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {/* Company Info */}
          <motion.div variants={fadeInUpVariants}>
            <div className="flex items-center gap-3 mb-6">
              <FaTree className="text-3xl text-accent" />
              <h3 className="text-2xl font-bold">Top Cut Tree Felling</h3>
            </div>
            <p className="text-gray-200 mb-6">
              Professional tree services with over 15 years of experience. 
              Your trusted partner for all tree care needs in Kuruman and surrounding areas.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUpVariants}>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a 
                href="tel:+27787847927"
                className="flex items-center space-x-3 hover:text-accent transition-colors duration-300"
              >
                <FaPhone className="text-accent" />
                <span>+27 78 784 7927</span>
              </a>
              <a 
                href="mailto:info@topcuttreefelling.co.za"
                className="flex items-center space-x-3 hover:text-accent transition-colors duration-300"
              >
                <FaEnvelope className="text-accent" />
                <span>info@topcuttreefelling.co.za</span>
              </a>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-accent" />
                <span>Kuruman, South Africa</span>
              </div>
              <div className="mt-4 p-4 bg-white/5 rounded-lg">
                <p className="text-sm font-semibold text-accent mb-2">24/7 Emergency Service</p>
                <p className="text-sm">Available for urgent tree removal and emergency situations</p>
              </div>
            </div>
          </motion.div>

          {/* Service Area Map */}
          <motion.div variants={fadeInUpVariants}>
            <h3 className="text-xl font-bold mb-6">Service Area</h3>
            <div className="w-full h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114755.84937532654!2d23.3325!3d-27.4524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9b17260bce6651%3A0x9e9b2a3e6c1257b1!2sKuruman%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1675901234567!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Serving Kuruman and surrounding areas within a 150km radius
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              © {currentYear} Top Cut Tree Felling. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="/privacy" className="hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-accent transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;