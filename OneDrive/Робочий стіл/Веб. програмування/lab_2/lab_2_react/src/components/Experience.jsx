function Job({ title, period, duties }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{period}</p>
      <ul>
        {duties.map((d) => <li key={d}>{d}</li>)}
      </ul>
    </article>
  );
}

function Experience() {
  return (
    <section id="experience">
      <h2>Досвід роботи</h2>
      <Job
        title="Посада — Компанія"
        period="01.2025 – 06.2025"
        duties={["Обов'язок 1", "Обов'язок 2"]}
      />
    </section>
  );
}
export default Experience;
