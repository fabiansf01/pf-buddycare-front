import React from 'react';
import { globalperros,textotestimonio,contenedortestimonio,imagentestimonio,contenedortextotestimonio } from  '../css/testimoniomascotas.css';

function Testimoniomascotas(props){
  return (
    <div>
      <div className="contenedortestimonio">
        <img
          className="imagentestimonio"
          src={require("../assets/perrosygatos.jpeg")}
          style={{ height: 500, width: 600 }}
        />

        <div className="contenedortextotestimonio">
          <p className="textotestimonio">
            Regístrese sin cargo y presente sus MASCOTAS, para tener un control a través de nuestra exclusiva Historia Clínica , de todas las intervenciones realizadas por nuestros profesionales Veterinarios
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimoniomascotas;