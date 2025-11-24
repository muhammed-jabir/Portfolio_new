export default function ProjectCard({img, title, desc}) {
  return (
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
  );
}
