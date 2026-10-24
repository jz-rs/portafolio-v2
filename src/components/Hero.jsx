import { perfil } from "../data/content.js";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__text">
        <span className="tag">✦ {perfil.titulo}</span>
        <h1>
          <span>{perfil.titulo.split(" ")[0]}</span>
          <span className="accent">{perfil.titulo.split(" ")[1]}</span>
          <span>{perfil.nombre}</span>
        </h1>
        <p className="hero__lead">{perfil.frase}</p>
        <div className="hero__cta">
          <a href="#proyectos" className="btn">Ver proyectos →</a>
          <a href="#contacto" className="link">Contacto</a>
        </div>
        <ul className="hero__facts">
          <li>📍 {perfil.ubicacion}</li>
          <li>● {perfil.disponibilidad}</li>
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
