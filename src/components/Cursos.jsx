import { useLang } from "../i18n.jsx";

export default function Cursos() {
  const { cursos, ui } = useLang().c;
  // Una tarjeta por área, en el orden en que aparecen en los datos.
  const areas = [...new Set(cursos.map((c) => c.area))];

  return (
    <section id="cursos" className="section">
      <h2 className="section__title"><span className="pill">{ui.secciones.cursos}</span></h2>
      <div className="cards cards--3">
        {areas.map((area) => (
          <article key={area} className="card curso-grupo">
            <h3 className="curso__area">{area}</h3>
            <ul className="curso-grupo__lista">
              {cursos.filter((c) => c.area === area).map((c) => (
                <li key={c.nombre}>
                  <p className="curso__nombre">{c.nombre}</p>
                  <p className="card__meta">{c.institucion} · {c.fecha}</p>
                  {c.certificado && (
                    <a className="curso__certificado" href={c.certificado} target="_blank" rel="noreferrer">
                      {ui.verCertificado} ↗
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
