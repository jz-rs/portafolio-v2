// Cuenta visitas y clics para el panel privado (repo panel-portafolio).
// No usa cookies ni guarda nada que identifique a la persona: manda qué sección
// se vio y qué se tocó. El panel calcula país, ciudad y dispositivo del lado del servidor.
// Para que no cuente tus propias visitas, abrí el sitio una vez con ?nocontar=1
// (y con ?nocontar=0 vuelve a contar).

const PANEL = import.meta.env.VITE_PANEL_URL || "https://panel-portafolio.vercel.app";

function noContar() {
  try {
    const p = new URLSearchParams(location.search).get("nocontar");
    if (p === "1") localStorage.setItem("nocontar", "1");
    if (p === "0") localStorage.removeItem("nocontar");
    return localStorage.getItem("nocontar") === "1";
  } catch {
    return false;
  }
}

export function iniciarVisitas() {
  if (import.meta.env.DEV && !import.meta.env.VITE_PANEL_URL) return;
  if (navigator.webdriver || noContar()) return;

  const sesion = crypto.randomUUID?.() || String(Math.random()).slice(2);
  const inicio = Date.now();
  let visible = 0;
  let desde = document.visibilityState === "visible" ? inicio : null;

  function enviar(tipo, datos = {}) {
    const cuerpo = JSON.stringify({ tipo, sesion, idioma: document.documentElement.lang, ...datos });
    const url = `${PANEL}/api/evento`;
    if (!navigator.sendBeacon?.(url, cuerpo)) {
      fetch(url, { method: "POST", body: cuerpo, keepalive: true, mode: "cors" }).catch(() => {});
    }
  }

  let referente = "";
  try {
    referente = document.referrer ? new URL(document.referrer).hostname : "";
  } catch {
    // Referente raro: cuenta como directo.
  }
  enviar("visita", { ref: new URLSearchParams(location.search).get("ref"), referente });

  // Secciones vistas: una vez cada una, cuando se ve al menos un 40 %.
  const vistas = new Set();
  const observador = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (e.isIntersecting && !vistas.has(e.target.id)) {
          vistas.add(e.target.id);
          enviar("seccion", { objetivo: e.target.id });
          observador.unobserve(e.target);
        }
      }
    },
    { threshold: 0.4 }
  );
  // React dibuja la página después de que arranca este script: se espera a que estén las secciones.
  let intentos = 0;
  const observar = () => {
    const secciones = document.querySelectorAll("main section[id]");
    if (secciones.length) secciones.forEach((s) => observador.observe(s));
    else if (intentos++ < 40) setTimeout(observar, 250);
  };
  observar();

  // Clics: se describe qué se tocó con un nombre que no depende del idioma.
  document.addEventListener("click", (ev) => {
    const objetivo = describir(ev.target);
    if (objetivo) enviar("clic", { objetivo });
  }, { capture: true });

  // Tiempo en la página (solo mientras la pestaña está a la vista).
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      desde = Date.now();
    } else {
      if (desde) visible += Date.now() - desde;
      desde = null;
      enviar("salida", { duracion: visible / 1000 });
    }
  });
}

function archivo(ruta) {
  return ruta.split("/").pop().replace(/\.[a-z0-9]+$/i, "");
}

function describir(el) {
  const boton = el.closest("button");
  if (boton) {
    if (boton.closest(".lang")) return `Idioma: ${boton.textContent.trim()}`;
    if (boton.classList.contains("galeria__boton")) {
      const img = boton.querySelector("img");
      return img ? `Galería: ${archivo(img.getAttribute("src"))}` : "Galería";
    }
    if (boton.classList.contains("galeria__pausa")) return "Galería: pausar";
    return null;
  }

  const a = el.closest("a[href]");
  if (!a) return null;
  const href = a.getAttribute("href");
  if (href.startsWith("#")) return `Ir a: ${href.slice(1) || "inicio"}`;
  if (href.startsWith("mailto:")) return "Mail";
  if (href.startsWith("/certificados/")) return `Certificado: ${archivo(href)}`;

  let url;
  try {
    url = new URL(href, location.href);
  } catch {
    return null;
  }
  const host = url.hostname.replace(/^www\./, "");
  if (host === "github.com") {
    const repo = url.pathname.split("/").filter(Boolean)[1];
    return repo ? `GitHub: ${repo}` : "GitHub: perfil";
  }
  if (host.includes("linkedin")) return "LinkedIn";
  if (host === "youtu.be" || host.includes("youtube")) return "Charla NASA (YouTube)";
  if (host.includes("instagram")) return "Instagram NASA";
  if (url.origin === location.origin) return `Archivo: ${archivo(url.pathname)}`;
  return `Sitio: ${host}`;
}
