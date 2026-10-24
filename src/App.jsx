import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProyectoFinal from "./components/ProyectoFinal.jsx";
import Proyectos from "./components/Proyectos.jsx";
import Experiencia from "./components/Experiencia.jsx";
import Voluntariados from "./components/Voluntariados.jsx";
import Formacion from "./components/Formacion.jsx";
import Cursos from "./components/Cursos.jsx";
import Galeria from "./components/Galeria.jsx";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experiencia />
        <Formacion />
        <ProyectoFinal />
        <Proyectos />
        <Cursos />
        <Voluntariados />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
