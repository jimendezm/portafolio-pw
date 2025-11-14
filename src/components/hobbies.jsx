import hobbiesData from "../data/hobbies.json";

export default function Hobbies() {
  const { hobbies, reflexion } = hobbiesData;

  return (
    <section id="hobbies" className="hobbies-section">
      <div className="hobbies-container">
        <h2><strong>Hobbies e Intereses</strong></h2>
        <p className="hobbies-descripcion">
          Más allá del mundo académico y profesional, disfruto de actividades que 
          enriquecen mi vida personal y desarrollan diferentes habilidades.
        </p>
        
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <div key={index} className="hobby-categoria">
              <div className="hobby-header">
                <div className="hobby-icon">
                  {hobby.icono || ''}
                </div>
                <h3>{hobby.categoria}</h3>
              </div>
              
              <div className="hobby-items">
                {hobby.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="hobby-item">
                    <div className="hobby-item-header">
                      <h4>{item.nombre}</h4>
                      {item.nivel && (
                        <div className="hobby-meta">
                          <span className="nivel-tag">Nivel: {item.nivel}</span>
                        </div>
                      )}
                    </div>
                    <p>{item.descripcion}</p>
                    
                    {item.libros && item.libros.length > 0 && (
                      <div className="libros-lista">
                        <strong>Libros favoritos:</strong>
                        <ul>
                          {item.libros.map((libro, libroIndex) => (
                            <li key={libroIndex}>{libro}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.proyectos && item.proyectos.length > 0 && (
                      <div className="proyectos-hobby">
                        <strong>Proyectos relacionados:</strong>
                        <ul>
                          {item.proyectos.map((proyecto, proyectoIndex) => (
                            <li key={proyectoIndex}>{proyecto}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="hobbies-reflexion">
          <h3>{reflexion.titulo}</h3>
          <p>{reflexion.contenido}</p>
        </div>
      </div>
    </section>
  );
}