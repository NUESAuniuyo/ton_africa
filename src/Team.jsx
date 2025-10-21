import React from 'react'; 
import { motion } from 'framer-motion';
import { FaTwitter, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    y: -10,
    transition: { duration: 0.3 }
  }
};

const teamMembers = [
  {
    id: 1,
    name: "Andy.Ton",
    role: "Founder & CEO",
    image: "/images/ton10.jpg",
    social: {
      twitter: "https://x.com/andii__krypt?s=21",
     telegram: "https://t.meandy_krypto"
    }
  },

  {
    id: 2,
    name: "WondersKrypt",
    role: "Co Founder",
    image: "/images/ton002.jpg",
    social: {
      twitter: "http://t.me/WondersKrypt",
      telegram: "https://t.me/WondersKrypt"
    }
  },
  {
    id: 3,
    name: " Favour toni",
    role: "lead developer",
    image: "/images/ton11.jpg",
    social: {
      twitter: "https://x.com/FavourToni?t=OQLbXlFExlTVI_I2Hts9Jw&s=09",
     telegram: "https://t.me/Fetony"
    }
  },

  {
    id: 4,
    name: "Destiny Sunday",
    role: "Social media manager",
    image: "/images/ton13.jpg",
    social: {
      twitter: "https://x.com/Destinysunday00",
     telegram: "https://t.me/Destinysunday00"
    }
  },
  {
    id: 5,
    name: "Mickystonecrypt",
    role: "Educator 1",
    image: "/images/ton003.jpg",
    social: {
      twitter: "https://x.com/mickystonecrypt?s=21",
      telegram: "https://t.me/tongiftdegen"
    }
  },

  {
    id: 6,
    name: "Eric Wots",
    role: "Educator 2",
    image: "/images/ton005.jpg",
    social: {
      twitter: "https://x.com/eric_wots?s=21",
      telegram: "https://t.me/Eric_Wots"
    }
  },

  {
    id: 7,
    name: "Debest creative",
    role: "Graphics designer",
    image: "/images/ton12.jpg",
    social: {
      twitter: "https://x.com/debestcreative0",
      telegram: "https://t.me/Debest_Creative"
    }
  },

  { 
    id: 8,
    name: "OG Oluwa",
    role: "Contributor",
    image: "/images/ton004.jpg",
    social: {
      twitter: "https://x.com/ogoluwa_?s=21",
     telegram: "https://t.me/Protonode223"
    }
  },
];

const Team = () => {
  const SocialIcon = ({ platform, link }) => {
    const icons = {
      twitter: <FaTwitter className="w-5 h-5" />,
      github: <FaGithub className="w-5 h-5" />,
      linkedin: <FaLinkedin className="w-5 h-5" />,
      telegram: <FaTelegram className="w-5 h-5" />
    };

    return (
      <motion.a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-primary transition-colors"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
      > 
        {icons[platform]}
      </motion.a>
    );
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Amazing Team</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Meet the passionate individuals behind our success story.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover="hover"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
>
                  <div className="h-52 w-full bg-blue-100 flex items-center justify-center p-4">
                    <motion.img 
                      src={member.image} 
                      alt={member.name}
                      className="max-h-full max-w-full object-contain"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    /> 
                  </div>
                <div className="p-6 text-center flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-6 mt-auto pt-4">
                    {Object.entries(member.social).map(([platform, link]) => (
                      <SocialIcon key={platform} platform={platform} link={link} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 