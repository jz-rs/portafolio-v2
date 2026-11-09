// Genera el HTML inicial del sitio durante `npm run build` (ver scripts/prerender.mjs),
// para que buscadores y vistas previas lean el contenido sin ejecutar JavaScript.
import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import { LangProvider } from "./i18n.jsx";

export function renderizar() {
  return renderToString(
    <LangProvider inicial="es">
      <App />
    </LangProvider>
  );
}
