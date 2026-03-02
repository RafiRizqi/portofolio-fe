import './App.css'; 

// 1. Mengimpor semua komponen (Lego) yang sudah kita pecah
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

// 2. DATA LAYER (Single Source of Truth)
const profile = {
  name: "Muhammad Rafi Rizqi",
  positioning: "I build scalable web applications with performance-focused architecture and data-driven digital strategies.",
  description: "Memadukan logika pemrograman Back-End yang solid (PHP/MySQL) dengan arsitektur Front-End modern (React). Memiliki rekam jejak kepemimpinan (Ex-Ketua Umum) yang membuktikan kemampuan manajerial, komunikasi tim, dan eksekusi proyek dengan timeline ketat.",
  photoUrl: "/Rafi.png", 
  cvLink: "/CV_Muhammad_Rafi_Rizqi.pdf", 
  socials: { 
    github: "https://github.com/RafiRizqi", 
    linkedin: "https://linkedin.com/in/RafiRizqi", 
    email: "mailto:emailkamu@gmail.com" 
  }
};

const experiences = [
  {
    id: 1, role: "Ketua Umum Demisioner", org: "HIMTIF Universitas Pamulang", period: "2025 - 2026",
    impact: [
      "Memimpin dan mengelola operasional himpunan mahasiswa tingkat universitas.",
      "Mengeksekusi program kerja strategis dengan timeline ketat dan koordinasi lintas divisi.",
      "Mengembangkan kemampuan problem-solving manajerial dan resolusi konflik dalam tim berskala besar."
    ]
  },
  {
    id: 2, role: "Digital Strategist & Manager", org: "Area51 / Lirik Hati Content Hub", period: "2022 - Present",
    impact: [
      "Mengelola ekosistem operasional dan digital Area51.",
      "Mengeksekusi analisis matriks audiens dan copywriting yang meningkatkan engagement.",
      "Membangun manajemen alur kerja internal untuk efisiensi tim."
    ]
  },
  {
    id: 3, role: "Fasilitator Edukasi", org: "Kampus Mengajar 7", period: "Selesai",
    impact: [
      "Beradaptasi cepat dengan lingkungan baru dan merancang solusi edukatif.",
      "Melatih kemampuan komunikasi asertif dan empati sosial di lapangan."
    ]
  }
];

const techStack = {
  frontend: ["React.js", "Vite", "Framer Motion", "CSS Advanced", "HTML5"],
  backend: ["PHP Native", "MySQL", "REST API Concepts"],
  tools: ["Git", "GitHub", "VS Code", "Figma (UI/UX)"]
};

const projects = [
  { 
    id: 1, category: "Engineering", title: "Decision Support System (SPK)", tech: ["PHP Native", "MySQL", "TOPSIS Algorithm"], 
    problem: "Proses seleksi mahasiswa berprestasi yang manual rentan terhadap bias dan inefisiensi waktu.",
    solution: "Membangun sistem berbasis web dengan implementasi algoritma TOPSIS untuk kalkulasi matematis objektif.",
    impact: "Mempercepat proses pengambilan keputusan dan memastikan akurasi data yang 100% dapat dipertanggungjawabkan.",
    links: { github: "#", demo: "#" }
  },
  { 
    id: 2, category: "Engineering", title: "Area51 POS & Management", tech: ["PHP Native", "MySQL", "Business Logic"], 
    problem: "Pencatatan transaksi dan manajemen stok kedai Area51 masih manual sehingga sulit melacak profitabilitas.",
    solution: "Merancang Point of Sales (POS) kustom dari nol yang terintegrasi dengan database inventaris.",
    impact: "Mengotomatisasi pencatatan kasir dan memberikan visibilitas data keuangan secara real-time.",
    links: { github: "#", demo: "#" }
  },
  { 
    id: 3, category: "Creative Coding", title: "Hyper-Modern Web Portfolio", tech: ["React.js", "Framer Motion", "Clean Code"], 
    problem: "Kebutuhan akan personal branding digital yang mampu merepresentasikan skill teknis tingkat lanjut.",
    solution: "Mendevelop platform React dengan arsitektur modern, efek true glassmorphism, dan animasi physics-based.",
    impact: "Mencapai standar kualitas visual industri enterprise dan Lighthouse score yang optimal.",
    links: { github: "https://github.com/RafiRizqi", demo: "#" }
  }
];

// 3. THE VIEW (Sangat Bersih & CTO-Approved)
const App = () => {
  return (
    <>
      {/* Background Effect */}
      <div className="cyber-grid"></div>
      <div className="grid-fade"></div>

      {/* Menembakkan Data ke dalam Komponen Menggunakan Props */}
      <Navbar />
      
      <div className="portfolio-container">
        <Hero profile={profile} />
        <Experience experiences={experiences} techStack={techStack} />
        <Projects projects={projects} />
      </div>

      <Footer socials={profile.socials} />
    </>
  );
};

export default App;