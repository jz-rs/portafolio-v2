import { useLang } from "../i18n.jsx";

export default function Voluntariados() {
  const { voluntariados, ui } = useLang().c;

  return (
    <section id="voluntariados" className="section">
      <h2 className="section__title"><span className="pill">{ui.secciones.voluntariados}</span></h2>
      <div className="cards">
        {voluntariados.map((v) => (
          <article key={`${v.nombre}-${v.periodo}`} className="card">
            <div className="card__head">
              <h3>{v.nombre}</h3>
              {v.actual && <span className="badge">{ui.actual}</span>}
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
