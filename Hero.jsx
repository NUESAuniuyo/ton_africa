import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const TypingText = ({ text, className = '', delay = 0, charDelay = 0.03 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, charDelay * 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, charDelay]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  );
};

const Hero = () => {
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Use useInView to detect when the video section is in view
  const isInView = useInView(videoSectionRef, {
    amount: 0.5, // Considered in view when 50% is visible
    once: false  // Check every time it enters/leaves view
  });

  // Handle video play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = async () => {
      try {
        if (isInView) {
          video.muted = true; // Start muted for autoplay
          await video.play();
          setIsVideoPlaying(true);
          // Try to unmute after a short delay
          setTimeout(() => {
            try {
              video.muted = false;
            } catch (e) {
              console.log("Couldn't unmute video automatically");
            }
          }, 1000);
        } else {
          video.pause();
          setIsVideoPlaying(false);
        }
      } catch (err) {
        console.error("Error controlling video:", err);
      }
    };

    handlePlay();

    // Cleanup function
    return () => {
      if (video) {
        video.pause();
        video.currentTime = 0;
        setIsVideoPlaying(false);
      }
    };
  }, [isInView]);

  return (
    <div className="relative">
      {/* Text Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 flex flex-col items-center justify-center text-white p-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-semibold mb-6 text-white shadow-lg">
            <TypingText text="Empowering Africa's Blockchain Future" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
            <TypingText text="Building the Future of " />
            <span className="text-yellow-300">
              <TypingText text="Web3" delay={1} />
            </span>
            <TypingText text=" in Africa" delay={2} />
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            <TypingText 
              text="TON Africa is a community-driven initiative fostering blockchain education, development, and adoption across the African continent." 
              charDelay={0.03}
              delay={1.5}
            />
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              videoSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-100 transition-colors duration-300 flex items-center mx-auto mt-8"
          >
            Watch Video
            <FiArrowDown className="ml-2" />
          </motion.button>
        </motion.div>
      </section>

      {/* Video Section */}
      <section 
        ref={videoSectionRef} 
        className="relative h-screen w-full overflow-hidden bg-black"
      >
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isInView ? 1 : 0.5,
            scale: isInView ? 1 : 0.98
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <video
            ref={videoRef}
            loop
            playsInline
            muted
            preload="auto"
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
            poster="/images/ton-afric-poster.jpg"
          >
            <source src="/images/Tonvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>

        {/* Rest of your video section remains the same */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white cursor-pointer z-10"
          initial={{ opacity: 0 }}
          animate={{ 
            y: [0, 10, 0],
            opacity: isInView ? 1 : 0
          }}
          transition={{ 
            y: { duration: 1.5, repeat: Infinity, repeatType: "loop" },
            opacity: { duration: 0.5 }
          }}
          onClick={() => {
            const nextSection = document.getElementById('about');
            if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Continue Exploring</span>
            <FiArrowDown className="text-xl" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;