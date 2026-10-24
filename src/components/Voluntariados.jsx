import { voluntariados } from "../data/content.js";

export default function Voluntariados() {
  return (
    <section id="voluntariados" className="section">
      <h2 className="section__title"><span className="pill">Voluntariados</span></h2>
      <div className="cards">
        {voluntariados.map((v) => (
          <article key={`${v.nombre}-${v.periodo}`} className="card">
            <div className="card__head">
              <h3>{v.nombre}</h3>
              {v.actual && <span className="badge">Actual</span>}
            </div>
            {v.rol && <p className="card__rol">{v.rol}</p>}
            <p className="card__meta">{v.periodo}</p>
            <p>{v.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
