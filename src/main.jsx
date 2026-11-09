import React from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LangProvider } from "./i18n.jsx";
import "./styles.css";
import { iniciarVisitas } from "./visitas.js";
import { mostrarFirma } from "./consola.js";

mostrarFirma();

const raiz = createRoot(document.getElementById("root"));

// Se dibuja de forma sincrónica para que, cuando arrancan las visitas, ya estén
// las secciones definitivas y el idioma correcto (el HTML inicial viene en español).
flushSync(() => {
  raiz.render(
    <React.StrictMode>
      <LangProvider>
        <App />
      </LangProvider>
    </React.StrictMode>
  );
});

iniciarVisitas();
