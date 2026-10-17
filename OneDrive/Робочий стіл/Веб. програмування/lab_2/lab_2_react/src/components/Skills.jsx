function Skills() {
  const skills = ['Мережі та їх захист', 'Python, JavaScript', 'Git'];
  return (
    <section id="skills" className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-blue-800 mb-3">Навички</h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <li
            key={s}
            className="bg-blue-100 text-blue-800 font-medium px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white hover:scale-105 transition cursor-default"
          >
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Skills;