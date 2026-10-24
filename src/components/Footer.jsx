import { perfil } from "../data/content.js";
import FishIcon from "./FishIcon.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__brand">
        <FishIcon size={20} /> {perfil.nombre} · {perfil.titulo}
      </span>
      <a href="#inicio">Volver arriba ↑</a>
    </footer>
  );
}
