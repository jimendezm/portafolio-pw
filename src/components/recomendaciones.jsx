import { useState, useEffect } from 'react';

export default function Recomendaciones() {
  const [recomendaciones, setRecomendaciones] = useState([]);
  const [nuevaRecomendacion, setNuevaRecomendacion] = useState({
    nombre: '',
    curso: '',
    mensaje: ''
  });

  // Cargar recomendaciones desde localStorage al iniciar
  useEffect(() => {
    const stored = localStorage.getItem('recomendaciones');
    if (stored) {
      setRecomendaciones(JSON.parse(stored));
    }
  }, []);

  // Guardar en localStorage cuando cambien las recomendaciones
  useEffect(() => {
    localStorage.setItem('recomendaciones', JSON.stringify(recomendaciones));
  }, [recomendaciones]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (nuevaRecomendacion.nombre && nuevaRecomendacion.mensaje) {
      const recomendacion = {
        ...nuevaRecomendacion,
        id: Date.now(),
        fecha: new Date().toLocaleDateString('es-CR'),
        estado: 'pendiente' // Para moderación si se desea
      };
      
      setRecomendaciones([recomendacion, ...recomendaciones]);
      setNuevaRecomendacion({ nombre: '', curso: '', mensaje: '' });
      
      alert('¡Gracias por tu recomendación!');
    }
  };

  const handleChange = (e) => {
    setNuevaRecomendacion({
      ...nuevaRecomendacion,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="recomendaciones" className="recomendaciones-section">
      <div className="recomendaciones-container">
        <h2>Recomendaciones de Compañeros</h2>
        <p className="recomendaciones-descripcion">
          Estas son algunas de las recomendaciones y comentarios que mis compañeros 
          han compartido sobre mi trabajo y colaboración en proyectos académicos.
        </p>

        {/* Formulario de recomendaciones */}
        <div className="form-container">
          <h3>Deja tu recomendación</h3>
          <form onSubmit={handleSubmit} className="recomendacion-form">
            <div className="form-group">
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={nuevaRecomendacion.nombre}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="curso"
                placeholder="Curso (opcional)"
                value={nuevaRecomendacion.curso}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="mensaje"
                placeholder="Tu mensaje o recomendación..."
                value={nuevaRecomendacion.mensaje}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-enviar">
              Enviar Recomendación
            </button>
          </form>
        </div>

        {/* Lista de recomendaciones */}
        <div className="recomendaciones-list">
          <h3>Recomendaciones Recibidas</h3>
          
          {recomendaciones.length === 0 ? (
            <div className="empty-state">
              <p>Aún no hay recomendaciones. ¡Sé el primero en dejar un comentario!</p>
            </div>
          ) : (
            <div className="recomendaciones-grid">
              {recomendaciones.map((recomendacion) => (
                <div key={recomendacion.id} className="recomendacion-card">
                  <div className="recomendacion-header">
                    <h4>{recomendacion.nombre}</h4>
                    {recomendacion.curso && (
                      <span className="curso-tag">{recomendacion.curso}</span>
                    )}
                  </div>
                  <p className="recomendacion-mensaje">"{recomendacion.mensaje}"</p>
                  <div className="recomendacion-footer">
                    <span className="fecha">{recomendacion.fecha}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}