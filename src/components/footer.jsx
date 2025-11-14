export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Jimena Méndez Morales</h3>
            <p>Estudiante de Ingeniería en Computación</p>
            <p>Tecnológico de Costa Rica</p>
          </div>
          
          <div className="footer-links">
            <h4>Enlaces rápidos</h4>
            <div className="links-grid">
              <a href="#presentacion">Inicio</a>
              <a href="#trabajos">Trabajos</a>
              <a href="#informacion">Información</a>
              <a href="#hobbies">Hobbies</a>
              <a href="#experiencias-tec">Experiencias</a>
              <a href="#metas">Metas</a>
              <a href="#recomendaciones">Recomendaciones</a>
            </div>
          </div>
          
          <div className="footer-contact">
            <h4>Contacto</h4>
            <div className="contact-info">
              <p>jimenamendez@email.com</p>
              <p>+506 8888-8888</p>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn"></a>
                <a href="#" aria-label="GitHub"></a>
                <a href="#" aria-label="Email"></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} - Portafolio de Jimena Méndez Morales</p>
        </div>
      </div>
    </footer>
  );
}