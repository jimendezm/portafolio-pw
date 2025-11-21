import { useState, useEffect } from 'react';
import Header from './components/Header';
import Presentacion from './components/Presentacion';
import Trabajos from './components/Trabajos';
import Informacion from './components/Informacion';
import Hobbies from './components/Hobbies';
import ExperienciasTEC from './components/ExperienciasTEC';
import MetasProfesionales from './components/MetasProfesionales';
import Recomendaciones from './components/Recomendaciones';
import Footer from './components/Footer';
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