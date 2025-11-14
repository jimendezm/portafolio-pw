import { jsPDF } from "jspdf";
import cvData from "../data/cv.json";

export default function Informacion() {
  const exportarPDF = () => {
    const doc = new jsPDF();
    let y = 20; // Posición vertical inicial

    // Nombre y datos de contacto
    doc.setFontSize(18);
    doc.setFont("Times New Roman", "bold");
    doc.text(cvData.nombre, 20, y);
    
    y += 10;
    doc.setFontSize(12);
    doc.setFont("Times New Roman", "normal");
    doc.text(`Correo: ${cvData.correo}`, 20, y);
    y += 7;
    doc.text(`Teléfono: ${cvData.telefono}`, 20, y);
    y += 15;

    // Biografía
    doc.setFontSize(14);
    doc.setFont("Times New Roman", "bold");
    doc.text("Biografía Profesional", 20, y);
    y += 8;
    doc.setFontSize(12);
    doc.setFont("Times New Roman", "normal");
    doc.text(doc.splitTextToSize(cvData.biografia, 170), 20, y);
    y += 20;

    // Educación
    doc.setFontSize(14);
    doc.setFont("Times New Roman", "bold");
    doc.text("Educación", 20, y);
    y += 8;
    doc.setFont("Times New Roman", "normal");
    cvData.educacion.forEach((edu) => {
      doc.setFontSize(12);
      doc.text(`${edu.titulo} - ${edu.institucion}`, 20, y);
      y += 7;
      doc.text(`Periodo: ${edu.periodo}`, 20, y);
      y += 10;
    });

    // Habilidades
    doc.setFontSize(14);
    doc.setFont("Times New Roman", "bold");
    doc.text("Habilidades Técnicas", 20, y);
    y += 8;
    doc.setFont("Times New Roman", "normal");
    Object.entries(cvData.habilidades).forEach(([categoria, skills]) => {
      doc.setFontSize(12);
      doc.text(`${categoria}: ${skills.join(", ")}`, 20, y);
      y += 7;
    });
    y += 10;

    // Certificaciones
    doc.setFontSize(14);
    doc.setFont("Times New Roman", "bold");
    doc.text("Certificaciones", 20, y);
    y += 8;
    doc.setFont("Times New Roman", "normal");
    cvData.certificaciones.forEach((cert) => {
      doc.setFontSize(12);
      doc.text(`${cert}`, 20, y);
      y += 7;
    });
    y += 10;

    // Redes
    doc.setFontSize(14);
    doc.setFont("Times New Roman", "bold");
    doc.text("Redes Profesionales", 20, y);
    y += 8;
    doc.setFont("Times New Roman", "normal");
    Object.entries(cvData.redes).forEach(([red, url]) => {
      doc.setFontSize(12);
      doc.text(`${red}: ${url}`, 20, y);
      y += 7;
    });
    y += 10;

    // Información adicional
    doc.setFontSize(14);
    doc.setFont("Times New Roman", "bold");
    doc.text("Información Adicional", 20, y);
    y += 8;
    doc.setFontSize(12);
    doc.setFont("Times New Roman", "normal");
    doc.text(doc.splitTextToSize(cvData.infoAdicional, 170), 20, y);

    // Guardar
    doc.save("CV_JimenaMendez.pdf");
  };

  return (
    <section id="informacion" className="informacion-section">
      <div className="informacion-container">
        <h2><strong>Información Personal y Profesional</strong></h2>

        {/* Biografía */}
        <div className="info-card">
          <h3>Biografía Profesional</h3>
          <p>{cvData.biografia}</p>
        </div>

        {/* Educación */}
        <div className="info-card">
          <h3>Educación</h3>
          <div className="educacion-grid">
            {cvData.educacion.map((edu, i) => (
              <div key={i} className="educacion-item">
                <h4>{edu.titulo}</h4>
                <p className="institucion">{edu.institucion}</p>
                <p className="periodo">{edu.periodo}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Habilidades */}
        <div className="info-card">
          <h3>Habilidades Técnicas</h3>
          <div className="habilidades-grid">
            {Object.entries(cvData.habilidades).map(([cat, skills], i) => (
              <div key={i} className="habilidad-categoria">
                <h4>{cat}</h4>
                <div className="skills-list">
                  {skills.map((skill, j) => (
                    <span key={j} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        <div className="info-card">
          <h3>Certificaciones</h3>
          <div className="certificaciones-list">
            {cvData.certificaciones.map((cert, i) => (
              <div key={i} className="certificacion-item">
                <span className="cert-icon">📜</span>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Redes */}
        <div className="info-card">
          <h3>Redes Profesionales</h3>
          <div className="redes-sociales">
            <a href={cvData.redes.LinkedIn} target="_blank" rel="noopener noreferrer" className="red-social-btn">
              <span>🔗</span>
              LinkedIn
            </a>
            <a href={cvData.redes.GitHub} target="_blank" rel="noopener noreferrer" className="red-social-btn">
              <span>💻</span>
              GitHub
            </a>
          </div>
        </div>

        {/* Información adicional */}
        <div className="info-card">
          <h3>Información Adicional</h3>
          <p>{cvData.infoAdicional}</p>
        </div>

        {/* Exportar a PDF */}
        <div className="info-card export-section">
          <h3>Exportar CV</h3>
          <p>Descarga mi currículum en formato PDF para compartir o imprimir.</p>
          <button className="btn btn-primary" onClick={exportarPDF}>
            📄 Descargar CV en PDF
          </button>
        </div>
      </div>
    </section>
  );
}