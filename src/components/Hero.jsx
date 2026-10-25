import { useLang } from "../i18n.jsx";
import FishIcon from "./FishIcon.jsx";

// Años cumplidos a hoy, a partir de una fecha "AAAA-MM-DD".
function aniosCumplidos(fecha) {
  const [a, m, d] = fecha.split("-").map(Number);
  const hoy = new Date();
  const yaCumplio = hoy.getMonth() + 1 > m || (hoy.getMonth() + 1 === m && hoy.getDate() >= d);
  return hoy.getFullYear() - a - (yaCumplio ? 0 : 1);
}

export default function Hero() {
  const { perfil, ui } = useLang().c;
  // Primera palabra del título en una línea y el resto, resaltado, en la siguiente.
  const [primera, ...resto] = perfil.titulo.split(" ");

  return (
    <section id="inicio" className="hero">
      <div className="hero__text">
        <span className="tag tag--icon"><FishIcon size={16} /> {perfil.titulo}</span>
        <h1>
          <span>{primera}</span>
          {resto.length > 0 && <span className="accent">{resto.join(" ")}</span>}
          <span>{perfil.nombre}</span>
        </h1>
        <p className="hero__lead">{perfil.frase}</p>
        <div className="hero__cta">
          <a href="#proyecto-final" className="btn">{ui.verProyectos} →</a>
          <a href="#contacto" className="link">{ui.nav.contacto}</a>
        </div>
        <ul className="hero__facts">
          <li>
            <svg className="hero__icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
              <circle cx="12" cy="10" r="2.4" />
            </svg>
            {perfil.ubicacion}
          </li>
          <li>
            <svg className="hero__icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="5.5" width="16" height="14.5" rx="2.5" />
              <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
            </svg>
            {perfil.edad.replace("{n}", aniosCumplidos(perfil.nacimiento))}
          </li>
          <li>
            <span className="hero__status" aria-hidden="true" />
            {perfil.disponibilidad}
          </li>
        </ul>
      </div>
      <div className="hero__art">
        <div className="art art--sun" aria-hidden="true" />
        <svg className="art art--orbit" viewBox="0 0 200 80" aria-hidden="true">
          <ellipse cx="100" cy="40" rx="96" ry="34" />
          <circle cx="22" cy="20" r="4" />
        </svg>
        <svg className="art art--burst" viewBox="0 0 100 100" aria-hidden="true">
          {Array.from({ length: 16 }, (_, i) => (
            <line key={i} x1="50" y1="50" x2="50" y2={i % 2 ? 14 : 2} transform={`rotate(${i * 22.5} 50 50)`} />
          ))}
          <circle cx="50" cy="50" r="5" />
        </svg>
        <div className="art art--moss" aria-hidden="true">
          <svg viewBox="0 0 120 120">
            <ellipse cx="60" cy="60" rx="52" ry="52" />
            <ellipse cx="60" cy="60" rx="52" ry="18" />
            <ellipse cx="60" cy="60" rx="52" ry="36" />
            <ellipse cx="60" cy="60" rx="18" ry="52" />
            <ellipse cx="60" cy="60" rx="36" ry="52" />
            <line x1="8" y1="60" x2="112" y2="60" />
            <line x1="60" y1="8" x2="60" y2="112" />
          </svg>
        </div>
        <img className="art art--foto" src="/media/perfil.webp" alt={perfil.fotoAlt} width="800" height="848" />
        <div className="art art--dark" aria-hidden="true">
          <span className="art__luna" />
          <svg viewBox="0 0 100 60" preserveAspectRatio="none">
            {[30, 38, 46, 54].map((y) => <line key={y} x1="0" y1={y} x2="100" y2={y} />)}
            {[0, 20, 40, 60, 80, 100].map((x) => <line key={x} x1="50" y1="22" x2={x} y2="60" />)}
            <polyline points="0,40 14,30 26,36 40,22 52,32 66,18 80,30 100,24" />
          </svg>
        </div>
        <svg className="art art--spark art--spark1" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 0 12 8 20 10 12 12 10 20 8 12 0 10 8 8Z" /></svg>
        <svg className="art art--spark art--spark2" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 0 12 8 20 10 12 12 10 20 8 12 0 10 8 8Z" /></svg>
        <svg className="art art--spark art--spark3" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 0 12 8 20 10 12 12 10 20 8 12 0 10 8 8Z" /></svg>
      </div>
    </section>
  );
}
