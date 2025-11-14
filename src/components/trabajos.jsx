import { useState } from "react";
import proyectosData from "../data/proyectos.json";

export default function Trabajos() {
  const [selectedCurso, setSelectedCurso] = useState(null);
  const [filters, setFilters] = useState({
    tipo: "",
    tecnologia: "",
    fecha: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

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
        ? trabajo.tipo.toLowerCase().includes(filters.tipo.toLowerCase())
        : true;
      const matchTecnologia = filters.tecnologia
        ? trabajo.tecnologias.some((t) =>
            t.toLowerCase().includes(filters.tecnologia.toLowerCase())
          )
        : true;
      const matchFecha = filters.fecha
        ? trabajo.fecha.includes(filters.fecha)
        : true;
      const matchSearch = searchTerm
        ? trabajo.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          trabajo.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
          trabajo.tecnologias.some(tech => 
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : true;

      return matchTipo && matchTecnologia && matchFecha && matchSearch;
    });
  };

  // Obtener todos los tipos únicos para el filtro
  const getUniqueTipos = () => {
    if (!selectedCurso) return [];
    const tipos = selectedCurso.trabajos.map(t => t.tipo);
    return [...new Set(tipos)];
  };

  // Obtener todas las tecnologías únicas para sugerencias
  const getUniqueTecnologias = () => {
    if (!selectedCurso) return [];
    const tecnologias = selectedCurso.trabajos.flatMap(t => t.tecnologias);
    return [...new Set(tecnologias)];
  };

  return (
    <section id="trabajos" className="trabajos-section">
      <div className="trabajos-container">
        <h2><strong>Trabajos Académicos</strong></h2>
        <p className="trabajos-descripcion">
          Explora los proyectos y trabajos desarrollados durante mi formación académica, 
          organizados por curso y con filtros avanzados para una mejor navegación.
        </p>
        
        <div className="cursos-grid">
          {proyectosData.map((curso, index) => (
            <div
              className="curso-card"
              key={index}
              onClick={() => setSelectedCurso(curso)}
            >
              <div className="curso-header">
                <h3>{curso.curso}</h3>
                <span className="curso-badge">{curso.semestre}</span>
              </div>
              <p className="curso-descripcion">{curso.descripcion}</p>
              <div className="curso-stats">
                <span className="stat">
                  {curso.trabajos.length} trabajo{curso.trabajos.length !== 1 ? 's' : ''}
                </span>
                <span className="stat">
                  {[...new Set(curso.trabajos.flatMap(t => t.tecnologias))].length} tecnologías
                </span>
              </div>
              <div className="curso-footer">
                <button className="btn btn-ver">Ver Trabajos</button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Mejorado */}
        {selectedCurso && (
          <div className="modal-overlay" onClick={() => setSelectedCurso(null)}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <h3>{selectedCurso.curso}</h3>
                  <p className="modal-subtitle">
                    <strong>Semestre:</strong> {selectedCurso.semestre}
                  </p>
                </div>
                <button 
                  className="btn-close"
                  onClick={() => setSelectedCurso(null)}
                  aria-label="Cerrar modal"
                >
                  ×
                </button>
              </div>
              
              <p className="modal-descripcion">{selectedCurso.descripcion}</p>

              {/* Filtros Mejorados */}
              <div className="filters-container">
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Buscar en trabajos por nombre, descripción o tecnología..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
                <div className="filter-grid">
                  <div className="filter-group">
                    <label>Tipo de trabajo</label>
                    <select
                      name="tipo"
                      value={filters.tipo}
                      onChange={handleFilterChange}
                    >
                      <option value="">Todos los tipos</option>
                      {getUniqueTipos().map((tipo, index) => (
                        <option key={index} value={tipo.toLowerCase()}>
                          {tipo}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="filter-group">
                    <label>Tecnología</label>
                    <input
                      type="text"
                      name="tecnologia"
                      placeholder="Ej: React, Python..."
                      value={filters.tecnologia}
                      onChange={handleFilterChange}
                      list="tecnologias-list"
                    />
                    <datalist id="tecnologias-list">
                      {getUniqueTecnologias().map((tech, index) => (
                        <option key={index} value={tech} />
                      ))}
                    </datalist>
                  </div>
                  <div className="filter-group">
                    <label>Fecha</label>
                    <input
                      type="month"
                      name="fecha"
                      value={filters.fecha}
                      onChange={handleFilterChange}
                    />
                  </div>
                </div>
                
                {/* Contadores */}
                <div className="filters-info">
                  <span>
                    Mostrando {getFilteredTrabajos().length} de {selectedCurso.trabajos.length} trabajos
                  </span>
                  {(filters.tipo || filters.tecnologia || filters.fecha || searchTerm) && (
                    <button 
                      className="btn btn-outline btn-sm"
                      onClick={() => {
                        setFilters({ tipo: "", tecnologia: "", fecha: "" });
                        setSearchTerm("");
                      }}
                    >
                      Limpiar filtros
                    </button>
                  )}
                </div>
              </div>

              {/* Trabajos Filtrados */}
              <div className="proyectos-grid">
                {getFilteredTrabajos().length === 0 ? (
                  <div className="empty-state">
                    <p>No se encontraron trabajos con los filtros aplicados.</p>
                    <button 
                      className="btn btn-primary"
                      onClick={() => {
                        setFilters({ tipo: "", tecnologia: "", fecha: "" });
                        setSearchTerm("");
                      }}
                    >
                      Mostrar todos los trabajos
                    </button>
                  </div>
                ) : (
                  getFilteredTrabajos().map((trabajo, i) => (
                    <div className="proyecto-card" key={i}>
                      <div className="proyecto-header">
                        <h4>{trabajo.nombre}</h4>
                        <span className={`tipo-badge tipo-${trabajo.tipo.toLowerCase()}`}>
                          {trabajo.tipo}
                        </span>
                      </div>
                      <p className="proyecto-descripcion">{trabajo.descripcion}</p>
                      <div className="proyecto-meta">
                        <span className="fecha">{trabajo.fecha}</span>
                      </div>
                      <div className="tecnologias">
                        {trabajo.tecnologias.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <div className="proyecto-links">
                        {trabajo.repositorio && (
                          <a
                            href={trabajo.repositorio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                          >
                            Repositorio
                          </a>
                        )}
                        {trabajo.sitio && (
                          <a
                            href={trabajo.sitio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                          >
                            Demo
                          </a>
                        )}
                        {!trabajo.repositorio && !trabajo.sitio && (
                          <span className="no-links">No hay enlaces disponibles</span>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="modal-footer">
                <button className="btn" onClick={() => setSelectedCurso(null)}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}