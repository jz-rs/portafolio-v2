import { perfil } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <span>✦ {perfil.nombre} · {perfil.titulo}</span>
      <a href="#inicio">Volver arriba ↑</a>
    </footer>
  );
}
