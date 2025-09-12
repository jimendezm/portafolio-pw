import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("presentacion");

  // Cerrar menú al hacer clic en un enlace (solo móviles)
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setOpen(false);
    }
  };

  // Detectar la sección actual al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "presentacion";
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span>Portafolio</span>
        </div>
        
        <button
          className={`menu-btn ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`nav ${open ? "open" : ""}`}>
          <a 
            href="#presentacion" 
            className={activeSection === "presentacion" ? "active" : ""}
            onClick={handleLinkClick}
          >
            Presentación
          </a>
          <a 
            href="#trabajos" 
            className={activeSection === "trabajos" ? "active" : ""}
            onClick={handleLinkClick}
          >
            Trabajos
          </a>
          <a 
            href="#informacion" 
            className={activeSection === "informacion" ? "active" : ""}
            onClick={handleLinkClick}
          >
            Información
          </a>
        </nav>
      </div>
    </header>
  );
}