import { useState } from "react";
import { perfil } from "../data/content.js";
import FishIcon from "./FishIcon.jsx";

const links = [
  ["Proyecto final", "#proyecto-final"],
  ["Proyectos", "#proyectos"],
  ["Experiencia", "#experiencia"],
  ["Voluntariados", "#voluntariados"],
  ["Cursos", "#cursos"],
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const cerrar = () => setAbierto(false);

  return (
    <header className={`nav${abierto ? " is-open" : ""}`}>
      <a href="#inicio" className="nav__brand" aria-label="Ir al inicio" onClick={cerrar}>
        <span className="nav__star"><FishIcon size={34} /></span>
        <span>
          {perfil.nombre.split(" ")[0].toUpperCase()}
          <br />
          {perfil.nombre.split(" ")[1].toUpperCase()}
        </span>
      </a>
      <nav id="nav-links" className="nav__links" aria-label="Secciones">
        {links.map(([t, h]) => (
          <a key={h} href={h} onClick={cerrar}>{t}</a>
        ))}
      </nav>
      <div className="nav__actions">
        <a href="#contacto" className="btn btn--pill" onClick={cerrar}>Contacto →</a>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={abierto}
          aria-controls="nav-links"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setAbierto(!abierto)}
        >
          <span aria-hidden="true">{abierto ? "✕" : "☰"}</span>
        </button>
      </div>
    </header>
  );
}
