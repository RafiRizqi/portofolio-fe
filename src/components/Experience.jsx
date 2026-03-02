import { motion } from 'framer-motion';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40, transition: { duration: 0.6, ease: "easeOut" } },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
};

const Experience = ({ experiences, techStack }) => {
  return (
    <motion.section 
      id="experience"
      initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }}
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      <motion.h3 variants={fadeUpVariants}>Leadership & Tech Stack</motion.h3>
      
      <div className="two-col-layout" style={{ display: 'flex', gap: '3rem', width: '100%', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {/* Kolom Experience */}
        <motion.div variants={fadeUpVariants} style={{ flex: '1', minWidth: '300px' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1.3rem' }}>Organization Impact</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {experiences.map(exp => (
              <div key={exp.id} className="project-card" style={{ padding: '1.5rem', alignItems: 'flex-start' }}>
                <h5 style={{ fontSize: '1.2rem', color: '#fff' }}>{exp.role}</h5>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent)', marginBottom: '1rem', display: 'block' }}>{exp.org} | {exp.period}</span>
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {exp.impact.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Kolom Tech Stack */}
        <motion.div variants={fadeUpVariants} style={{ flex: '1', minWidth: '300px' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1.3rem' }}>Engineering Arsenal</h4>
          <div className="project-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h5 style={{ color: '#fff', marginBottom: '0.8rem' }}>Frontend</h5>
              <div className="tech-stack">{techStack.frontend.map(t => <span key={t} className="tech-badge">{t}</span>)}</div>
            </div>
            <div>
              <h5 style={{ color: '#fff', marginBottom: '0.8rem' }}>Backend & Database</h5>
              <div className="tech-stack">{techStack.backend.map(t => <span key={t} className="tech-badge" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#fff' }}>{t}</span>)}</div>
            </div>
            <div>
              <h5 style={{ color: '#fff', marginBottom: '0.8rem' }}>Tools</h5>
              <div className="tech-stack">{techStack.tools.map(t => <span key={t} className="tech-badge" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#fff' }}>{t}</span>)}</div>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Experience;