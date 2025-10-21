import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <motion.img 
                src="/images/ton0.jpg" 
                alt="TON AFRIC Logo" 
                className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              />
              <span className="text-2xl font-bold text-primary hidden sm:inline-block">TON AFRIC</span>
            </Link>
            
            {/* Desktop Menu - Moved next to logo */}
            <div className="hidden md:block">
              <nav className="flex space-x-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/" className="text-gray-700 hover:text-primary transition-colors duration-300 px-4 py-2 rounded-md">
                    Home
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/about" className="text-gray-700 hover:text-primary transition-colors duration-300 px-4 py-2 rounded-md">
                    About
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/vision" className="text-gray-700 hover:text-primary transition-colors duration-300 px-4 py-2 rounded-md">
                    Vision & Mission
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/values" className="text-gray-700 hover:text-primary transition-colors duration-300 px-4 py-2 rounded-md">
                    Core Values
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/team" className="text-gray-700 hover:text-primary transition-colors duration-300 px-4 py-2 rounded-md">
                    Team
                  </Link>
                </motion.div>
              </nav>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
          <nav className="flex flex-col space-y-4 py-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors duration-300 block py-2" onClick={toggleMenu}>
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/about" className="text-gray-700 hover:text-primary transition-colors duration-300 block py-2" onClick={toggleMenu}>
                About
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/vision" className="text-gray-700 hover:text-primary transition-colors duration-300 block py-2" onClick={toggleMenu}>
                Vision & Mission
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/values" className="text-gray-700 hover:text-primary transition-colors duration-300 block py-2" onClick={toggleMenu}>
                Core Values
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/team" className="text-gray-700 hover:text-primary transition-colors duration-300 block py-2" onClick={toggleMenu}>
                Team
              </Link>
            </motion.div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;