import { formacion } from "../data/content.js";

export default function Formacion() {
  return (
    <section id="formacion" className="section">
      <h2 className="section__title"><span className="pill">Formación</span></h2>
      <div className="edu-list">
        {formacion.map((f) => (
          <article key={f.titulo} className="card edu">
            <div className="card__head">
              <h3>{f.titulo}</h3>
              {f.estado && <span className="badge">{f.estado}</span>}
            </div>
            <p className="card__rol">{f.institucion}</p>
            <p className="card__meta">{f.periodo}</p>
            <p>{f.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
