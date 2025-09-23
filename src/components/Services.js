import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCloud, 
  FaCog, 
  FaCode, 
  FaMobile, 
  FaDatabase, 
  FaShieldAlt,
  FaRocket,
  FaChartLine,
  FaServer,
  FaDocker
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: FaCloud,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions on AWS, Azure, and Google Cloud Platform with auto-scaling capabilities.",
      features: ["Auto-scaling", "Load balancing", "Global CDN", "Disaster recovery"],
      color: "#38bdf8"
    },
    {
      icon: FaCog,
      title: "DevOps & CI/CD",
      description: "Streamline your development process with automated deployment pipelines and infrastructure as code.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Automation"],
      color: "#10b981"
    },
    {
      icon: FaCode,
      title: "Web Applications",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      features: ["React/Next.js", "Progressive Web Apps", "API Development", "Performance Optimization"],
      color: "#8b5cf6"
    },
    {
      icon: FaMobile,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
      color: "#f59e0b"
    },
    {
      icon: FaDatabase,
      title: "Database Solutions",
      description: "Robust database design, optimization, and management for high-performance applications.",
      features: ["Database Design", "Performance Tuning", "Data Migration", "Backup Strategies"],
      color: "#ef4444"
    },
    {
      icon: FaShieldAlt,
      title: "Security & Compliance",
      description: "Comprehensive security audits, penetration testing, and compliance implementation.",
      features: ["Security Audits", "Penetration Testing", "GDPR Compliance", "Data Protection"],
      color: "#06b6d4"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="services">
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Our Services</h2>
          <p>Comprehensive solutions to accelerate your digital transformation</p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: `0 20px 40px rgba(${service.color === '#38bdf8' ? '56, 189, 248' : service.color === '#10b981' ? '16, 185, 129' : service.color === '#8b5cf6' ? '139, 92, 246' : service.color === '#f59e0b' ? '245, 158, 11' : service.color === '#ef4444' ? '239, 68, 68' : '6, 182, 212'}, 0.3)`
              }}
            >
              <div className="service-icon" style={{ backgroundColor: service.color }}>
                <service.icon />
              </div>
              
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div 
                className="service-overlay"
                style={{ backgroundColor: service.color }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Ready to Transform Your Business?</h3>
            <p>Let's discuss how our services can help you achieve your goals</p>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <FaRocket />
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
