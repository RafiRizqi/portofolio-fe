import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40, transition: { duration: 0.6, ease: "easeOut" } },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
};

const Hero = ({ profile }) => {
  return (
    <motion.header 
      id="hero"
      initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      className="hero"
    >
      <motion.div 
        className="photo-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: 1, scale: 1, y: [0, -15, 0], 
          transition: { opacity: { duration: 1.5 }, scale: { duration: 1.5 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } } 
        }}
      >
        <div className="photo-border"></div>
        <div className="photo-inner"><img src={profile.photoUrl} alt={profile.name} /></div>
      </motion.div>

      <motion.h1 variants={fadeUpVariants} className="name">{profile.name}</motion.h1>
      
      <motion.div variants={fadeUpVariants} className="typing-container">
        <span>Role:</span>
        <TypeAnimation
          sequence={[
            'Software Engineer', 3000, 
            'Frontend Developer', 3000,
            'Full-Stack Mindset', 3000
          ]}
          wrapper="span" speed={40} className="typing-text" repeat={Infinity}
        />
      </motion.div>

      <motion.h3 variants={fadeUpVariants} style={{ color: 'var(--accent)', fontWeight: 400, fontSize: '1.2rem', marginBottom: '1rem' }}>
        {profile.positioning}
      </motion.h3>
      <motion.p variants={fadeUpVariants} className="description">{profile.description}</motion.p>
      
      <motion.div variants={fadeUpVariants} className="hero-ctas">
        <a href={profile.cvLink} target="_blank" rel="noreferrer" className="cta-button">Download CV</a>
        <a href="#projects" className="cta-button secondary">Lihat Project</a>
        <a href={profile.socials.github} target="_blank" rel="noreferrer" className="cta-button secondary">GitHub</a>
      </motion.div>
    </motion.header>
  );
};

export default Hero;