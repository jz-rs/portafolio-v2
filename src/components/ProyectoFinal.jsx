import { proyectoFinal as p } from "../data/content.js";

export default function ProyectoFinal() {
  return (
    <section id="proyecto-final" className="section">
      <div className="band">
        <div className="band__main">
          <span className="tag tag--light">Proyecto final</span>
          <h2>{p.nombre}</h2>
          <p className="band__sub">{p.subtitulo}</p>
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
            Ver en GitHub →
          </a>
        </div>
        <div className="band__diagram" aria-label="Arquitectura de Ristorino">
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
