import { cursos } from "../data/content.js";

export default function Cursos() {
  return (
    <section id="cursos" className="section">
      <h2 className="section__title"><span className="pill">Cursos</span></h2>
      <div className="cards cards--3">
        {cursos.map((g) => (
          <article key={g.area} className="card">
            <h3>{g.area}</h3>
            <div className="chips">
              {g.items.map((i) => (
                <span key={i}>{i}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
