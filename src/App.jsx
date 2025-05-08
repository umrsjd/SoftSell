import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ChatWidget from './ChatWidget';
import { ChatBubbleLeftRightIcon,} from '@heroicons/react/24/outline'; // Add this import

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission without backend
    setIsSubmitted(true);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col relative overflow-hidden absolute inset-0 bg-cover bg-center relative z-10 min-h-screen ${isDarkMode ? 'dark-mode' : ''} flex flex-col relative overflow-hidden`} style={{ backgroundImage: 'url("https://i.pinimg.com/736x/64/05/5e/64055e90a27da74bc958cad0ff3fa08d.jpg")',
      filter: 'brightness(0.9)' }}>
      {/* Top Section with Background */}
      <div className="relative z-10">
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="py-4 sm:py-11 px-4 sm:px-6">
            <div className="section-container flex justify-between items-center">
              {/* Logo Placeholder */}
              <div className="flex items-center">
                <img src="https://i.pinimg.com/736x/61/bc/cb/61bccb9f33d67dec705fd16aea4d9af5.jpg" alt="Logo" className="h-8 w-8 mr-2" />
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl sm:text-4xl font-bungee text-white"
                >
                  SoftSell
                </motion.h1>
              </div>
              
              {/* Dark/Light Mode Toggle */}
              <button onClick={toggleDarkMode} className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full shadow-md">
                {isDarkMode ? '🌞' : '🌜'}
              </button>

              {/* Mobile Menu Button */}
              <motion.button
                className="block sm:hidden p-2 text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </motion.button>

              {/* Desktop Menu */}
              <div className="hidden sm:flex items-center gap-6">
                <motion.a
                  href="#home"
                  className="text-base sm:text-lg font-medium text-gray-200 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Home
                </motion.a>
                <motion.a
                  href="#how-it-works"
                  className="text-base sm:text-lg font-medium text-gray-200 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Us
                </motion.a>
                <motion.a
                  href="#contact"
                  className="text-base sm:text-lg font-medium text-gray-200 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
              </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
              initial={false}
              animate={{
                height: isMenuOpen ? 'auto' : 0,
                opacity: isMenuOpen ? 1 : 0
              }}
              className="sm:hidden overflow-hidden backdrop-blur-sm bg-black/10"
            >
              <div className="flex flex-col items-center py-6 space-y-6">
                <motion.a
                  href="#how-it-works"
                  className="text-lg font-medium text-gray-200 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Us
                </motion.a>
                <motion.a
                  href="#contact"
                  className="text-base sm:text-lg font-medium text-gray-200 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
          </nav>

          {/* Hero Section - Adjusted for mobile */}
          <main className="section-container min-h-[80vh] flex items-start sm:items-center py-12 sm:py-32">
            <div className="flex justify-start sm:justify-end w-full px-4 sm:px-0">
              <div className="max-w-4xl w-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="text-left"
                >
                  <h2 className="text-5xl sm:text-8xl lg:text-6xl font-orbitron font-bold mb-4 sm:mb-8 text-white drop-shadow-lg">
                    Welcome to SoftSell
                  </h2>
                  <p className="text-xl sm:text-2xl text-gray-200 mb-6 sm:mb-10 font-luckiest tracking-wider">
                    Your trusted partner in software licensing solutions.
                  </p>
                  <motion.button
                    className="mt-4 px-6 py-3 bg-black hover:bg-black text-white rounded-lg font-medium text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get a Quote
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </main>
          {/* Image Container */}
          <div className="flex-1 grid grid-cols-3 gap-1">
              {/* ... existing code ... */}
            </div>
            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-gray-300"
            >
              <p className="text-sm font-medium"></p>
            </motion.div>
          
        </div>
      </div>
       {/* Animated Preview Section */}
       <div id="how-it-works" className="bg-secondary py-16 relative overflow-hidden">
          <div className="absolute inset-0 animate-gradient-x"></div>
          <div className="section-container relative z-10">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h3 className="text-3xl sm:text-4xl font-orbitron font-bold mb-6 sm:mb-8 text-center">How It Works</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1: Upload License */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 25px rgba(255, 255, 255, 0.4)",
                    transition: { duration: 0.2 }
                  }}
                  viewport={{ once: true }}
                  className="bg-secondary/40 p-6 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold mb-4">Upload License</h4>
                  <div className="flex justify-center mb-4">
                    <ArrowRightIcon className="h-12 w-12 text-white" />
                  </div>
                  <p className="text-white">Easily upload your software license to get started.</p>
                </motion.div>

                {/* Step 2: Get Valuation */}
                <motion.div
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 25px rgba(255, 255, 255, 0.4)",
                    transition: { duration: 0.2 }
                  }}
                  viewport={{ once: true }}
                  className="bg-secondary/40 p-6 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold mb-4">Get Valuation</h4>
                  <div className="flex justify-center mb-4">
                    <CheckCircleIcon className="h-12 w-12 text-white" />
                  </div>
                  <p className="text-white">Receive a valuation for your license quickly.</p>
                </motion.div>

                {/* Step 3: Get Paid */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 25px rgba(255, 255, 255, 0.4)",
                    transition: { duration: 0.2 }
                  }}
                  viewport={{ once: true }}
                  className="bg-secondary/40 p-6 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold mb-4">Get Paid</h4>
                  <div className="flex justify-center mb-4">
                    <ArrowRightIcon className="h-12 w-12 text-white" />
                  </div>
                  <p className="text-white">Complete the process and receive your payment.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Customer Testimonials Section */}
        <div className="bg-secondary py-16">
          <div className="section-container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h3 className="text-3xl sm:text-4xl font-orbitron font-bold mb-6 sm:mb-8">Customer Testimonials</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-left">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-secondary/40 p-6 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <span className="text-yellow-400 text-2xl">★★★★★</span>
                  </div>
                  <p className="text-white mb-2">"SoftSell has transformed our licensing process. Highly recommend!"</p>
                  <p className="text-gray-400">- Rahul Raj, TechCorp</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-secondary/40 p-6 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <span className="text-yellow-400 text-2xl">★★★★★</span>
                  </div>
                  <p className="text-white mb-2">"An essential tool for our business. Exceptional service!"</p>
                  <p className="text-gray-400">- Shravan Kumar, Innovate Inc.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Fixed Chat Widget - Always visible */}
        <div className="fixed bottom-6 right-6 z-[9999]">
          {isChatOpen ? (
            <div className="bg-secondary/40 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-2xl w-[350px] max-w-[90vw]">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-white hover:text-emerald-400"
                onClick={() => setIsChatOpen(false)}
                aria-label="Close chat"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              <ChatWidget />
            </div>
          ) : (
            <button
              className="bg-black hover:bg-black text-white rounded-full p-5 shadow-lg flex items-center justify-center animate-pulse-slow"
              onClick={() => setIsChatOpen(true)}
              aria-label="Open chat"
            >
              <ChatBubbleLeftRightIcon className="h-8 w-8" />
            </button>
          )}
        </div>

        {/* Contact / Lead Form Section */}
        <div id="contact" className="bg-secondary py-16">
          <div className="section-container max-w-lg mx-auto">
            <h3 className="text-3xl sm:text-4xl font-orbitron font-bold mb-6 sm:mb-8 text-center">Contact Us</h3>
            <form className="bg-secondary/40 p-6 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300">
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="input-field w-full" required />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="input-field w-full" required />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="company">Company</label>
                <input type="text" id="company" className="input-field w-full" required />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="licenseType">License Type</label>
                <select id="licenseType" className="input-field w-full" required>
                  <option value="">Select a license type</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="message">Message</label>
                <textarea id="message" className="input-field w-full" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Submit</button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 bg-primary border-t border-grey-500">
          <div className="section-container text-center">
            <p className="text-gray-400">© 2025 SoftSell. All rights reserved.</p>
          </div>
        </footer>
      
    </div>
  );
}

export default App;
        