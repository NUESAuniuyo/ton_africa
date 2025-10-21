import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const galleryImages = [
  { id: 1, src: '/images/ton2.jpg', alt: 'Community Event', category: 'events' },
  { id: 2, src: '/images/ton3.jpg', alt: 'Workshop Session', category: 'workshops' },
  { id: 3, src: '/images/ton4.jpg', alt: 'Blockchain Technology', category: 'tech' },
  { id: 5, src: '/images/ton6.jpg', alt: 'Team Collaboration', category: 'team' },
  { id: 6, src: '/images/ton7.jpg', alt: 'Networking Event', category: 'events' },
  { id: 7, src: '/images/ton8.jpg', alt: 'Blockchain Development', category: 'tech' },
  { id: 8, src: '/images/ton9.jpg', alt: 'Community Gathering', category: 'community' }
];

const categories = ['all', 'events', 'workshops', 'tech', 'community', 'team'];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeModal = () => setSelectedImage(null);

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    } else {
      newIndex = (currentIndex + 1) % filteredImages.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Capturing moments from our journey in the blockchain space
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => openModal(image, index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <div className="text-sm bg-primary/80 px-2 py-1 rounded-full inline-block mb-1">
                    {image.category}
                  </div>
                  <p className="font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl hover:text-primary transition-colors"
          >
            <FiX />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate('prev');
            }}
            className="absolute left-4 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white text-2xl z-10 transition-colors"
          >
            <FiChevronLeft />
          </button>
          
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[80vh] w-auto mx-auto object-contain rounded-lg"
            />
            <div className="mt-4 text-center text-white">
              <p className="text-lg font-medium">{selectedImage.alt}</p>
              <p className="text-sm text-gray-300">
                {currentIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate('next');
            }}
            className="absolute right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white text-2xl z-10 transition-colors"
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;