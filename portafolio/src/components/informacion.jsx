export default function Informacion() {
  return (
    <section id="informacion">
      <h2>Información Personal y Profesional</h2>

      <h3>Biografía Profesional</h3>
      <p>
        Soy estudiante de Ingeniería en Computación en el TEC con interés en el
        desarrollo de software y un enfoque creciente hacia la{" "}
        <strong>ciberseguridad</strong>. Me motiva el aprendizaje constante y el
        desarrollo de soluciones tecnológicas que sean seguras, escalables y
        funcionales.
      </p>

      <h3>Certificaciones</h3>
      <ul>
        <li>En progreso</li>
      </ul>

      <h3>Redes Profesionales</h3>
      <p>
        <a
          href="https://www.linkedin.com/in/jimena-mendez-morales-447b8437b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/jimendezm"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>

      <h3>Información Adicional</h3>
      <p>
        Participación en proyectos universitarios enfocados en desarrollo de
        software. Interés en seguir fortaleciendo conocimientos en áreas como
        ciberseguridad, programación segura y arquitecturas escalables.
      </p>

      <h3>Exportar CV</h3>
      <a href="src/data/CV_JimenaMendez.docx" className="btn" download>
        Descargar CV
      </a>
    </section>
  );
}
