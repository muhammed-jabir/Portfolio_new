export default function SkillCard({icon, name}) {
  return (
    <div className="skill">
      <img src={icon} alt={name} />
      <span>{name}</span>
    </div>
  );
}
