import { motion } from 'framer-motion';
import { FaTree, FaLeaf, FaTools, FaTruckMoving, FaCut, FaSeedling } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaTree,
      title: "Tree Felling",
      description: "Safe and professional tree removal services. We handle trees of all sizes with precision and care, ensuring minimal impact on surrounding areas.",
      features: ["Risk Assessment", "Controlled Felling", "Complete Cleanup"]
    },
    {
      icon: FaLeaf,
      title: "Tree Pruning",
      description: "Expert tree maintenance and pruning services to promote healthy growth and maintain aesthetic appeal.",
      features: ["Crown Reduction", "Dead Wood Removal", "Shape Maintenance"]
    },
    {
      icon: FaTruckMoving,
      title: "Site Clearing",
      description: "Comprehensive site clearing and cleanup services including stump removal for construction, landscaping, or property maintenance.",
      features: ["Vegetation Removal", "Stump Removal", "Debris Removal"]
    },
    {
      icon: FaCut,
      title: "Palm Tree Cleaning",
      description: "Specialized palm tree maintenance including frond removal, cleaning, and health assessment.",
      features: ["Frond Trimming", "Seed Pod Removal", "Health Maintenance"]
    },
    {
      icon: FaSeedling,
      title: "Tree Planting",
      description: "Professional tree planting and relocation services to enhance your property's landscape.",
      features: ["Species Selection", "Site Preparation", "Aftercare Guide"]
    },
    {
      icon: FaTools,
      title: "Chipping",
      description: "Professional wood chipping services to convert tree waste into mulch or easily disposable material.",
      features: ["On-site Chipping", "Mulch Production", "Waste Reduction"]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="section-container py-20">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Professional tree services tailored to your needs. We provide comprehensive solutions
          for all your tree care requirements.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Services;