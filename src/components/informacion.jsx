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
    <section id="informacion">
      <h2>Información Personal y Profesional</h2>

      {/* Biografía */}
      <h3>Biografía Profesional</h3>
      <p>{cvData.biografia}</p>

      {/* Educación */}
      <h3>Educación</h3>
      <ul>
        {cvData.educacion.map((edu, i) => (
          <li key={i}>
            {edu.titulo} - {edu.institucion} ({edu.periodo})
          </li>
        ))}
      </ul>

      {/* Habilidades */}
      <h3>Habilidades Técnicas</h3>
      {Object.entries(cvData.habilidades).map(([cat, skills], i) => (
        <p key={i}>
          <strong>{cat}:</strong> {skills.join(", ")}
        </p>
      ))}

      {/* Certificaciones */}
      <h3>Certificaciones</h3>
      <ul>
        {cvData.certificaciones.map((cert, i) => (
          <li key={i}>{cert}</li>
        ))}
      </ul>

      {/* Redes */}
      <h3>Redes Profesionales</h3>
      <p>
        <a href={cvData.redes.LinkedIn} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        |{" "}
        <a href={cvData.redes.GitHub} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>

      {/* Información adicional */}
      <h3>Información Adicional</h3>
      <p>{cvData.infoAdicional}</p>

      {/* Exportar a PDF */}
      <h3>Exportar CV</h3>
      <button className="btn" onClick={exportarPDF}>
        Descargar CV en PDF
      </button>
    </section>
  );
}
