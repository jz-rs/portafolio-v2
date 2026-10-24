import { proyectos } from "../data/content.js";

export default function Proyectos() {
  return (
    <section id="proyectos" className="section">
      <h2 className="section__title"><span className="pill">Proyectos destacados</span></h2>
      <div className="grid">
        {proyectos.map((p) => (
          <article key={p.archivo} className="win">
            <div className="win__bar">
              <i /><i />
              <span>{p.archivo}</span>
            </div>
            <div className="win__body">
              <h3>{p.nombre}</h3>
              <p>{p.descripcion}</p>
              <div className="chips">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <a className="link" href={p.link} target="_blank" rel="noreferrer">
                Ver repositorio →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
