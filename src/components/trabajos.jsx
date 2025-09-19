import { useState } from "react";
import proyectosData from "../data/proyectos.json";

export default function Trabajos() {
  const [selectedCurso, setSelectedCurso] = useState(null);
  const [filters, setFilters] = useState({
    tipo: "",
    tecnologia: "",
    fecha: "",
  });

  // Manejo de filtros
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Aplicar filtros al modal
  const getFilteredTrabajos = () => {
    if (!selectedCurso) return [];

    return selectedCurso.trabajos.filter((trabajo) => {
      const matchTipo = filters.tipo
        ? trabajo.tipo.toLowerCase() === filters.tipo.toLowerCase()
        : true;
      const matchTecnologia = filters.tecnologia
        ? trabajo.tecnologias.some((t) =>
            t.toLowerCase().includes(filters.tecnologia.toLowerCase())
          )
        : true;
      const matchFecha = filters.fecha
        ? trabajo.fecha.includes(filters.fecha)
        : true;

      return matchTipo && matchTecnologia && matchFecha;
    });
  };

  return (
    <section id="trabajos">
      <h2>Trabajos Académicos</h2>

      <div className="cursos-container">
        {proyectosData.map((curso, index) => (
          <article
            className="curso-card"
            key={index}
            onClick={() => setSelectedCurso(curso)}
            style={{ cursor: "pointer" }}
          >
            <h3>{curso.curso}</h3>
            <p>
              <strong>Semestre:</strong> {curso.semestre}
            </p>
            <p>{curso.descripcion}</p>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selectedCurso && (
        <div className="modal-overlay" onClick={() => setSelectedCurso(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer click dentro
          >
            <h3>{selectedCurso.curso}</h3>
            <p>
              <strong>Semestre:</strong> {selectedCurso.semestre}
            </p>
            <p>{selectedCurso.descripcion}</p>

            {/* Filtros */}
            <div className="filters">
              <input
                type="text"
                name="tipo"
                placeholder="Filtrar por tipo (Proyecto, Tarea...)"
                value={filters.tipo}
                onChange={handleFilterChange}
              />
              <input
                type="text"
                name="tecnologia"
                placeholder="Filtrar por tecnología"
                value={filters.tecnologia}
                onChange={handleFilterChange}
              />
              <input
                type="date"
                name="fecha"
                placeholder="Filtrar por fecha (YYYY-MM-DD)"
                value={filters.fecha}
                onChange={handleFilterChange}
              />
            </div>

            {/* Trabajos filtrados */}
            <div className="proyectos-container">
              {getFilteredTrabajos().map((trabajo, i) => (
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

            <button className="btn" onClick={() => setSelectedCurso(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
