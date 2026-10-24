import { useLang } from "../i18n.jsx";

export default function Cursos() {
  const { cursos, ui } = useLang().c;

  return (
    <section id="cursos" className="section">
      <h2 className="section__title"><span className="pill">{ui.secciones.cursos}</span></h2>
      <div className="cards cards--3">
        {cursos.map((c) => (
          <article key={c.nombre} className="card curso">
            <span className="curso__area">{c.area}</span>
            <h3>{c.nombre}</h3>
            <p className="curso__inst">{c.institucion}</p>
            <p className="card__meta">{c.fecha}</p>
            <p>{c.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
