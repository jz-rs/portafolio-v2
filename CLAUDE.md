# Portfolio de Jezabel Rosso

Sitio personal en React + Vite, en español e inglés. El contenido está en `src/data/content.js` (español) y `src/data/content.en.js` (inglés); el diseño en `src/styles.css`; cada sección es un componente en `src/components/`.

Las notas personales (decisiones de contenido, carpetas locales, pendientes) están en `CLAUDE.local.md`, que no se sube al repo.

**Idiomas:** los dos archivos de contenido tienen exactamente la misma estructura. Todo cambio de contenido se hace en los dos. Los textos fijos de la interfaz (menú, botones, títulos de sección) están en el objeto `ui` de cada archivo. `src/i18n.jsx` elige el idioma (el último que eligió la persona, guardado en el navegador; si no, el del navegador) y los componentes lo leen con `useLang()`. En la barra hay un selector ES / EN.

Comandos: `npm install`, `npm run dev` (desarrollo, en http://localhost:5173), `npm run build` (compilar).

Repositorio: https://github.com/jz-rs/portafolio-v2 (rama `main`). Sitio publicado: https://portafolio-v2-cyan.vercel.app (Vercel, conectado al repo: cada push a `main` se publica solo en uno o dos minutos).

## Reglas
- No inventar contenido: lo que falta se deja como `[COMPLETAR]` y se pregunta.
- No cambiar contenido ni código que no se pidió. Si ves algo para mejorar, avisar antes de tocarlo.
- Mantener este archivo (y `CLAUDE.local.md`) actualizado con cada cambio de contenido, diseño o estructura.
- Español rioplatense, tono profesional y cercano. Textos cortos: RRHH lee rápido.
- Las traducciones al inglés las hizo Claude: si cambia un texto en español, hay que actualizar la traducción.
- Nunca subir claves, tokens, archivos `.env` ni documentos con datos personales (DNI, teléfonos, mails no confirmados).

## Diseño
- Paleta cálida: crema `#fbf1e3`, bordó `#6b1e2e` (`--terra`), bordó oscuro `#4a1420` (`--terra-d`, para botones y fondos con texto), rosado `#e8a9b3` (`--accent-on-dark`, para texto y detalles sobre fondos oscuros), verde oliva `#6b6a3a`, casi negro `#1c1613`.
- Tipografías Archivo (títulos) e Inter (texto).
- Logo: pez espina (`src/components/FishIcon.jsx`, toma el color con `currentColor` y el tamaño por `size`). Se usa en la barra, la etiqueta de la portada y el footer. El favicon (`public/favicon.svg`) es el mismo pez en bordó sobre crema.
- Tarjetas de proyecto como ventanitas estilo retro.
- Portada: al costado va su foto (`public/media/perfil.webp`, recortada y sin fondo, se esfuma abajo) sobre un círculo bordó, con detalles retro-futuristas: órbita, destello, panel oliva con un globo de líneas, panel oscuro con paisaje de grilla y luna rosada y estrellitas.
- Sin emojis en la interfaz: la ubicación de la portada usa un ícono SVG de línea en bordó y la disponibilidad, un puntito verde oliva.
- Los links a sitios en vivo y documentos destacados son un botón rosado con texto oscuro y flecha ↗.
- La tarjeta de Formación va en color vino (`--terra`) con letras blancas. A la izquierda: la universidad como etiqueta chica en rosado (con ícono de birrete), la carrera grande (Archivo 900 en mayúsculas), la etiqueta "Graduada" con ✓ y la descripción. A la derecha, una línea de tiempo con los hitos (año grande + mes y qué pasó). En celular se apila.
- Voluntariados se ve distinto de Cursos: el destacado es una tarjeta azul NASA (`#0b3d91` a `#061f4f`, única excepción a la paleta) a todo el ancho, con fondo de puntitos, título grande en mayúsculas y un planeta rosado con órbita y destellos; los demás van en tarjetas arena con un borde bordó grueso a la izquierda, de a dos por fila.
- Contraste: el texto chico necesita al menos 4,5:1. Nunca bordó sobre fondo oscuro: ahí va el rosado (hover del menú, puntos de la línea de tiempo, etiqueta "Actual", contorno de foco). Sobre el verde oliva, el rosado tampoco da contraste: ahí va crema (contorno de foco, período de Ristorino).
- Tiene que verse bien en celular, sin scroll horizontal: las grillas usan `minmax(min(Npx, 100%), 1fr)`. Debajo de 900px la barra muestra un menú desplegable (botón ☰).
- Debajo de 600px hay una versión compacta: la barra entra en una sola fila (el botón Contacto pasa al menú), la composición con la foto de la portada se achica (máximo 300px), los hitos de Formación van en fila, el diagrama de Ristorino va en dos columnas y las tarjetas tienen menos relleno.
- Para revisar el celular: emular un dispositivo de 390px (las capturas de Chrome sin ventana con `--window-size` chico no sirven, porque Chrome fuerza un ancho mínimo y todo se ve cortado).

## Estructura de la página
1. Portada · 2. Experiencia laboral · 3. Formación · 4. Proyecto final (Ristorino) · 5. Proyectos destacados · 6. Cursos · 7. Voluntariados · 8. Galería ("Detrás de escena") · 9. Contacto

El orden está pensado para RRHH: primero la experiencia laboral. El menú (`Navbar.jsx`) sigue el mismo orden que la página (`App.jsx`).

## Contenido (`src/data/content.js`)
- `perfil`: `fotoAlt` es el texto alternativo de la foto. `edad` va al lado de la ubicación, con un ícono de calendario en bordó; `{n}` se reemplaza por los años cumplidos, que `Hero.jsx` calcula con `nacimiento`. El título de la portada toma la primera palabra de `titulo` en una línea y el resto, resaltado, en la siguiente.
- `proyectoFinal` (Ristorino): `periodo` es el tiempo de desarrollo, debajo del subtítulo.
- `proyectos`: el orden del array es el orden en la página. Cada uno tiene `nombre`, `archivo` (nombre del repo en GitHub, arma el link), `descripcion` y `stack`. Los títulos quedan cortos a propósito.
- `experiencia`: cada trabajo tiene `empresa`, `rol`, `periodo` (formato "Marzo 2026 — Actualidad", con raya larga) y `descripcion`. Además puede tener `organizacion` (línea debajo del cargo y el período, para el empleador), `detalle` (grupos con `titulo` e `items`, se muestran como listas), `stack` (etiquetas de tecnologías, sin números de versión), `link`/`linkTexto` (botón rosado; en Eclypsium, la carta de recomendación) y `actual: true`.
- `formacion`: carrera universitaria, con `titulo`, `institucion`, `estado` (se muestra como etiqueta con ✓), `descripcion` e `hitos` (lista de `{ anio, texto }` para la línea de tiempo).
- `cursos`: cada curso tiene `area`, `nombre` (el título del certificado; en inglés, su traducción directa), `institucion`, `fecha` y `certificado` (ruta en `public/certificados/`, muestra el link "Ver certificado ↗" que lo abre en otra pestaña). Se muestra una tarjeta por área, con sus cursos en lista, para que queden grupos parejos y ninguna tarjeta suelta.
- `voluntariados`: el orden del array es el orden en la página (el actual primero). Cada uno tiene `nombre`, `rol`, `periodo`, `descripcion` y, si sigue, `actual: true`. Con `destacado: true` va en la tarjeta grande. Puede tener `links` (lista de `{ url, texto }`): botones rosados en la destacada y un link chico en bordó en las tarjetas arena.
- `galeria`: fotos y videos del carrusel "Detrás de escena". Cada uno tiene `tipo` (`imagen` o `video`), `src`, `poster` (solo videos: imagen de portada), `etiqueta` (trabajo, proyecto o actividad), `texto` (pie corto), `ancho: true` para las horizontales y `contener: true` si no se puede recortar (capturas y flyers). Los archivos están en `public/media/galeria/`.
- `contacto`: `invitacion`, `email`, `github` y `linkedin`. Mientras un dato diga `[COMPLETAR]` se muestra como texto; cuando se completa, el mail y LinkedIn pasan a ser links solos.

## Notas técnicas
- Galería (`Galeria.jsx`): el carrusel avanza solo, se frena al pasar el mouse o con el botón Pausar, y con "reducir movimiento" se recorre deslizando. Al tocar una tarjeta se abre un visor (`<dialog>`) con flechas, Esc y teclado; los videos se ven ahí con controles, nunca se reproducen solos en el carrusel. La lista va duplicada para que dé la vuelta sin cortes (la copia no se lee ni se enfoca).
- Media: imágenes en WebP (máx. 1400px) y videos comprimidos con ffmpeg (H.264, 1280px, 24 fps, audio mono 64k).
- Certificados (`public/certificados/`): PDF livianos (los pesados se pasan a imagen JPEG dentro del PDF) o WebP, siempre con el DNI tapado y borrado del texto, y sin metadatos.
- Visitas (`src/visitas.js`, se arranca en `main.jsx`): manda visitas, secciones vistas, clics y tiempo al panel privado (repo `panel-portafolio`, en `/api/evento`). Sin cookies. No cuenta en desarrollo (salvo con `VITE_PANEL_URL`) ni a quien abrió el sitio con `?nocontar=1`. Los clics se nombran sin depender del idioma (por ejemplo, "Certificado: utn-react", "GitHub: ristorino-portal"). Los links con `?ref=` (por ejemplo `?ref=cv`) muestran en el panel por qué canal llegó la visita.
- Escribir los archivos de una sola vez (archivo temporal y después renombrar). Si un archivo queda vacío aunque sea un instante, Vite puede quedarse con esa versión y la página queda en blanco. Si pasa, alcanza con volver a guardar el archivo.
