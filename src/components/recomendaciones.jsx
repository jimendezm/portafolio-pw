import { useState, useEffect } from 'react';
import recomendacionesData from '../data/recomendaciones.json';

export default function Recomendaciones() {
  const [recomendaciones, setRecomendaciones] = useState([]);
  const [nuevaRecomendacion, setNuevaRecomendacion] = useState({
    nombre: '',
    curso: '',
    mensaje: ''
  });

  // Cargar recomendaciones iniciales del JSON y del localStorage
  useEffect(() => {
    const stored = localStorage.getItem('recomendaciones');
    if (stored) {
      // Combinar recomendaciones del JSON con las del localStorage
      const recomendacionesStorage = JSON.parse(stored);
      const todasRecomendaciones = [
        ...recomendacionesData.recomendacionesIniciales,
        ...recomendacionesStorage
      ];
      setRecomendaciones(todasRecomendaciones);
    } else {
      // Solo cargar las del JSON si no hay nada en localStorage
      setRecomendaciones(recomendacionesData.recomendacionesIniciales);
    }
  }, []);

  // Guardar solo las nuevas recomendaciones en localStorage
  useEffect(() => {
    // Filtrar solo las recomendaciones que no están en el JSON inicial
    const nuevasRecomendaciones = recomendaciones.filter(
      rec => !recomendacionesData.recomendacionesIniciales.some(
        recInicial => recInicial.id === rec.id
      )
    );
    
    if (nuevasRecomendaciones.length > 0) {
      localStorage.setItem('recomendaciones', JSON.stringify(nuevasRecomendaciones));
    }
  }, [recomendaciones]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (nuevaRecomendacion.nombre && nuevaRecomendacion.mensaje) {
      const recomendacion = {
        ...nuevaRecomendacion,
        id: Date.now(), // ID único basado en timestamp
        fecha: new Date().toLocaleDateString('es-CR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        estado: 'aprobado'
      };
      
      setRecomendaciones([recomendacion, ...recomendaciones]);
      setNuevaRecomendacion({ nombre: '', curso: '', mensaje: '' });
      
      alert('¡Gracias por tu recomendación! Tu mensaje ha sido enviado correctamente.');
    } else {
      alert('Por favor completa al menos tu nombre y el mensaje de recomendación.');
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
        <h2><strong>Recomendaciones</strong></h2>
        <p className="recomendaciones-descripcion">
          {recomendacionesData.descripcion}
          ¡Tu opinión es muy valiosa!
        </p>

        {/* Formulario de recomendaciones */}
        <div className="form-container">
          <h3>Deja tu recomendación</h3>
          <form onSubmit={handleSubmit} className="recomendacion-form">
            <div className="form-group">
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre completo"
                value={nuevaRecomendacion.nombre}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="curso"
                placeholder="Curso donde nos conocimos (opcional)"
                value={nuevaRecomendacion.curso}
                onChange={handleChange}
                className="form-input"
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
                className="form-textarea"
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
                    {recomendacion.id > 3 && (
                      <span className="nueva-badge">Nueva</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Información sobre las recomendaciones */}
        <div className="recomendaciones-info">
          <p>
            <strong>Nota:</strong> Las recomendaciones con el badge "Nueva" son comentarios 
            recientes enviados a través del formulario. Las demás son recomendaciones 
            de proyectos académicos anteriores.
          </p>
        </div>
      </div>
    </section>
  );
}