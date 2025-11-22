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