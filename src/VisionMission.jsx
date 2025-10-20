import React from 'react'; 
import { motion } from 'framer-motion';
import { FaBullseye, FaRocket, FaLightbulb, FaHandsHelping, FaGlobe } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <section id="vision" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Vision & Mission</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our guiding principles and aspirations for the future of blockchain in Africa
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <FaGlobe className="text-2xl text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                To become the leading blockchain education and innovation hub in Africa, 
                driving mass adoption of Web3 technologies and creating a decentralized 
                future that empowers individuals and communities across the continent.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg">
                  <motion.img 
                    src="/images/ton5.jpg" 
                    alt="Blockchain Education"
                    className="max-h-full max-w-full object-contain p-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg">
                  <motion.img 
                    src="/images/ton8.jpg" 
                    alt="Community Growth"
                    className="max-h-full max-w-full object-contain p-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-xl shadow-lg relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <FaRocket className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-white/90 mb-6 text-lg">
                To educate, empower, and connect the next generation of African blockchain 
                developers, entrepreneurs, and enthusiasts through comprehensive resources, 
                hands-on training, and a vibrant community.
              </p>
              <div className="space-y-4 mt-8">
                {[
                  {
                    icon: <FaLightbulb className="text-xl" />,
                    text: "Innovative Learning Programs"
                  },
                  {
                    icon: <FaHandsHelping className="text-xl" />,
                    text: "Community Development"
                  },
                  {
                    icon: <FaBullseye className="text-xl" />,
                    text: "Strategic Partnerships"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="bg-white/20 p-2 rounded-lg">{item.icon}</span>
                    <span className="text-white/90">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;