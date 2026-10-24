# Portfolio de Jezabel Rosso

Sitio personal en React + Vite. Todo el contenido está en `src/data/content.js`; el diseño en `src/styles.css`; cada sección es un componente en `src/components/`.

En `experiencia` (content.js), cada trabajo puede tener además: `organizacion` (línea debajo del nombre, para el empleador), `detalle` (grupos con `titulo` e `items`, se muestran como listas), `stack` (etiquetas de tecnologías), `link`/`linkTexto` y `actual: true`.

Comandos: `npm install`, `npm run dev` (desarrollo), `npm run build` (compilar).

## Reglas
- No inventar contenido: lo que falta se deja como `[COMPLETAR]`.
- No cambiar contenido ni código que no se pidió. Si ves algo para mejorar, avisar antes de tocarlo.
- Español rioplatense, tono profesional y cercano.
- En Proyecto final y Proyectos destacados no debe haber menciones universitarias (README, textos, código).
- Excepción: ODS Córdoba (Experiencia) menciona a la Universidad Blas Pascal (UBP) y la Universidad Libre del Ambiente (ULA). Es un trabajo pago en un proyecto de investigación de esas universidades: se presentan como empleador en `organizacion`, nunca como proyecto propio o académico.
- ODS Córdoba y S-interio son trabajos pagos y actuales; van en Experiencia laboral, no en Proyectos. El proyecto final es Ristorino.
- Mantener este archivo actualizado con cada cambio de contenido, diseño o estructura.
- No publicar datos de contacto (mail, teléfono) sin que ella lo confirme.
- Nunca subir claves, tokens ni archivos `.env` al repositorio.

## Diseño
Paleta cálida: crema `#fbf1e3`, bordó `#6b1e2e` (oscuro `#4a1420` para botones y fondos con texto), rosado `#e8a9b3` para detalles sobre fondos oscuros, verde oliva `#6b6a3a`, casi negro `#1c1613`. Tipografías Archivo (títulos) e Inter (texto). El logo es un pez espina (`src/components/FishIcon.jsx`, toma el color con `currentColor`). Tarjetas de proyecto como ventanitas estilo retro. Tiene que verse bien en celular, con buen contraste y sin scroll horizontal.

## Estructura de la página
1. Portada · 2. Experiencia laboral · 3. Proyecto final (Ristorino) · 4. Proyectos destacados · 5. Cursos · 6. Voluntariados · 7. Contacto

## Pendiente
Completar: frase de presentación y disponibilidad (portada), período y tareas de cada voluntariado, LinkedIn, mail y la línea de invitación de Contacto.

Ya completos: Experiencia (S-interio, ODS Córdoba y Eclypsium).
