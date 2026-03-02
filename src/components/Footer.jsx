import { motion } from 'framer-motion';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40, transition: { duration: 0.6, ease: "easeOut" } },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
};

const Footer = ({ socials }) => {
  return (
    <motion.footer 
      id="contact" className="modern-footer"
      initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      <div className="footer-glow"></div>
      <motion.div variants={fadeUpVariants} className="footer-content">
        <h2 className="footer-title">Let's Build Something.</h2>
        <p className="footer-text">Mencari Software Engineer yang berfokus pada performa dan skalabilitas? Mari berdiskusi.</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
          <a href={socials.email} className="cta-button">Kirim Email</a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="cta-button secondary">LinkedIn Profile</a>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Muhammad Rafi Rizqi. Engineered with React & Framer Motion.</p>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;