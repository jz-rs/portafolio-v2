# Portfolio de Jezabel Rosso

Sitio personal en React + Vite, en español e inglés. El contenido está en `src/data/content.js` (español) y `src/data/content.en.js` (inglés); el diseño en `src/styles.css`; cada sección es un componente en `src/components/`.

**Idiomas:** los dos archivos de contenido tienen exactamente la misma estructura. Todo cambio de contenido se hace en los dos. Los textos fijos de la interfaz (menú, botones, títulos de sección) están en el objeto `ui` de cada archivo. `src/i18n.jsx` elige el idioma (el último que eligió la persona, guardado en el navegador; si no, el del navegador) y los componentes lo leen con `useLang()`. En la barra hay un selector ES / EN.

Comandos: `npm install`, `npm run dev` (desarrollo, en http://localhost:5173), `npm run build` (compilar).

Repositorio: https://github.com/jz-rs/portafolio-v2 (rama `main`). Subir cambios solo cuando ella lo pida.

Sitio publicado: https://portafolio-v2-cyan.vercel.app (proyecto `portafolio-v2` en Vercel, conectado al repo: cada push a `main` se publica solo en uno o dos minutos). Ojo: https://portafolio-v2.vercel.app es de otra persona, no es este sitio.

## Reglas
- No inventar contenido: lo que falta se deja como `[COMPLETAR]`. Si un dato no se conoce (por ejemplo, el año), se deja así y se pregunta.
- No cambiar contenido ni código que no se pidió. Si ves algo para mejorar, avisar antes de tocarlo.
- Mantener este archivo actualizado con cada cambio de contenido, diseño o estructura.
- Español rioplatense, tono profesional y cercano. Textos cortos: RRHH lee rápido.
- Las traducciones al inglés las hizo Claude: si ella cambia un texto en español, hay que actualizar la traducción.
- Las frases de presentación (portada y contacto) son profesionales y generales: no la encasillan en un rol o tecnología; lo específico lo cuenta Experiencia.
- Cuando ella pasa un texto y pide ponerlo "tal cual", va literal. Cuando pide resumir, se acorta sin agregar datos.
- No copiar textos promocionales de terceros (por ejemplo, la descripción de la carrera de la web de la UBP): se resumen en una línea propia.
- El título que se muestra en portada, footer y pestaña es "Ingeniería Informática" (la carrera, con tildes), por decisión de ella. En inglés: "Computer Engineering".
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
- Portada: al costado va su foto (`public/media/perfil.webp`, sacada de `perfil-portafoliov2.jpg`: recortada y sin fondo, se esfuma abajo) sobre un círculo bordó, con detalles retro-futuristas inspirados en la imagen de referencia `analizar.png`: órbita, destello, panel oliva con un globo de líneas, panel oscuro con paisaje de grilla y luna rosada y estrellitas. Sin insignia "J/R": ella la sacó porque parecía sin terminar. Las fotos y videos originales están en `C:\Users\Pc\Desktop\portfolio-media` (solo lectura); al sitio van copias optimizadas en WebP dentro de `public/media/`.
- Sin emojis en la interfaz: la ubicación de la portada usa un ícono SVG de línea en bordó y la disponibilidad, un puntito verde oliva.
- Los links a sitios en vivo (por ejemplo, ODS Córdoba) son un botón rosado con texto oscuro y flecha ↗, para que se vean bien.
- La tarjeta de Formación va en color vino (`--terra`) con letras blancas, como los colores de la UBP. A la izquierda: la universidad como etiqueta chica en rosado (con ícono de birrete), la carrera grande (Archivo 900 en mayúsculas), la etiqueta "Graduada" con ✓ y la descripción. A la derecha, una línea de tiempo con los hitos (año grande + mes y qué pasó). En celular se apila.
- Voluntariados se ve distinto de Cursos: el destacado (NASA) es una tarjeta azul NASA (`#0b3d91` a `#061f4f`, única excepción a la paleta, por pedido de ella) a todo el ancho, con fondo de puntitos, título grande en mayúsculas y un planeta rosado con órbita y destellos; los demás (ONIET) van en tarjetas arena con un borde bordó grueso a la izquierda, de a dos por fila.
- Contraste: el texto chico necesita al menos 4,5:1. Nunca bordó sobre fondo oscuro: ahí va el rosado (hover del menú, puntos de la línea de tiempo, etiqueta "Actual", contorno de foco). Sobre el verde oliva el contorno de foco es crema.
- Tiene que verse bien en celular, sin scroll horizontal: las grillas usan `minmax(min(Npx, 100%), 1fr)`. Debajo de 900px la barra muestra un menú desplegable (botón ☰).
- Debajo de 600px hay una versión compacta: la barra entra en una sola fila (el botón Contacto pasa al menú), la composición con la foto de la portada se achica (máximo 300px), los hitos de Formación van en fila, el diagrama de Ristorino va en dos columnas y las tarjetas tienen menos relleno.
- Para revisar el celular: emular un dispositivo de 390px (las capturas de Chrome sin ventana con `--window-size` chico no sirven, porque Chrome fuerza un ancho mínimo y todo se ve cortado).

## Estructura de la página
1. Portada · 2. Experiencia laboral · 3. Formación · 4. Proyecto final (Ristorino) · 5. Proyectos destacados · 6. Cursos · 7. Voluntariados · 8. Galería ("Detrás de escena") · 9. Contacto

El orden está pensado para RRHH: primero la experiencia laboral. El menú (`Navbar.jsx`) sigue el mismo orden que la página (`App.jsx`).

## Contenido (`src/data/content.js`)
- `perfil`: `fotoAlt` es el texto alternativo de la foto. `disponibilidad` dice que no busca activamente pero escucha propuestas. El título de la portada toma la primera palabra de `titulo` en una línea y el resto, resaltado, en la siguiente.
- `proyectos`: el orden del array es el orden en la página. Cada uno tiene `nombre`, `archivo` (nombre del repo en GitHub, arma el link), `descripcion` y `stack`. Los títulos quedan cortos a propósito.
- `experiencia`: cada trabajo tiene `empresa`, `rol`, `periodo` (formato "Marzo 2026 — Actualidad", con raya larga) y `descripcion`. Además puede tener `organizacion` (línea debajo del cargo y el período, separada del texto, para el empleador), `detalle` (grupos con `titulo` e `items`, se muestran como listas), `stack` (etiquetas de tecnologías, sin números de versión), `link`/`linkTexto` y `actual: true`.
- `formacion`: carrera universitaria, con `titulo`, `institucion`, `estado` (se muestra como etiqueta con ✓), `descripcion` e `hitos` (lista de `{ anio, texto }` para la línea de tiempo).
- `cursos`: cada curso tiene `area`, `nombre` (el título del certificado), `institucion` y `fecha`. Sin descripción ni horas, por pedido de ella. Se muestra una tarjeta por área, con sus cursos en lista, para que queden tres grupos parejos y ninguna tarjeta suelta: Desarrollo (3), Datos, QA y seguridad (4) e Industria 4.0 (3).
- `voluntariados`: el orden del array es el orden en la página (el actual primero). Cada uno tiene `nombre`, `rol`, `periodo`, `descripcion` y, si sigue, `actual: true`. Con `destacado: true` (NASA Space Apps) va en una tarjeta grande aparte. Puede tener `link`/`linkTexto` (botón rosado): el de NASA lleva a la charla en YouTube (https://youtu.be/U19i2LFYMh4, sin el parámetro `si` de seguimiento).
- `galeria`: fotos y videos del carrusel "Detrás de escena". Cada uno tiene `tipo` (`imagen` o `video`), `src`, `poster` (solo videos: imagen de portada), `etiqueta` (trabajo, proyecto o actividad), `texto` (pie corto), `ancho: true` para las horizontales y `contener: true` si no se puede recortar (la captura de GitHub). Los archivos están en `public/media/galeria/`.
- `contacto`: `invitacion`, `email`, `github` y `linkedin`. Mientras un dato diga `[COMPLETAR]` se muestra como texto; cuando se completa, el mail y LinkedIn pasan a ser links solos.

## Notas técnicas
- Galería (`Galeria.jsx`): el carrusel avanza solo, se frena al pasar el mouse o con el botón Pausar, y con "reducir movimiento" se recorre deslizando. Al tocar una tarjeta se abre un visor (`<dialog>`) con flechas, Esc y teclado; los videos se ven ahí con controles, nunca se reproducen solos en el carrusel. La lista va duplicada para que dé la vuelta sin cortes (la copia no se lee ni se enfoca).
- Media: imágenes en WebP (máx. 1400px) y videos comprimidos con ffmpeg (H.264, 1280px, 24 fps, audio mono 64k: los cuatro pesan 14 MB en total). Tiene consentimiento de S-interio y Eclypsium para mostrar estas fotos (ya las publicó en LinkedIn). La captura de GitHub es de su cuenta de trabajo de S-interio, no la personal, y va completa. La de la extensión va sin el mail interno de abajo.
- Escribir los archivos de una sola vez (archivo temporal y después renombrar). Si un archivo queda vacío aunque sea un instante, Vite puede quedarse con esa versión y la página queda en blanco. Si pasa, alcanza con volver a guardar el archivo.

## Pendiente
- Galería: falta la foto de la ONIET. `eclypsium.jpg` (logo) no se usó. (`capitalinas.jpg` es el edificio Capitalinas de Córdoba, donde trabajaba con Eclypsium.)
- El video de Ristorino muestra en el pie de la app "Proyecto académico — Diseño Avanzado de Software, UBP", que va contra la regla de no mencionar la universidad en el proyecto final.

Ya completos: versión en inglés, Experiencia (S-interio, ODS Córdoba y Eclypsium), Proyectos (orden, PhotoLab y tecnologías), Formación, Cursos, Voluntariados, Galería, Portada (con su foto) y Contacto. Ella dio el portfolio por terminado el 24/10/2026.

## Ideas propuestas (sin hacer)
- Sección "Herramientas" con la lista completa de tecnologías del trabajo, agrupada por categoría, entre Proyectos y Cursos.
