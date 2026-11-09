// Mensaje para quien abre la consola del navegador. Usa la paleta del sitio.

const base = "font-family: Archivo, Inter, system-ui, sans-serif; display: inline-block;";

export function mostrarFirma() {
  console.log(
    "%c¿Buscabas algo? 👀%c\n%cAcá no hay nada para romper, pero sí para ver%c\n%cDeveloped by Jezabel Rosso",
    `${base} margin-top: 8px; padding: 14px 22px; font-size: 26px; font-weight: 900; color: #fbf1e3; background: #6b1e2e; border-radius: 10px 10px 0 0;`,
    "",
    `${base} padding: 10px 22px; font-size: 14px; font-weight: 600; color: #1c1613; background: #e8a9b3;`,
    "",
    `${base} margin-bottom: 8px; padding: 8px 22px; font-size: 12px; font-weight: 700; letter-spacing: .06em; color: #e8a9b3; background: #4a1420; border-radius: 0 0 10px 10px;`
  );
}
