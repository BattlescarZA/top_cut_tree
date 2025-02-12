import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserClock, FaHandshake, FaAward, FaTools, FaLeaf, FaImages } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Professional tree service"
    },
    {
      url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2041&q=80",
      alt: "Tree maintenance"
    },
    {
      url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Tree care"
    }
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const features = [
    {
      icon: FaShieldAlt,
      title: 'Fully Insured',
      description: 'Complete peace of mind with our comprehensive insurance coverage for all services'
    },
    {
      icon: FaUserClock,
      title: '15+ Years Experience',
      description: 'Decades of expertise in professional tree services across South Africa'
    },
    {
      icon: FaHandshake,
      title: 'Customer Satisfaction',
      description: 'Committed to exceeding expectations with our quality service guarantee'
    },
    {
      icon: FaAward,
      title: 'Certified Team',
      description: 'Highly trained and certified arborists for professional tree care'
    },
    {
      icon: FaTools,
      title: 'Modern Equipment',
      description: 'State-of-the-art tools and machinery for efficient service delivery'
    },
    {
      icon: FaLeaf,
      title: 'Eco-Friendly',
      description: 'Environmentally conscious practices in all our operations'
    }
  ];

  return (
    <div className="section-container py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About <span className="text-primary">Top Cut Tree Felling</span>
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Since our establishment, Top Cut Tree Felling has been at the forefront of 
              professional tree services in South Africa. With over 15 years of experience, 
              we've built a reputation for excellence, reliability, and unmatched expertise 
              in tree care and maintenance.
            </p>
            <p>
              Our team of certified arborists combines traditional knowledge with modern 
              techniques to deliver superior results. We understand that each tree and 
              property is unique, which is why we provide customized solutions tailored 
              to your specific needs.
            </p>
            <p>
              Safety is our top priority. We maintain strict safety protocols and use 
              state-of-the-art equipment to ensure every job is completed safely and 
              efficiently. Our comprehensive insurance coverage provides additional 
              peace of mind for our clients.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
            <Slider {...carouselSettings} className="h-full">
              {carouselImages.map((image, index) => (
                <div key={index} className="relative h-full">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              ))}
            </Slider>
          </div>
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="/gallery"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <FaImages className="text-lg" />
              View Gallery
            </a>
          </motion.div>
          <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-xl">
            <p className="text-2xl font-bold">15+</p>
            <p className="text-sm">Years of Excellence</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="text-3xl text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default About;