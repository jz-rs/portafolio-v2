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
              {e.organizacion && <p className="timeline__org">{e.organizacion}</p>}
              <p>{e.descripcion}</p>
              {e.detalle?.map((g) => (
                <div key={g.titulo} className="timeline__group">
                  <h4>{g.titulo}</h4>
                  <ul>
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {e.stack && (
                <div className="chips chips--light">
                  {e.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              )}
              {e.link && (
                <a className="btn btn--live" href={e.link} target="_blank" rel="noreferrer">
                  {e.linkTexto} ↗
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
