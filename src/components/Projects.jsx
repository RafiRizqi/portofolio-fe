import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40, transition: { duration: 0.6, ease: "easeOut" } },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
};

const Projects = ({ projects }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Engineering', 'Creative Coding'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <motion.section 
      id="projects"
      initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }}
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      style={{ marginTop: '8rem' }}
    >
      <motion.h3 variants={fadeUpVariants}>Engineering Projects</motion.h3>
      
      <motion.div variants={fadeUpVariants} className="filter-group">
        {categories.map((cat) => (
          <button key={cat} className={`filter-btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>
            {cat}
          </button>
        ))}
      </motion.div>

      <motion.div layout className="projects-grid">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} layout variants={fadeUpVariants}
              whileHover={{ y: -10, borderColor: '#00ffff', boxShadow: "0 20px 40px rgba(0, 255, 255, 0.15)" }}
              className="project-card" style={{ padding: '2rem' }}
            >
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>{project.title}</h4>
              <div className="tech-stack" style={{ marginBottom: '1.5rem' }}>
                {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
                <p><strong style={{ color: 'var(--accent)' }}>Problem:</strong> {project.problem}</p>
                <p><strong style={{ color: 'var(--accent)' }}>Solution:</strong> {project.solution}</p>
                <p><strong style={{ color: '#fff' }}>Impact:</strong> {project.impact}</p>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', gap: '1rem' }}>
                <a href={project.links.github} className="filter-btn" style={{ textDecoration: 'none', fontSize: '0.8rem' }}>GitHub</a>
                <a href={project.links.demo} className="filter-btn active" style={{ textDecoration: 'none', fontSize: '0.8rem' }}>Live Demo</a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default Projects;