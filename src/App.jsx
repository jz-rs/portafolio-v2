import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProyectoFinal from "./components/ProyectoFinal.jsx";
import Proyectos from "./components/Proyectos.jsx";
import Experiencia from "./components/Experiencia.jsx";
import Voluntariados from "./components/Voluntariados.jsx";
import Cursos from "./components/Cursos.jsx";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProyectoFinal />
        <Proyectos />
        <Experiencia />
        <Voluntariados />
        <Cursos />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
