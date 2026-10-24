import { useState } from "react";
import { useLang } from "../i18n.jsx";
import FishIcon from "./FishIcon.jsx";

const links = [
  ["experiencia", "#experiencia"],
  ["formacion", "#formacion"],
  ["proyectoFinal", "#proyecto-final"],
  ["proyectos", "#proyectos"],
  ["cursos", "#cursos"],
  ["voluntariados", "#voluntariados"],
];

export default function Navbar() {
  const { lang, setLang, c } = useLang();
  const { perfil, ui } = c;
  const [abierto, setAbierto] = useState(false);
  const cerrar = () => setAbierto(false);

  return (
    <header className={`nav${abierto ? " is-open" : ""}`}>
      <a href="#inicio" className="nav__brand" aria-label={ui.nav.inicio} onClick={cerrar}>
        <span className="nav__star"><FishIcon size={34} /></span>
        <span>
          {perfil.nombre.split(" ")[0].toUpperCase()}
          <br />
          {perfil.nombre.split(" ")[1].toUpperCase()}
        </span>
      </a>
      <nav id="nav-links" className="nav__links" aria-label={ui.nav.secciones}>
        {links.map(([clave, h]) => (
          <a key={h} href={h} onClick={cerrar}>{ui.nav[clave]}</a>
        ))}
        <a href="#contacto" className="nav__solo-movil" onClick={cerrar}>{ui.nav.contacto}</a>
      </nav>
      <div className="nav__actions">
        <div className="lang" role="group" aria-label={ui.nav.idioma}>
          {["es", "en"].map((l) => (
            <button
              key={l}
              type="button"
              className={lang === l ? "is-active" : ""}
              aria-pressed={lang === l}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <a href="#contacto" className="btn btn--pill" onClick={cerrar}>{ui.nav.contacto} →</a>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={abierto}
          aria-controls="nav-links"
          aria-label={abierto ? ui.nav.cerrarMenu : ui.nav.abrirMenu}
          onClick={() => setAbierto(!abierto)}
        >
          <span aria-hidden="true">{abierto ? "✕" : "☰"}</span>
        </button>
      </div>
    </header>
  );
}
