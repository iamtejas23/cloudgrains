import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaCloud, FaCode, FaMobile, FaCog, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingIcons = [
    { icon: FaCloud, delay: 0 },
    { icon: FaCode, delay: 0.5 },
    { icon: FaMobile, delay: 1 },
    { icon: FaCog, delay: 1.5 }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="animated-bg"></div>
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{
              animationDelay: `${Math.random() * 3}s`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
      </div>

      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h1 className="hero-title" variants={itemVariants}>
            Scalable
            <span className="highlight"> Cloud & DevOps </span>
            Solutions
          </motion.h1>
          
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Transform your business with cutting-edge cloud infrastructure, 
            seamless DevOps practices, and innovative development solutions.
          </motion.p>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects</span>
            </div>
          </motion.div>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.button 
              className="btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
            >
              <FaRocket />
              Get Started
            </motion.button>
            <motion.button 
              className="btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div className="hero-visual" variants={itemVariants}>
          <div className="floating-icons">
            {floatingIcons.map((item, index) => (
              <motion.div
                key={index}
                className="floating-icon"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: 2,
                  delay: item.delay,
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <item.icon />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="hero-card"
            initial={{ rotateY: -30, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="card-content">
              <h3>CloudGrains Platform</h3>
              <p>Enterprise-grade solutions</p>
              <div className="card-features">
                <span>✓ Auto-scaling</span>
                <span>✓ CI/CD Pipeline</span>
                <span>✓ Monitoring</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
