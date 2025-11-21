import { useState, useEffect } from 'react';
import recomendacionesData from '../data/recomendaciones.json';

export default function Recomendaciones() {
  const [recomendaciones, setRecomendaciones] = useState([]);
  const [nuevaRecomendacion, setNuevaRecomendacion] = useState({
    nombre: '',
    curso: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Cargar recomendaciones al iniciar
  useEffect(() => {
    const storedRecomendaciones = localStorage.getItem('recomendaciones-portafolio');
    
    if (storedRecomendaciones) {
      // Si hay recomendaciones en localStorage, usarlas
      const recomendacionesGuardadas = JSON.parse(storedRecomendaciones);
      setRecomendaciones(recomendacionesGuardadas);
    } else {
      // Si no hay, usar las del JSON estático
      setRecomendaciones(recomendacionesData.recomendacionesIniciales);
    }
  }, []);

  // Guardar en localStorage cuando cambien las recomendaciones
  useEffect(() => {
    if (recomendaciones.length > 0) {
      localStorage.setItem('recomendaciones-portafolio', JSON.stringify(recomendaciones));
    }
  }, [recomendaciones]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!nuevaRecomendacion.nombre || !nuevaRecomendacion.mensaje) {
      alert('Por favor completa al menos tu nombre y el mensaje de recomendación.');
      return;
    }

    setIsSubmitting(true);
    
    // Simular envío asíncrono
    await new Promise(resolve => setTimeout(resolve, 1000));
    
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
    
    // Agregar nueva recomendación al estado
    const nuevasRecomendaciones = [recomendacion, ...recomendaciones];
    setRecomendaciones(nuevasRecomendaciones);
    setNuevaRecomendacion({ nombre: '', curso: '', mensaje: '' });
    setIsSubmitting(false);
    
    alert('¡Gracias por tu recomendación! Tu mensaje ha sido guardado.');
  };

  const handleChange = (e) => {
    setNuevaRecomendacion({
      ...nuevaRecomendacion,
      [e.target.name]: e.target.value
    });
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Función para limpiar todas las recomendaciones 
  const limpiarRecomendaciones = () => {
    if (confirm('¿Estás segura de que quieres limpiar todas las recomendaciones?')) {
      localStorage.removeItem('recomendaciones-portafolio');
      setRecomendaciones(recomendacionesData.recomendacionesIniciales);
    }
  };

  return (
    <section id="recomendaciones" className="recomendaciones-section">
      <div className="recomendaciones-container">
        <h2><strong>Recomendaciones</strong></h2>
        <p className="recomendaciones-descripcion">
          {recomendacionesData.descripcion}
          ¡Tu opinión es muy valiosa para mi crecimiento profesional!
        </p>

        {/* Formulario de recomendaciones */}
        <div className="form-container">
          <h3>Deja tu recomendación</h3>
          <form onSubmit={handleSubmit} className="recomendacion-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Tu nombre *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre completo"
                  value={nuevaRecomendacion.nombre}
                  onChange={handleChange}
                  required
                  className="form-input"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="curso">Curso o contexto</label>
                <input
                  type="text"
                  id="curso"
                  name="curso"
                  placeholder="¿Dónde nos conocimos?"
                  value={nuevaRecomendacion.curso}
                  onChange={handleChange}
                  className="form-input"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="mensaje">Tu recomendación *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Comparte tu experiencia trabajando conmigo, habilidades que destacas, o cualquier comentario que consideres valioso..."
                value={nuevaRecomendacion.mensaje}
                onChange={handleChange}
                rows="5"
                required
                className="form-textarea"
                disabled={isSubmitting}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`btn btn-enviar ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Recomendación'}
            </button>
          </form>
        </div>

        {/* Lista de recomendaciones */}
        <div className="recomendaciones-list">
          <div className="recomendaciones-header">
            <div>
              <h3>Recomendaciones Recibidas</h3>
              <small style={{color: 'var(--c-taupe)', fontSize: '0.8rem'}}>
                Las recomendaciones se guardan en tu navegador
              </small>
            </div>
            <span className="recomendaciones-count">
              {recomendaciones.length} recomendación{recomendaciones.length !== 1 ? 'es' : ''}
            </span>
          </div>
          
          {recomendaciones.length === 0 ? (
            <div className="empty-state">
              <p>Aún no hay recomendaciones. ¡Sé el primero en dejar un comentario!</p>
            </div>
          ) : (
            <div className="recomendaciones-grid">
              {recomendaciones.map((recomendacion) => (
                <div key={recomendacion.id} className="recomendacion-card">
                  <div className="recomendacion-avatar">
                    {getInitials(recomendacion.nombre)}
                  </div>
                  <div className="recomendacion-content">
                    <div className="recomendacion-header">
                      <div>
                        <h4>{recomendacion.nombre}</h4>
                        {recomendacion.curso && (
                          <span className="curso-tag">{recomendacion.curso}</span>
                        )}
                      </div>
                      {recomendacion.id > 1000000000000 && ( // Si es una recomendación nueva (ID basado en timestamp)
                        <span className="nueva-badge">Nueva</span>
                      )}
                    </div>
                    <p className="recomendacion-mensaje">"{recomendacion.mensaje}"</p>
                    <div className="recomendacion-footer">
                      <span className="fecha">{recomendacion.fecha}</span>
                    </div>
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