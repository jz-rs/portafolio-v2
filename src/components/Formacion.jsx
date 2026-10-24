import { useLang } from "../i18n.jsx";

export default function Formacion() {
  const { formacion, ui } = useLang().c;

  return (
    <section id="formacion" className="section">
      <h2 className="section__title"><span className="pill">{ui.secciones.formacion}</span></h2>
      <div className="edu-list">
        {formacion.map((f) => (
          <article key={f.titulo} className="edu">
            <div className="edu__main">
              <p className="edu__inst">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 4 2 9l10 5 10-5-10-5z" />
                  <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
                </svg>
                {f.institucion}
              </p>
              <h3 className="edu__title">{f.titulo}</h3>
              {f.estado && (
                <span className="edu__badge">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
                  {f.estado}
                </span>
              )}
              <p className="edu__desc">{f.descripcion}</p>
            </div>
            <ol className="edu__hitos">
              {f.hitos.map((h) => (
                <li key={h.anio}>
                  <span className="edu__anio">{h.anio}</span>
                  <span className="edu__hito">{h.texto}</span>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  );
}
