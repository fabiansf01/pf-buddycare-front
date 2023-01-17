

import { useState, useEffect } from "react";

//import { homeContainer,newcards,fontdescribe } from "./Shclass.module.css";
import styles from "./ShopLaunch.module.css";

//import Buscador from "./componentes/Buscador.js"
//import Resultado from "./componentes/Resultado.js"
import ShopBuscador from "./ShopBuscador";
import Shresult from "./Shresult";
import axios from "axios";
import Swal from "sweetalert2";
import Testimonioshop from "./Testimonioshop";



const ShopLaunch = () => {
  const [termino, setTermino] = useState("inicio");
  const [articulos, setArticulos] = useState([]);
  const [pagina, setPagina] = useState("");
  const [rubros, setRubros] = useState([]);
//************************* */
localStorage.setItem('shopbusca','inicio')


const cargarRubros = async ()=>{
  const elQueryrub={"myQuery":`select id,descripcion from pfvet_rubros order by descripcion;`}
  const respuesta = await axios.post("https://buddy-care-rest-api.onrender.com/query",elQueryrub)
  console.log(respuesta)
  const todos = {id: 0, descripcion: "TODOS"};
  respuesta.data.unshift(todos);
  setRubros(respuesta.data);
 }


cargarRubros()

  const consultarApi = async () => {
    let mitermino = localStorage.getItem('shopbusca').trim()
    let miterminorubro = localStorage.getItem('shoprubro')
    //let mitermino = termino.trim();
    //window.alert(miterminorubro)
    let xtermino = mitermino.toUpperCase();
    const endpoint = "https://buddy-care-rest-api.onrender.com/query";
    let elQueryb;
    if (miterminorubro.trim() === "0") {
       /*elQueryb = {
        myQuery: `SELECT pfvet_articulos.*, pfvet_adjuntos.contenido from pfvet_articulos inner join pfvet_adjuntos on pfvet_articulos.id=pfvet_adjuntos.id_originador where trim(pfvet_adjuntos.originador)='ARTICULOS' and upper(LTRIM(RTRIM(pfvet_articulos.nombre))) like '%${xtermino}%'order by pfvet_articulos.nombre; `,*/
      
        elQueryb = {myQuery: `SELECT pfvet_rubros.descripcion as desrub , pfvet_articulos.*, pfvet_adjuntos.contenido  FROM pfvet_articulos  INNER JOIN pfvet_adjuntos ON pfvet_articulos.id=pfvet_adjuntos.id_originador INNER JOIN pfvet_rubros 
        ON pfvet_articulos.rubro=pfvet_rubros.id
        WHERE trim(pfvet_adjuntos.originador)='ARTICULOS' 
        AND upper(LTRIM(RTRIM(pfvet_articulos.nombre))) like '%${xtermino}%'
        ORDER BY pfvet_articulos.nombre;`};
    } else {
       /*elQueryb = {
        myQuery: `SELECT pfvet_articulos.*, pfvet_adjuntos.contenido from pfvet_articulos inner join pfvet_adjuntos on pfvet_articulos.id=pfvet_adjuntos.id_originador where trim(pfvet_adjuntos.originador)='ARTICULOS' and upper(LTRIM(RTRIM(pfvet_articulos.nombre))) like '%${xtermino}%' and rubro= ${miterminorubro} order by pfvet_articulos.nombre; `,
      };*/
     
      elQueryb = {myQuery: `SELECT pfvet_rubros.descripcion as desrub , pfvet_articulos.*, pfvet_adjuntos.contenido  FROM pfvet_articulos  INNER JOIN pfvet_adjuntos ON pfvet_articulos.id=pfvet_adjuntos.id_originador INNER JOIN pfvet_rubros 
      ON pfvet_articulos.rubro=pfvet_rubros.id
      WHERE trim(pfvet_adjuntos.originador)='ARTICULOS' 
      AND upper(LTRIM(RTRIM(pfvet_articulos.nombre))) like '%${xtermino}%'
      and rubro= ${miterminorubro} ORDER BY pfvet_articulos.nombre;`};

    }


    //window.alert(elQueryb.myQuery)
    //setLoading(true);
    try {
      await axios.post(endpoint, elQueryb).then((response) => {
        // await axios.get(endpoint).then((response) => {
        const data = response.data;
        // window.alert(data[0].nombre)
        // window.alert(elQueryb.myQuery)
        //window.alert(data)
        setArticulos(data);
        //window.alert(articulos[1].nombre)
      });
    } catch (error) {
      // Este código se ejecutará si se lanza una excepción durante la ejecución del bloque try
      window.alert(error);
    }
  };

  /*<ShopResultado
          articulos={articulos}
          paginaAnterior={paginaAnterior}
          paginaSiguiente={paginaSiguiente}
        />*/

  const datosBusqueda = (termino) => {
    setTermino(termino);
   
    consultarApi();
  };

  //<div className="app container text-sm"></div>
  return (
    <div>
    

      <div>
        <div
          className={styles.fuenteglobal}
          style={{ backgroundColor: "#e4f5f7" }}
        >
          <ShopBuscador datosBusqueda={datosBusqueda} rubros={rubros}  />
        </div>

        {termino !== "inicio" && (
          <div className="row justify-content-center">
            <Shresult articulos={articulos} />
          </div>
        )}
      </div>
    
      {termino == "inicio" && <Testimonioshop />}
    
    </div>
  );
};

export default ShopLaunch;

