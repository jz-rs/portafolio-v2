import { useLang } from "../i18n.jsx";
import FishIcon from "./FishIcon.jsx";

export default function Footer() {
  const { perfil, ui } = useLang().c;

  return (
    <footer className="footer">
      <span className="footer__brand">
        <FishIcon size={20} /> {perfil.nombre} · {perfil.titulo}
      </span>
      <a href="#inicio">{ui.volverArriba} ↑</a>
    </footer>
  );
}
