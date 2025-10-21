import React from 'react';
import { FaTwitter, FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const links = [
{ name: "Home", href: "../" },
  { name: "About", href: "../about" },
  { name: "Vision", href: "../vision" },
  { name: "Team", href: "../Team" },
  { name: "Resources", href: "../Gallery" },
  { name: "Contact", href: "../contact" }
];

  const socialLinks = [
    { icon: <FaTwitter />, href: "https://x.com/TonAfric?t=3ydALU2nYUBRs_8qZBl97Q&s=09" },
    { icon: <FaTelegram />, href: "https://t.me/ton_afric" },
   ];
 
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">TON AFRIC</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Empowering Africa through Telegram and TON Blockchain
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors text-lg"
                aria-label={social.icon.type.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {currentYear} TON AFRIC. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;