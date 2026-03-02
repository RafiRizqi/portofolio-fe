import { motion } from 'framer-motion';

const navVariants = {
  hidden: { opacity: 0, y: -50, x: "-50%" },
  visible: { opacity: 1, y: 0, x: "-50%", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 } }
};

const Navbar = () => {
  return (
    <motion.nav variants={navVariants} initial="hidden" animate="visible" className="floating-nav">
      <a href="#hero" className="nav-link">Home</a>
      <a href="#experience" className="nav-link">Experience</a>
      <a href="#projects" className="nav-link">Engineering</a>
      <a href="#contact" className="nav-link">Contact</a>
    </motion.nav>
  );
};

export default Navbar;