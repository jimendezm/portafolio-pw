import Header from "./components/header";
import Presentacion from "./components/presentacion";
import Trabajos from "./components/trabajos";
import Informacion from "./components/informacion";
import Recomendaciones from "./components/recomendaciones";
import Hobbies from "./components/hobbies";
import ExperienciasTEC from "./components/experiencias";
import Footer from "./components/footer";

import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/overrides.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="presentacion">
          <Presentacion />
        </section>
        <section id="trabajos">
          <Trabajos />
        </section>
        <section id="informacion">
          <Informacion />
        </section>
        <section id="hobbies">
          <Hobbies />
        </section>
        <section id="experiencias-tec">
          <ExperienciasTEC />
        </section>
        <section id="recomendaciones">
          <Recomendaciones />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;