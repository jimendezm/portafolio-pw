import proyectosData from "../data/proyectos.json";

export default function Trabajos() {
  return (
    <section id="trabajos">
      <h2>Trabajos Académicos</h2>
      <div className="cursos-container">
        {proyectosData.map((curso, index) => (
          <article className="curso-card" key={index}>
            <h3>{curso.curso}</h3>
            <p>
              <strong>Semestre:</strong> {curso.semestre}
            </p>
            <p>{curso.descripcion}</p>

            <div className="proyectos-container">
              {curso.trabajos.map((trabajo, i) => (
                <div className="proyecto-card" key={i}>
                  <h4>{trabajo.nombre}</h4>
                  <p>
                    <strong>Tipo:</strong> {trabajo.tipo}
                  </p>
                  <p>{trabajo.descripcion}</p>
                  <p>
                    <strong>Fecha:</strong> {trabajo.fecha}
                  </p>
                  <p>
                    <strong>Tecnologías:</strong>{" "}
                    {trabajo.tecnologias.join(", ")}
                  </p>
                  <div className="links">
                    {trabajo.repositorio && (
                      <a
                        href={trabajo.repositorio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        Repositorio
                      </a>
                    )}
                    {trabajo.sitio && (
                      <a
                        href={trabajo.sitio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
