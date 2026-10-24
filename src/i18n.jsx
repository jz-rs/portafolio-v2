import { createContext, useContext, useEffect, useState } from "react";
import * as es from "./data/content.js";
import * as en from "./data/content.en.js";

const contenidos = { es, en };
const LangContext = createContext(null);

// Usa el idioma que eligió la persona la última vez; si no, el del navegador.
function idiomaInicial() {
  try {
    const guardado = localStorage.getItem("idioma");
    if (guardado === "es" || guardado === "en") return guardado;
  } catch {
    // Sin acceso a localStorage (modo privado, etc.): sigue con el navegador.
  }
  const nav = typeof navigator !== "undefined" ? navigator.language : "es";
  return nav?.toLowerCase().startsWith("es") ? "es" : "en";
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(idiomaInicial);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = contenidos[lang].ui.meta.title;
    try {
      localStorage.setItem("idioma", lang);
    } catch {
      // Si no se puede guardar, el sitio funciona igual.
    }
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, c: contenidos[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

// Devuelve el idioma actual, la función para cambiarlo y el contenido (`c`) en ese idioma.
export function useLang() {
  return useContext(LangContext);
}
