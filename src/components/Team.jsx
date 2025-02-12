import { motion } from 'framer-motion';
import { FaTree, FaShieldAlt, FaCertificate, FaTools } from 'react-icons/fa';

const Team = () => {
  const team = [
    {
      name: 'Herman Venter',
      role: 'Owner & Lead Arborist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'With over 15 years of experience in tree care and maintenance, Herman leads our team with expertise and dedication.',
      certifications: ['Certified Arborist', 'Safety Specialist', 'Tree Risk Assessment']
    },
    {
      name: 'Johan Pretorius',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Manages our day-to-day operations, ensuring every project is completed to the highest standards of quality and safety.',
      certifications: ['Project Management', 'Safety Operations', 'Equipment Specialist']
    },
    {
      name: 'David van Wyk',
      role: 'Lead Technician',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Specializes in complex tree removals and technical operations, bringing years of hands-on experience to every project.',
      certifications: ['Technical Operations', 'Heavy Equipment', 'Height Safety']
    }
  ];

  const expertise = [
    {
      icon: FaTree,
      title: 'Expert Tree Care',
      description: 'Specialized knowledge in all aspects of tree maintenance and removal'
    },
    {
      icon: FaShieldAlt,
      title: 'Safety First',
      description: 'Comprehensive safety training and certification for all team members'
    },
    {
      icon: FaCertificate,
      title: 'Certified Team',
      description: 'Professional certifications and ongoing training programs'
    },
    {
      icon: FaTools,
      title: 'Modern Equipment',
      description: 'Latest tools and machinery for efficient and safe operations'
    }
  ];

  return (
    <div className="section-container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Meet Our <span className="text-primary">Expert Team</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Our team of certified professionals brings years of experience and expertise
          to every project, ensuring the highest quality tree services.
        </p>
      </motion.div>

      {/* Expertise Section */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {expertise.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                <Icon className="text-2xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          );
        })}
      </motion.div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-light font-medium">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{member.description}</p>
                <div className="space-y-2">
                  {member.certifications.map((cert, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <FaCertificate className="text-primary" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-600 mb-6">
          Ready to work with our expert team?
        </p>
        <a 
          href="tel:+27787847927"
          className="btn-primary inline-flex items-center gap-2"
        >
          Contact Us Today
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default Team;