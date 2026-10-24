import { contacto } from "../data/content.js";

// Mientras un dato diga [COMPLETAR] se muestra como texto, no como link.
const pendiente = (valor) => valor.startsWith("[COMPLETAR]");

export default function Contacto() {
  return (
    <section id="contacto" className="section">
      <div className="cta">
        <div>
          <h2>Trabajemos juntos</h2>
          <p>{contacto.invitacion}</p>
        </div>
        <ul>
          <li>
            <strong>Mail</strong>{" "}
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
                {contacto.linkedin.replace(/^https?:\/\/(www\.)?/, "")}
              </a>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
}
