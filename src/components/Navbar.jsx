import { perfil } from "../data/content.js";

const links = [
  ["Proyecto final", "#proyecto-final"],
  ["Proyectos", "#proyectos"],
  ["Experiencia", "#experiencia"],
  ["Voluntariados", "#voluntariados"],
  ["Cursos", "#cursos"],
];

export default function Navbar() {
  return (
    <header className="nav">
      <a href="#inicio" className="nav__brand" aria-label="Ir al inicio">
        <span className="nav__star" aria-hidden="true">✦</span>
        <span>
          {perfil.nombre.split(" ")[0].toUpperCase()}
          <br />
          {perfil.nombre.split(" ")[1].toUpperCase()}
        </span>
      </a>
      <nav className="nav__links" aria-label="Secciones">
        {links.map(([t, h]) => (
          <a key={h} href={h}>{t}</a>
        ))}
      </nav>
      <a href="#contacto" className="btn btn--pill">Contacto →</a>
    </header>
  );
}
