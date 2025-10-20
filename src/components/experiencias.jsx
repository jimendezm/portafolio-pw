import experienciasData from "../data/experiencias.json";

export default function ExperienciasTEC() {
  const { experiencias, reflexion } = experienciasData;

  return (
    <section id="experiencias-tec" className="experiencias-section">
      <div className="experiencias-container">
        <h2><strong>Experiencias en el TEC</strong></h2>
        <p className="experiencias-descripcion">
          Durante mi carrera en el Tecnológico de Costa Rica, he tenido la oportunidad 
          de participar en eventos y actividades que han enriquecido mi formación profesional 
          y ampliado mi perspectiva sobre la industria tecnológica.
        </p>
        
        <div className="experiencias-grid">
          {experiencias.map(experiencia => (
            <div key={experiencia.id} className={`experiencia-card ${experiencia.destacado ? 'destacada' : ''}`}>
              {experiencia.destacado && (
                <div className="destacado-badge">Experiencia Destacada</div>
              )}
              
              <div className="experiencia-header">
                <h3>{experiencia.titulo}</h3>
                <div className="experiencia-meta">
                  <span className="experiencia-tipo">{experiencia.tipo}</span>
                  <span className="experiencia-fecha">{experiencia.fecha}</span>
                </div>
              </div>
              
              <div className="experiencia-imagen">
                <div className="imagen-placeholder">
                  <span>{experiencia.titulo.split(' - ')[0]}</span>
                </div>
              </div>
              
              <div className="experiencia-content">
                <p className="experiencia-descripcion">{experiencia.descripcion}</p>
                
                {experiencia.proyecto && (
                  <div className="proyecto-destacado">
                    <strong>Participación destacada:</strong> {experiencia.proyecto}
                  </div>
                )}
                
                <div className="aprendizajes-section">
                  <h4>Principales aprendizajes:</h4>
                  <ul className="aprendizajes-lista">
                    {experiencia.aprendizajes.map((aprendizaje, index) => (
                      <li key={index}>{aprendizaje}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="habilidades-section">
                  <h4>Habilidades desarrolladas:</h4>
                  <div className="habilidades-tags">
                    {experiencia.habilidades.map((habilidad, index) => (
                      <span key={index} className="habilidad-tag">{habilidad}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="reflexion-final">
          <h3>{reflexion.titulo}</h3>
          <p>{reflexion.contenido}</p>
        </div>
      </div>
    </section>
  );
}