function Projects() {
  const projects = [
  {
    title: "AI Resume Builder",
    desc: "Smart resume generator using AI.",
    img: "/airesume.png",
    github: "https://github.com/muhammed-jabir"
  },
  {
    title: "Portfolio Website",
    desc: "Responsive, glowing UI personal portfolio.",
    img: "/portfolio.jpg",
    github: "https://github.com/muhammed-jabir"
  },
  {
    title: "E-Commerce Platform",
    desc: "React + Django e-commerce platform with cart system and secure user auth",
    img: "/ecommerce.png",
    github: "https://github.com/muhammed-jabir"
  },
  {
    title: "Smile Detector",
    desc: "Detects smiles in images using OpenCV and machine learning.",
    img: "/smile.png",
    github: "https://github.com/muhammed-jabir/Smile_Detection"
  },
  {
    title: "Object Detection App",
    desc: "Real-time object detection using TensorFlow.js and webcam.",
    img: "/object2.png",
    github: "https://github.com/muhammed-jabir/ObjectDetection-MobileNetSSD"
  },
  {
    title: "PDF Protector",
    desc: "Encrypt and Decrypt password-protect PDF files using Python.",
    img: "/pdf2.png",
    github: "https://github.com/muhammed-jabir/PDF-Protector"
  }
];


  return (
    <section id="projects">
      <h2>Featured Projects</h2>

      <div className="project-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <img src={p.img} alt={p.title} />

            <div className="project-content">
  <h3>{p.title}</h3>
  <p>{p.desc}</p>

  <a 
    href={p.github}
    className="github-btn"
    target="_blank"
    rel="noreferrer"
  >
    View on GitHub →
  </a>
</div>

          </div>
        ))}
      </div>

      <a href="/projects" className="view-btn">View All Projects →</a>
    </section>
  );
}

export default Projects;
