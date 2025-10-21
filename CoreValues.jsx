import React from 'react'; 
import { motion } from 'framer-motion';
import { FaHandsHelping, FaUsers, FaLightbulb, FaShieldAlt, FaGlobeAfrica } from 'react-icons/fa';

const CoreValues = () => {
  const values = [
    {
      icon: <FaHandsHelping className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in the power of working together to achieve greater impact and innovation."
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Community",
      description: "Our strength lies in our diverse and inclusive community of blockchain enthusiasts."
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace creativity and forward-thinking to drive blockchain adoption in Africa."
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Integrity",
      description: "We operate with honesty, transparency, and accountability in all our endeavors."
    },
    {
      icon: <FaGlobeAfrica className="w-8 h-8" />,
      title: "Empowerment",
      description: "We're committed to equipping Africans with the tools and knowledge to thrive in Web3."
    }
  ];

  return (
    <section id="values" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Our Core Values</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do at TON AFRIC
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors mx-auto">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">{value.title}</h3>
              <p className="text-gray-600 text-center">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Ready to join our mission?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Support', 'Partnership', 'Collaboration', 'Empowerment'].map((action, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                {action}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;