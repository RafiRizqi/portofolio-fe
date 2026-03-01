import './App.css'; 

const App = () => {
  // 1. DATA LAYER (Clean Data Structure)
  const profile = {
    name: "Muhammad Rafi Rizqi",
    role: "Front End Developer",
    description: "Memadukan kepekaan UI/UX dan copywriting dengan logika pemrograman yang solid. Berpengalaman memimpin tim dan membangun solusi digital yang berpusat pada pengalaman pengguna."
  };

  const skills = [
    "JavaScript (ES6+)", 
    "React.js", 
    "RESTful API", 
    "UI/UX Design", 
    "Git & Version Control",
    "Social Media Management"
  ];

  const projects = [
    { 
      id: 1, 
      title: "Decision Support System", 
      tech: "Web Based • Algorithm", 
      desc: "Membangun sistem pendukung keputusan pemilihan kandidat berprestasi menggunakan metode evaluasi TOPSIS." 
    },
    { 
      id: 2, 
      title: "Content & Copywriting Initiative", 
      tech: "Social Media • TikTok", 
      desc: "Mengelola strategi konten dan copywriting kreatif untuk akun dengan tingkat interaksi tinggi." 
    }
  ];

  // 2. VIEW LAYER (JSX)
  return (
    <div className="portfolio-container">
      
      {/* Hero Section */}
      <header className="fade-in">
        <p className="greeting">Welcome to my workspace</p>
        <h1 className="name">{profile.name}</h1>
        <h2 className="role">{profile.role}</h2>
        <p className="description">{profile.description}</p>
        <button className="cta-button">Mari Berkolaborasi</button>
      </header>

      {/* Skills Section */}
      <section className="slide-up">
        <h3>Tech Stack & Competencies</h3>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </section>

      {/* Experience / Projects Section */}
      <section className="slide-up-delay">
        <h3>Highlighted Experience</h3>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h4>{project.title}</h4>
              <span className="tech-badge">{project.tech}</span>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default App;