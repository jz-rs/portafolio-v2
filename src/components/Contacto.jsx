import { useLang } from "../i18n.jsx";

// Mientras un dato diga [COMPLETAR] se muestra como texto, no como link.
const pendiente = (valor) => valor.startsWith("[COMPLETAR]");

export default function Contacto() {
  const { contacto, ui } = useLang().c;

  return (
    <section id="contacto" className="section">
      <div className="cta">
        <div>
          <h2>{ui.contactoTitulo}</h2>
          <p>{contacto.invitacion}</p>
        </div>
        <ul>
          <li>
            <strong>{ui.mail}</strong>{" "}
            {pendiente(contacto.email) ? (
              contacto.email
            ) : (
              <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
            )}
          </li>
          <li>
            <strong>GitHub</strong>{" "}
            <a href={contacto.github} target="_blank" rel="noreferrer">{contacto.github.replace("https://", "")}</a>
          </li>
          <li>
            <strong>LinkedIn</strong>{" "}
            {pendiente(contacto.linkedin) ? (
              contacto.linkedin
            ) : (
              <a href={contacto.linkedin} target="_blank" rel="noreferrer">
                {contacto.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
              </a>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
}
