import { perfil } from "../data/content.js";
import FishIcon from "./FishIcon.jsx";

export default function Hero() {
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
          <a href="#proyecto-final" className="btn">Ver proyectos →</a>
          <a href="#contacto" className="link">Contacto</a>
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
            <span className="hero__status" aria-hidden="true" />
            {perfil.disponibilidad}
          </li>
        </ul>
      </div>
      <div className="hero__art" aria-hidden="true">
        <div className="art art--sun" />
        <div className="art art--moss" />
        <div className="art art--dark">
          <span>JR</span>
        </div>
        <div className="art art--ring" />
      </div>
    </section>
  );
}
