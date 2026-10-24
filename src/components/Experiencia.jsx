import { experiencia } from "../data/content.js";

export default function Experiencia() {
  return (
    <section id="experiencia" className="section">
      <div className="dark">
        <h2 className="section__title section__title--light">
          <span className="pill pill--dark">Experiencia laboral</span>
        </h2>
        <ol className="timeline">
          {experiencia.map((e) => (
            <li key={e.empresa} className={e.actual ? "is-current" : ""}>
              <div className="timeline__head">
                <h3>{e.empresa}</h3>
                {e.actual && <span className="badge">Actual</span>}
              </div>
              <p className="timeline__meta">
                {e.rol} · {e.periodo}
              </p>
              <p>{e.descripcion}</p>
              {e.link && (
                <a className="link link--light" href={e.link} target="_blank" rel="noreferrer">
                  {e.linkTexto} →
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
