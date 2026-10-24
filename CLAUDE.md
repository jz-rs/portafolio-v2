# Portfolio de Jezabel Rosso

Sitio personal en React + Vite. Todo el contenido está en `src/data/content.js`; el diseño en `src/styles.css`; cada sección es un componente en `src/components/`.

Comandos: `npm install`, `npm run dev` (desarrollo, en http://localhost:5173), `npm run build` (compilar).

Repositorio: https://github.com/jz-rs/portafolio-v2 (rama `main`). Subir cambios solo cuando ella lo pida.

## Reglas
- No inventar contenido: lo que falta se deja como `[COMPLETAR]`. Si un dato no se conoce (por ejemplo, el año), se deja así y se pregunta.
- No cambiar contenido ni código que no se pidió. Si ves algo para mejorar, avisar antes de tocarlo.
- Mantener este archivo actualizado con cada cambio de contenido, diseño o estructura.
- Español rioplatense, tono profesional y cercano. Textos cortos: RRHH lee rápido.
- Las frases de presentación (portada y contacto) son profesionales y generales: no la encasillan en un rol o tecnología; lo específico lo cuenta Experiencia.
- Cuando ella pasa un texto y pide ponerlo "tal cual", va literal. Cuando pide resumir, se acorta sin agregar datos.
- No copiar textos promocionales de terceros (por ejemplo, la descripción de la carrera de la web de la UBP): se resumen en una línea propia.
- Ortografía: "Ingeniera" no lleva tilde; "informática" sí.
- En Proyecto final y Proyectos destacados no debe haber menciones universitarias (README, textos, código).
- Excepción: ODS Córdoba (Experiencia) menciona a la Universidad Blas Pascal (UBP) y la Universidad Libre del Ambiente (ULA). Es un trabajo pago en un proyecto de investigación de esas universidades: se presentan como empleador en `organizacion`, nunca como proyecto propio o académico.
- En Experiencia no usar términos académicos que hagan ver un trabajo como algo de la facultad (por ejemplo, en Eclypsium no se menciona "Práctica Profesional Supervisada", alcanza con "Pasante").
- En Formación va la carrera universitaria, con su universidad.
- En Cursos sí pueden figurar universidades como institución que dictó el curso (UTN, UBP, ITBA).
- ODS Córdoba y S-interio son trabajos pagos y actuales; van en Experiencia laboral, no en Proyectos. El proyecto final es Ristorino.
- No publicar datos de contacto (mail, teléfono) sin que ella lo confirme. Ya confirmó el mail (jezabel.rosso.it@gmail.com), GitHub y LinkedIn; el teléfono no se publica. Tampoco DNI ni códigos o IDs de verificación de certificados.
- Nunca subir claves, tokens ni archivos `.env` al repositorio.
- Las carpetas de certificados y material de cursos que están fuera del repo (Escritorio) son solo de lectura: no se modifican.

## Diseño
- Paleta cálida: crema `#fbf1e3`, bordó `#6b1e2e` (`--terra`), bordó oscuro `#4a1420` (`--terra-d`, para botones y fondos con texto), rosado `#e8a9b3` (`--accent-on-dark`, para texto y detalles sobre fondos oscuros), verde oliva `#6b6a3a`, casi negro `#1c1613`.
- Tipografías Archivo (títulos) e Inter (texto).
- Logo: pez espina (`src/components/FishIcon.jsx`, toma el color con `currentColor` y el tamaño por `size`). Se usa en la barra, la etiqueta de la portada y el footer. El favicon (`public/favicon.svg`) es el mismo pez en bordó sobre crema.
- Tarjetas de proyecto como ventanitas estilo retro.
- Sin emojis en la interfaz: la ubicación de la portada usa un ícono SVG de línea en bordó y la disponibilidad, un puntito verde oliva.
- Los links a sitios en vivo (por ejemplo, ODS Córdoba) son un botón rosado con texto oscuro y flecha ↗, para que se vean bien.
- La tarjeta de Formación va en color vino (`--terra`) con letras blancas, como los colores de la UBP.
- Contraste: el texto chico necesita al menos 4,5:1. Nunca bordó sobre fondo oscuro: ahí va el rosado (hover del menú, puntos de la línea de tiempo, etiqueta "Actual", contorno de foco). Sobre el verde oliva el contorno de foco es crema.
- Tiene que verse bien en celular, sin scroll horizontal: las grillas usan `minmax(min(Npx, 100%), 1fr)`. Debajo de 900px la barra muestra un menú desplegable (botón ☰).

## Estructura de la página
1. Portada · 2. Experiencia laboral · 3. Formación · 4. Proyecto final (Ristorino) · 5. Proyectos destacados · 6. Cursos · 7. Voluntariados · 8. Contacto

El orden está pensado para RRHH: primero la experiencia laboral. El menú (`Navbar.jsx`) sigue el mismo orden que la página (`App.jsx`).

## Contenido (`src/data/content.js`)
- `perfil`: `disponibilidad` dice que no busca activamente pero escucha propuestas. El título de la portada toma la primera palabra de `titulo` en una línea y el resto, resaltado, en la siguiente.
- `proyectos`: el orden del array es el orden en la página. Cada uno tiene `nombre`, `archivo` (nombre del repo en GitHub, arma el link), `descripcion` y `stack`. Los títulos quedan cortos a propósito.
- `experiencia`: cada trabajo tiene `empresa`, `rol`, `periodo` (formato "Marzo 2026 — Actualidad", con raya larga) y `descripcion`. Además puede tener `organizacion` (línea debajo del cargo y el período, separada del texto, para el empleador), `detalle` (grupos con `titulo` e `items`, se muestran como listas), `stack` (etiquetas de tecnologías, sin números de versión), `link`/`linkTexto` y `actual: true`.
- `formacion`: carrera universitaria, con `titulo`, `institucion`, `periodo`, `estado` (se muestra como etiqueta) y `descripcion`.
- `cursos`: cada curso tiene `area`, `nombre` (el título del certificado, en español), `en` (nombre en inglés, para la futura versión en inglés), `institucion`, `fecha` y `descripcion` (una línea corta). No se muestran horas. Los cursos se agrupan por área.
- `voluntariados`: el orden del array es el orden en la página (el actual primero). Cada uno tiene `nombre`, `rol`, `periodo`, `descripcion` y, si sigue, `actual: true`.
- `contacto`: `invitacion`, `email`, `github` y `linkedin`. Mientras un dato diga `[COMPLETAR]` se muestra como texto; cuando se completa, el mail y LinkedIn pasan a ser links solos.

## Notas técnicas
- Escribir los archivos de una sola vez (archivo temporal y después renombrar). Si un archivo queda vacío aunque sea un instante, Vite puede quedarse con esa versión y la página queda en blanco. Si pasa, alcanza con volver a guardar el archivo.

## Pendiente
- Tecnologías de Red de Hopfield y de Clasificación y clustering (no se actualizaron).
- La descripción del curso de PLC y Node-RED solo repite el título: mejorarla si aparece el material.

Ya completos: Experiencia (S-interio, ODS Córdoba y Eclypsium), Proyectos (orden, PhotoLab y tecnologías), Formación, Cursos, Voluntariados, Portada y Contacto.

## Ideas propuestas (sin hacer)
- Sección "Herramientas" con la lista completa de tecnologías del trabajo, agrupada por categoría, entre Proyectos y Cursos.
- Versión en inglés con botón ES / EN. Hacerla al final, con todo el contenido en español completo.
- Configurar el deploy (Vercel, GitHub Pages u otro).
