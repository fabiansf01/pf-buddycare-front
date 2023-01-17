import React from 'react';
import { globalperros,textotestimonio,contenedortestimonio,imagentestimonio,contenedortextotestimonio } from  '../css/testimoniomascotas.css';

function Testimonioregistrese(props){
  return (
    <div>
      <div className="contenedortestimonio">
        <img
          className="imagentestimonio"
          src={require("../assets/testimoniologin.jpeg")}
          style={{ height: 500, width: 600 }}
        />

        <div className="contenedortextotestimonio">
          <p className="textotestimonio">
            Usted puede Registrarse en nuestra Web sin CARGO  ni comisiones, solo deberá completar un formulario con datos básicos...  Y tendrá acceso a una herramienta que alegrará a sus Mascotas !!!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonioregistrese;