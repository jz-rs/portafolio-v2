import { useEffect, useRef, useState } from "react";
import { useLang } from "../i18n.jsx";

function Tarjeta({ item, ui, onAbrir, oculta }) {
  return (
    <li className={`galeria__item${item.ancho ? " galeria__item--ancho" : ""}`} aria-hidden={oculta || undefined}>
      <button type="button" className="galeria__boton" onClick={onAbrir} tabIndex={oculta ? -1 : undefined}>
        <span className={`galeria__media${item.contener ? " galeria__media--contener" : ""}`}>
          <img src={item.poster || item.src} alt="" loading="lazy" />
          {item.tipo === "video" && (
            <span className="galeria__play" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </span>
          )}
        </span>
        <span className="galeria__pie">
          <span className="galeria__etiqueta">{item.etiqueta}</span>
          <span className="galeria__texto">{item.texto}</span>
        </span>
        <span className="visually-hidden">{item.tipo === "video" ? ui.galeria.video : ui.galeria.abrir}</span>
      </button>
    </li>
  );
}

export default function Galeria() {
  const { galeria, ui } = useLang().c;
  const [pausado, setPausado] = useState(false);
  const [abierto, setAbierto] = useState(null);
  const dialogo = useRef(null);

  useEffect(() => {
    const d = dialogo.current;
    if (abierto !== null && !d.open) d.showModal();
    if (abierto === null && d.open) d.close();
  }, [abierto]);

  const mover = (paso) => setAbierto((i) => (i + paso + galeria.length) % galeria.length);
  const teclas = (e) => {
    if (e.key === "ArrowRight") mover(1);
    if (e.key === "ArrowLeft") mover(-1);
  };
  const actual = abierto !== null ? galeria[abierto] : null;

  return (
    <section id="galeria" className="section">
      <h2 className="section__title"><span className="pill">{ui.secciones.galeria}</span></h2>
      <div className="galeria__cabecera">
        <p className="galeria__intro">{ui.galeria.intro}</p>
        <button type="button" className="galeria__pausa" onClick={() => setPausado((p) => !p)} aria-pressed={pausado}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {pausado ? <path d="M8 5v14l11-7z" /> : <path d="M7 5h4v14H7zM13 5h4v14h-4z" />}
          </svg>
          {pausado ? ui.galeria.reanudar : ui.galeria.pausar}
        </button>
      </div>

      {/* La lista va dos veces seguidas para que el carrusel dé la vuelta sin saltos; la copia no se lee ni se enfoca. */}
      <div className={`galeria${pausado ? " is-paused" : ""}`}>
        <ul className="galeria__pista">
          {galeria.map((item, i) => (
            <Tarjeta key={item.src} item={item} ui={ui} onAbrir={() => setAbierto(i)} />
          ))}
          {galeria.map((item, i) => (
            <Tarjeta key={`copia-${item.src}`} item={item} ui={ui} onAbrir={() => setAbierto(i)} oculta />
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogo}
        className="visor"
        onClose={() => setAbierto(null)}
        onKeyDown={teclas}
        onClick={(e) => e.target === dialogo.current && setAbierto(null)}
        aria-label={actual?.texto}
      >
        {actual && (
          <figure className="visor__cuerpo">
            {actual.tipo === "video" ? (
              <video key={actual.src} src={actual.src} poster={actual.poster} controls autoPlay playsInline />
            ) : (
              <img src={actual.src} alt={actual.texto} />
            )}
            <figcaption>
              <span className="galeria__etiqueta">{actual.etiqueta}</span> {actual.texto}
            </figcaption>
          </figure>
        )}
        <button type="button" className="visor__cerrar" onClick={() => setAbierto(null)} aria-label={ui.galeria.cerrar}>✕</button>
        <button type="button" className="visor__flecha visor__flecha--prev" onClick={() => mover(-1)} aria-label={ui.galeria.anterior}>←</button>
        <button type="button" className="visor__flecha visor__flecha--next" onClick={() => mover(1)} aria-label={ui.galeria.siguiente}>→</button>
      </dialog>
    </section>
  );
}
