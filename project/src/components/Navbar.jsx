import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      className="fixed w-full z-50 py-4 px-6 md:px-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="./logo.svg" alt="CoralApp Logo" className="h-10 w-20" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          </span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-secondary transition-colors">Home</a>
          <a href="https://www.coralapp.network/" className="text-white hover:text-secondary transition-colors">Products</a>
          <a href="https://x.com/mycoralapp/" className="text-white hover:text-secondary transition-colors">Social</a>
          <a href="http://t.me/coraltribe/" className="text-white hover:text-secondary transition-colors">Community</a>
        </div>
        
        <button className="px-4 py-2 rounded-full text-sm font-medium bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition-all">
          Connect
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;