import { Link } from "react-router-dom";
import Contact from "./Contact";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" id="hero">
        <div className="glow"></div>
        <div className="glow"></div>

        <h1>
          Hi, I'm <span>Muhammed Jabir M T</span>
        </h1>

        <p className="typing">Full Stack Developer</p>

        <button onClick={() => (window.location.href = "/projects")}>
          Explore Projects
        </button>
      </section>
      

      {/* ABOUT PREVIEW */}
      <section className="about" id="about-preview">
        <h2>About Me</h2>

        <div className="profile-container">
          <img src="/profile.jpg" alt="Profile" className="profile-photo" />

          <p>
            Hi! I’m <strong>Muhammed Jabir M T</strong>, a dedicated
            <strong> Full Stack Developer</strong> experienced in both backend
            and frontend development.
            <br />
            <br />
            I work with <strong>Python, Django, MySQL</strong> on the backend
            and <strong>HTML, CSS, JavaScript, Bootstrap</strong> on the
            frontend.
            <br />
            <br />
            <Link to="/about" className="mini-btn">
              Read More →
            </Link>
          </p>
        </div>
      </section>

      {/* SKILLS PREVIEW */}
      <section className="skills" id="skills-preview">
        <Skills />
        
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="projects" id="projects-preview">
        <h2>Featured Projects</h2>

        <div className="project-grid">
          <div className="project-card">
            <img src="/airesume.png" />
            <h3>AI Resume Builder</h3>
            <p>Smart resume generator using AI.</p>
          </div>

          <div className="project-card">
            <img src="portfolio.jpg" />
            <h3>Portfolio Website</h3>
            <p>Responsive, glowing UI personal portfolio.</p>
          </div>

          <div className="project-card">
            <img src="ecommerce.png" />
            <h3>E-Commerce Platform</h3>
            <p>Full MERN e-commerce with cart system.</p>
          </div>
        </div>

        <Link to="/projects" className="mini-btn">
          View All Projects →
        </Link>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="contact" id="contact-preview">
       <Contact />
      </section>

      {/* DOWNLOAD CV SECTION */}
<section className="download-cv">
  <h2>Download My CV</h2>

  <p>Get a copy of my latest resume with one click.</p>

  <a href="/Jabir_CV.pdf" download className="cv-btn">
    ⬇ Download CV
  </a>
</section>


      <footer>
        © {new Date().getFullYear()} Muhammed Jabir M T. All rights reserved.
      </footer>
    </>
  );
}
