import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaAws, 
  FaReact, 
  FaDocker, 
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaUsers,
  FaTrophy,
  FaClock,
  FaRocket
} from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiMongodb, SiPostgresql } from 'react-icons/si';
import './About.css';

const About = () => {
  const stats = [
    { icon: FaUsers, number: "10+", label: "Happy Clients" },
    { icon: FaTrophy, number: "100+", label: "Projects Completed" },
    { icon: FaClock, number: "24/7", label: "Support Available" },
    { icon: FaRocket, number: "99.9%", label: "Uptime Guarantee" }
  ];

  const technologies = [
    { icon: FaAws, name: "AWS", color: "#ff9900" },
    { icon: FaReact, name: "React", color: "#61dafb" },
    { icon: FaDocker, name: "Docker", color: "#2496ed" },
    { icon: SiKubernetes, name: "Kubernetes", color: "#326ce5" },
    { icon: FaNodeJs, name: "Node.js", color: "#339933" },
    { icon: FaPython, name: "Python", color: "#3776ab" },
    { icon: SiTerraform, name: "Terraform", color: "#623ce4" },
    { icon: FaGitAlt, name: "Git", color: "#f05032" },
    { icon: SiMongodb, name: "MongoDB", color: "#47a248" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of the curve with cutting-edge technologies and innovative solutions.",
      icon: "🚀"
    },
    {
      title: "Quality",
      description: "Every project is delivered with the highest standards of quality and performance.",
      icon: "⭐"
    },
    {
      title: "Reliability",
      description: "Our solutions are built to be robust, scalable, and dependable for your business.",
      icon: "🛡️"
    },
    {
      title: "Partnership",
      description: "We work closely with our clients as partners in their digital transformation journey.",
      icon: "🤝"
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About CloudGrains</h2>
          <p>Empowering businesses with innovative cloud and DevOps solutions</p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-story"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Our Story</h3>
            <p>
              Founded with a vision to democratize enterprise-grade cloud infrastructure, 
              CloudGrains has been at the forefront of digital transformation. We specialize 
              in making complex cloud technologies accessible and affordable for businesses 
              of all sizes.
            </p>
            <p>
              Our team of expert engineers and architects brings years of experience from 
              leading tech companies, ensuring that every solution we deliver meets the 
              highest standards of performance, security, and scalability.
            </p>
          </motion.div>

          <motion.div 
            className="about-stats"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-icon">
                  <stat.icon />
                </div>
                <div className="stat-info">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="about-values"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Our Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="about-technologies"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Technologies We Master</h3>
          <motion.div 
            className="tech-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-item"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <div className="tech-icon" style={{ color: tech.color }}>
                  <tech.icon />
                </div>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
