import React from 'react';
import { globalperros,textotestimonio,contenedortestimonio,imagentestimonio,contenedortextotestimonio } from  '../css/testimoniomicuenta.css';

function Testimoniomicuenta(props){
  return (
    <div>
      <div className="contenedortestimonio">
        <img
          className="imagentestimonio"
          src={require("../assets/hombreformulario.jpeg")}
          style={{ height: 500, width: 600 }}
        />

        <div className="contenedortextotestimonio">
          <p className="textotestimonio">
            En esta sección Ud. podrá enviarnos sus datos personales , como así también editar los existentes, por favor Click a Registrese para activar esta sección 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimoniomicuenta;