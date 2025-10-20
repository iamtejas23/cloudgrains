import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCloud, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaLinkedin, 
  FaTwitter, 
  FaGithub,
  FaArrowUp,
  FaHeart
} from 'react-icons/fa';
import logo from '../img/logo.png';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home', href: '#home' },
    { name: 'Services', id: 'services', href: '#services' },
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Contact', id: 'contact', href: '#contact' }
  ];

  const services = [
    'Cloud Infrastructure',
    'DevOps & CI/CD',
    'Web Applications',
    'Mobile Development',
    'Database Solutions',
    'Security & Compliance'
  ];

  const contactInfo = [
    { icon: FaEnvelope, text: 'hello@cloudgrains.com' },
    { icon: FaPhone, text: '+1 (555) 123-4567' },
    { icon: FaMapMarkerAlt, text: 'Kolhapur, India' }
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://linkedin.com/company/cloudgrains', color: '#0077b5' },
    { icon: FaTwitter, url: 'https://twitter.com/cloudgrains', color: '#1da1f2' },
    { icon: FaGithub, url: 'https://github.com/cloudgrains', color: '#333' }
  ];

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-pattern"></div>
      </div>

      <div className="footer-container">
        <div className="footer-content">
          <motion.div 
            className="footer-section brand-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-brand">
              <img src={logo} alt="CloudGrains" className="footer-logo" />
              <span className="footer-brand-text">
                Cloud<span className="highlight">Grains</span>
              </span>
            </div>
            <p className="footer-description">
              Empowering businesses with scalable cloud infrastructure and innovative 
              DevOps solutions. Transform your digital landscape with CloudGrains.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="social-link"
                  style={{ backgroundColor: social.color }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Our Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="footer-link">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Contact Info</h3>
            <div className="footer-contact">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <info.icon className="contact-icon" />
                  <span>{info.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © {new Date().getFullYear()} CloudGrains. All rights reserved.
              </p>
            </div>
            <div className="footer-bottom-links">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookie Policy</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="scroll-to-top"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;
