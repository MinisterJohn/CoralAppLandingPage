import React from 'react';
import { motion } from 'framer-motion';

const FeatureButton = ({ title, icon, disabled, comingSoon, delay, className }) => {
  return (
    <motion.button
      className={`coral-button flex items-center justify-center space-x-2 ${className} ${disabled ? 'disabled' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      disabled={disabled}
    >
      {icon}
      <span>{title}</span>
      {comingSoon && (
        <span className="ml-2 text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
          Coming Soon
        </span>
      )}
    </motion.button>
  );
};

export default FeatureButton;
