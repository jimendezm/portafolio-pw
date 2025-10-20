import { useState } from 'react';
import metasData from '../data/metas.json';

export default function MetasProfesionales() {
  const { metas, filosofia } = metasData;

  return (
    <section id="metas-profesionales" className="metas-section">
      <div className="metas-container">
        <h2><strong>Metas Profesionales</strong></h2>
        <p className="metas-descripcion">
          Mi camino profesional está guiado por objetivos claros y medibles. 
          Creo en el crecimiento constante y en la importancia de planificar 
          para alcanzar el máximo potencial en el campo de la ciberseguridad.
        </p>
        
        <div className="metas-timeline">
          {metas.map((periodo, index) => (
            <div key={index} className="periodo-metas">
              <div className="periodo-header">
                <h3>{periodo.categoria}</h3>
              </div>
              
              <div className="metas-lista">
                {periodo.items.map((meta, metaIndex) => (
                  <div key={metaIndex} className="meta-card">
                    <div className="meta-header">
                      <h4>{meta.titulo}</h4>
                      <div className="progreso-barra">
                        <div 
                          className="progreso-fill"
                          style={{ width: `${meta.progreso}%` }}
                        ></div>
                        <span className="progreso-texto">{meta.progreso}%</span>
                      </div>
                    </div>
                    
                    <p className="meta-descripcion">{meta.descripcion}</p>
                    
                    <div className="acciones-section">
                      <strong>Acciones concretas:</strong>
                      <ul className="acciones-lista">
                        {meta.acciones.map((accion, accionIndex) => (
                          <li>{accion}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}