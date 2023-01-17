import React from 'react';
import { globalperros,textotestimonio,contenedortestimonio,imagentestimonio,contenedortextotestimonio } from  '../css/testimoniourgencias.css';

function Testimoniourgencias(props){
  return (
    <div>
      <div className="contenedortestimonio">
        <img
          className="imagentestimonio"
          src={require("../assets/revisandoperro.jpeg")}
          style={{ height: 500, width: 600 }}
        />

        <div className="contenedortextotestimonio">
          <p className="textotestimonio">
            Regístrese sin cargo y ACCEDA  a nuestra Agenda exclusiva de Atención de Urgencias veterinarias , aportada por nuestros Profesionales Veterinarios afiliados...  Estas contingencias que no respetan lugares ni horarios pueden ser financiadas por Pay Pal a través de nuestro Shop
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimoniourgencias;