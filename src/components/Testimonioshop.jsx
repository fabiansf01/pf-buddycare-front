import React from 'react';
import { globalperros,textotestimonio,contenedortestimonio,imagentestimonio,contenedortextotestimonio } from  '../css/testimonioshop.css';

function Testimonioshop(props){
  return (
    <div>
      <div className="contenedortestimonio">
        <img
          className="imagentestimonio"
          src={require("../assets/testishop_1.jpeg")}
        />

        <div className="contenedortextotestimonio">
          <p className="textotestimonio">
            Regístrese sin cargo y disfrute nuestro exclusivo Shop con artículos disponibles en nuestras Veterinarias y Pet Shops  Afiliados . Utilizamos Pay Pal para financiar sus compras
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonioshop;