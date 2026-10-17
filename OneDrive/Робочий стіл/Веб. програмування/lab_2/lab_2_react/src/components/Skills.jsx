function Skills() {
  const skills = ['Мережі та їх захист', 'Python, JavaScript', 'Git'];
  return (
    <section id="skills">
      <h2>Навички</h2>
      <ul>
        {skills.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </section>
  );
}
export default Skills;
