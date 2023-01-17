

//import React from 'react'
import styles from "./ShopLaunch.module.css";
//import React , {useEffect} from 'react'
import React, { useState, useEffect } from 'react';
import Carro from "./Carro";
import Swal from 'sweetalert2';







const ShopBuscador = (props) => {
 
 

  const [rubros, setRubros] = useState([]);

  const busquedaRef = React.createRef()
  const rubroRef = React.createRef()

  useEffect(() => {
    setRubros(props.rubros);
  }, [props.rubros])



  const [elcarro, setElcarro] = useState(false);


  const abreCarro = () => {
    if (localStorage.getItem("globalidhabilitado") === "101010") {
      Swal.fire({
        icon: "error",
        title:
          "Solo pueden acceder al Carro de compras los CLIENTES REGISTRADOS , regístrese sin cargo a nuestro SISTEMA  !!! ",
        text: ``,
      });
    } else {
      setElcarro(true);
    }
  };





   const obtenerDatos = (e)=>{
    e.preventDefault();
    

    const termino = busquedaRef.current.value;
    const terminorubro = rubroRef.current.value;
    localStorage.setItem('shopbusca',termino)
    localStorage.setItem('shoprubro',terminorubro)
    //window.alert(termino)
    props.datosBusqueda(termino);
   }


    return (
      <div className={styles.flexcontainer}>
        <form>
        <label style={{fontSize: "20px", fontWeight: "bold", marginRight: "10px"}} for="rubros">Rubro:</label>
        <select
          ref={rubroRef}
          className={styles.campoBuscar}
          style={{ marginRight: "10px" }}
        >
           <option value="0">TODOS</option>
          <option value="">Selecciona un rubro</option>
            {props.rubros.map((rubro) => (
              <option value={rubro.id}>{rubro.descripcion}</option>
            ))}
        </select>


          <input
            ref={busquedaRef}
            type="text"
            className={styles.campoBuscar}
            placeholder="ingrese nombre del artículo"
            style={{ marginRight: "10px" }}
          />

          <input
            type="submit"
            className={styles.myButtonBuscar}
            value="Buscar"
            style={{ marginRight: "10px" }}
            onClick={obtenerDatos}
          />

          <input
            type="button"
            className={styles.myButtonBuscar}
            value="Carro de Compras"
            onClick={abreCarro}
          />
        </form>

        {elcarro && <Carro />}
      </div>
    );
}
 
export default ShopBuscador;
