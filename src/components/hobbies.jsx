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
                <h3>{hobby.categoria}</h3>
              </div>
              
              <div className="hobby-items">
                {hobby.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="hobby-item">
                    <h4>{item.nombre}</h4>
                    <p>{item.descripcion}</p>
                    
                    {item.nivel && (
                      <div className="hobby-meta">
                        <span className="nivel-tag">Nivel: {item.nivel}</span>
                      </div>
                    )}
                    
                    {item.libros && (
                      <div className="libros-lista">
                        <strong>Libros favoritos:</strong>
                        <ul>
                          {item.libros.map((libro, libroIndex) => (
                            <li key={libroIndex}>📖 {libro}</li>
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