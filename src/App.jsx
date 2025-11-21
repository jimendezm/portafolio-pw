import { useState, useEffect } from 'react';
import Header from './components/header';
import Presentacion from './components/presentacion';
import Trabajos from './components/trabajos';
import Informacion from './components/informacion';
import Hobbies from './components/hobbies';
import ExperienciasTEC from './components/experiencias';
import MetasProfesionales from './components/metas';
import Recomendaciones from './components/recomendaciones';
import Footer from './components/footer';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/overrides.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga inicial
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <h2>Jimena Méndez Morales</h2>
          <p>Cargando portafolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Presentacion />
        <Trabajos />
        <Informacion />
        <Hobbies />
        <ExperienciasTEC />
        <MetasProfesionales />
        <Recomendaciones />
      </main>
      <Footer />
    </div>
  );
}

export default App;