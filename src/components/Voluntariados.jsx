import { voluntariados } from "../data/content.js";

export default function Voluntariados() {
  return (
    <section id="voluntariados" className="section">
      <h2 className="section__title"><span className="pill">Voluntariados</span></h2>
      <div className="cards">
        {voluntariados.map((v) => (
          <article key={v.nombre} className="card">
            <h3>{v.nombre}</h3>
            <p className="card__meta">{v.periodo}</p>
            <p>{v.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
