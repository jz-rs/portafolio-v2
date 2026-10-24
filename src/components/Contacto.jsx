import { contacto } from "../data/content.js";

export default function Contacto() {
  return (
    <section id="contacto" className="section">
      <div className="cta">
        <div>
          <h2>Trabajemos juntos</h2>
          <p>[COMPLETAR] Una línea invitando a escribirte.</p>
        </div>
        <ul>
          <li><strong>Mail</strong> {contacto.email}</li>
          <li>
            <strong>GitHub</strong>{" "}
            <a href={contacto.github} target="_blank" rel="noreferrer">{contacto.github.replace("https://", "")}</a>
          </li>
          <li><strong>LinkedIn</strong> {contacto.linkedin}</li>
        </ul>
      </div>
    </section>
  );
}
