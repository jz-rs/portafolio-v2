// Mete el HTML generado por entry-server.jsx dentro de dist/index.html.
import { readFile, rm, writeFile } from "node:fs/promises";
import { renderizar } from "../dist-ssr/entry-server.js";

const ruta = new URL("../dist/index.html", import.meta.url);
const marca = '<div id="root"></div>';
const html = await readFile(ruta, "utf8");

if (!html.includes(marca)) throw new Error("No se encontró el contenedor #root en dist/index.html");

await writeFile(ruta, html.replace(marca, () => `<div id="root">${renderizar()}</div>`));
await rm(new URL("../dist-ssr", import.meta.url), { recursive: true, force: true });
