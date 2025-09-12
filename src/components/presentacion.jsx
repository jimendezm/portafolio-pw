import foto from '../assets/imagen.jpg';

export default function Presentacion() {
  return (
    <section id="presentacion" className="presentacion-container">
      <div className="presentacion-content">
        <div className="foto-container">
          <img 
            src={foto} 
            alt="Jimena Méndez Morales" 
            className="foto-perfil"
          />
        </div>
        <div className="texto-presentacion">
          <h2>Bienvenid@</h2>
          <p>
            Hola, soy <strong>Jimena Méndez Morales</strong>, estudiante de
            Ingeniería en Computación en el Instituto Tecnológico de Costa Rica
            (TEC). Este portafolio recopila mis proyectos y aprendizajes en
            diferentes cursos universitarios.
          </p>
          <p>
            Si bien el desarrollo web me resulta interesante, mi mayor motivación
            está en explorar áreas como la ciberseguridad, hacia
            donde quiero orientar mi carrera profesional.
          </p>
        </div>
      </div>
    </section>
  );
}