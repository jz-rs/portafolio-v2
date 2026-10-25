import { useLang } from "../i18n.jsx";

export default function ProyectoFinal() {
  const { proyectoFinal: p, ui } = useLang().c;

  return (
    <section id="proyecto-final" className="section">
      <div className="band">
        <div className="band__main">
          <span className="tag tag--light">{ui.secciones.proyectoFinal}</span>
          <h2>{p.nombre}</h2>
          <p className="band__sub">{p.subtitulo}</p>
          {p.periodo && <p className="band__periodo">{p.periodo}</p>}
          <p>{p.descripcion}</p>
          <ul className="band__list">
            {p.puntos.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="chips chips--light">
            {p.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <a className="btn btn--light" href={p.link} target="_blank" rel="noreferrer">
            {ui.verGithub} →
          </a>
        </div>
        <div className="band__diagram" aria-label={ui.diagrama}>
          <div className="node node--portal">Portal</div>
          <div className="node node--rest">REST · La Bella Pizza</div>
          <div className="node node--soap">SOAP · Perukai</div>
          <div className="node node--rest">REST · La Fábrica Burger</div>
          <div className="node node--soap">SOAP · Sabores del Norte</div>
        </div>
      </div>
    </section>
  );
}
