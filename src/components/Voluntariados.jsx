import { useLang } from "../i18n.jsx";

const Destello = () => <path d="M10 0 12 8 20 10 12 12 10 20 8 12 0 10 8 8Z" />;

export default function Voluntariados() {
  const { voluntariados, ui } = useLang().c;
  const destacados = voluntariados.filter((v) => v.destacado);
  const resto = voluntariados.filter((v) => !v.destacado);

  return (
    <section id="voluntariados" className="section">
      <h2 className="section__title"><span className="pill">{ui.secciones.voluntariados}</span></h2>

      {/* El voluntariado destacado (NASA) va en una tarjeta oscura a todo el ancho, con detalles espaciales. */}
      {destacados.map((v) => (
        <article key={`${v.nombre}-${v.periodo}`} className="vol-destacado">
          <svg className="vol-destacado__orbita" viewBox="0 0 200 120" aria-hidden="true">
            <ellipse cx="100" cy="60" rx="94" ry="40" transform="rotate(-18 100 60)" />
            <circle cx="100" cy="60" r="22" />
            <circle cx="22" cy="78" r="4" />
          </svg>
          <svg className="vol-destacado__destello vol-destacado__destello--1" viewBox="0 0 20 20" aria-hidden="true"><Destello /></svg>
          <svg className="vol-destacado__destello vol-destacado__destello--2" viewBox="0 0 20 20" aria-hidden="true"><Destello /></svg>
          <div className="vol-destacado__texto">
            <div className="vol-destacado__head">
              <span className="vol-destacado__periodo">{v.periodo}</span>
              {v.actual && <span className="badge">{ui.actual}</span>}
            </div>
            <h3>{v.nombre}</h3>
            {v.rol && <p className="vol-destacado__rol">{v.rol}</p>}
            <p>{v.descripcion}</p>
            {v.links && (
              <div className="vol-destacado__links">
                {v.links.map((l) => (
                  <a key={l.url} className="btn btn--live" href={l.url} target="_blank" rel="noreferrer">
                    {l.texto} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}

      <div className="vol-lista">
        {resto.map((v) => (
          <article key={`${v.nombre}-${v.periodo}`} className="vol">
            <p className="vol__periodo">{v.periodo}</p>
            <h3>{v.nombre}</h3>
            {v.rol && <p className="vol__rol">{v.rol}</p>}
            <p>{v.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
