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
          
          <div className="footer-contact">
            <h4>Contacto</h4>
            <div className="contact-info">
              <p>jimenamendezmorales@gmail.com</p>
              <p>+506 8623-5570</p>
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