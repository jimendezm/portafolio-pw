export default function Hobbies() {
  const hobbies = [
    {
      categoria: "Deportes",
      icono: "🏐",
      items: [
        {
          nombre: "Voleibol",
          descripcion: "Practico voleibol desde hace 3 años, disfrutando del trabajo en equipo y la competencia sana.",
          nivel: "Intermedio"
        }
      ]
    },
    {
      categoria: "Lectura",
      icono: "📚",
      items: [
        {
          nombre: "Finanzas Personales",
          descripcion: "Me apasiona aprender sobre gestión financiera, inversiones y economía.",
          libros: ["Padre Rico, Padre Pobre", "Los secretos de la mente millonaria"]
        },
        {
          nombre: "Misterio y Suspenso",
          descripcion: "Disfruto de novelas que mantienen la intriga hasta la última página.",
          libros: ["Sherlock Holmes", "La chica del tren"]
        },
        {
          nombre: "Romance Contemporáneo",
          descripcion: "Historias que exploran relaciones humanas y desarrollo personal.",
          libros: ["Bajo la misma estrella", "Eleanor & Park"]
        },
        {
          nombre: "Acción y Aventura",
          descripcion: "Narrativas dinámicas llenas de emoción y giros inesperados.",
          libros: ["Jurassic Park", "El código Da Vinci"]
        }
      ]
    },
    {
      categoria: "Tecnología",
      icono: "💻",
      items: [
        {
          nombre: "Programación Creativa",
          descripcion: "Diseño pequeños proyectos que combinan código con arte digital."
        },
        {
          nombre: "Videojuegos",
          descripcion: "Juego títulos de estrategia y aventuras que desafían la mente."
        }
      ]
    }
  ];

  return (
    <section id="hobbies" className="hobbies-section">
      <div className="hobbies-container">
        <h2>Hobbies e Intereses</h2>
        <p className="hobbies-descripcion">
          Más allá del mundo académico y profesional, disfruto de actividades que 
          enriquecen mi vida personal y desarrollan diferentes habilidades.
        </p>
        
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <div key={index} className="hobby-categoria">
              <div className="hobby-header">
                <span className="hobby-icon">{hobby.icono}</span>
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
          <h3>¿Por qué estos hobbies?</h3>
          <p>
            El voleibol me enseña trabajo en equipo y disciplina, mientras que la lectura 
            expande mi perspectiva y conocimiento en diversas áreas. La combinación de 
            actividad física y mental mantiene un balance saludable en mi vida.
          </p>
        </div>
      </div>
    </section>
  );
}