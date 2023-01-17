import React from 'react';
import { globalperros,textotestimonio,contenedortestimonio,imagentestimonio,contenedortextotestimonio } from  '../css/testimoniopetshop.css';

function Testimoniopetshop(props){
  return (
    <div>
      <div className="contenedortestimonio">
        <img
          className="imagentestimonio"
          src={require("../assets/lavandoperro_1.jpeg")}
          style={{ height: 500, width: 600 }}
        />

        <div className="contenedortextotestimonio">
          <p className="textotestimonio">
            Regístrese sin cargo y disfrute de Servicios prestados por nuestros Pet Shops y Veterinarias Afiliados...  Servicios de Guadería, Paseadores de perros, Suites de Lavado y manicura . Utilizamos Pay Pal para financiar sus compras
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimoniopetshop;