import React from 'react'; 
import { motion } from 'framer-motion';
import FeatureButton from './FeatureButton';
import { FiSmartphone, FiImage, FiUsers, FiCreditCard } from 'react-icons/fi';

const Hero = () => {
  const features = [
    { id: 'coralphone', title: 'CoralPhone', icon: <FiSmartphone className="text-3xl" />, delay: 0.3, disabled: false },
    { id: 'nft', title: 'Reefer NFT Collection', icon: <FiImage className="text-3xl" />, delay: 0.4, disabled: false },
    { id: 'social', title: 'Social Experience', icon: <FiUsers className="text-3xl" />, delay: 0.5, disabled: false },
    { id: 'wallet', title: 'CoralWallet', icon: <FiCreditCard className="text-3xl" />, delay: 0.6, disabled: true, comingSoon: true }
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden text-center md:flex-row md:text-left md:items-center md:justify-between md:px-20">
      {/* Hero text and description on the left for large screens */}
      <motion.div 
        className="z-10 max-w-4xl flex flex-col items-center md:items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Dive into the Future
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Experience the fourth digital evolution with the Coral ecosystem
        </motion.p>
      </motion.div>
      
      {/* Feature buttons on the right for large screens */}
      <motion.div 
        className="hidden md:flex flex-col gap-5 items-end"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {features.map((feature) => (
          <FeatureButton 
            key={feature.id}
            title={feature.title}
            icon={feature.icon}
            disabled={feature.disabled}
            comingSoon={feature.comingSoon}
            delay={feature.delay}
            className="w-64 md:w-[500px]" // 

          />
        ))}
      </motion.div>
      
      {/* Feature buttons on mobile */}
      <motion.div 
        className="flex flex-col gap-5 items-center md:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {features.map((feature) => (
          <FeatureButton 
            key={feature.id}
            title={feature.title}
            icon={feature.icon}
            disabled={feature.disabled}
            comingSoon={feature.comingSoon}
            delay={feature.delay}
            className="w-64" // Default button width for mobile
          />
        ))}
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="text-gray-400 text-sm">© 2025 CoralApp. All rights reserved.</p>
      </motion.div>
    </div>
  );
};

export default Hero;
