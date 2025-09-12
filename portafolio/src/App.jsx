import Header from "./components/header";
import Presentacion from "./components/presentacion";
import Trabajos from "./components/trabajos";
import Informacion from "./components/informacion";
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
      </main>
      <Footer />
    </>
  );
}

export default App;