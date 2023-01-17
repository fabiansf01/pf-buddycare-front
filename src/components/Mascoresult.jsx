import React, { useState, useEffect } from 'react';
//import ShopImagen from './ShopImagen';
//import { homeContainer,newcards,fontdescribe,myButton,therow} from "./MascoLaunch.module.css";
import axios from "axios";
import MascoImagen from './MascoImagen';
import { Abmmascota } from './Abmmascota';
import styles from "./MascoLaunch.module.css";


const Mascoresult = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [mascotasb, setMascotas] = useState([]);  
  const [alta, setAlta] = useState(false); 

  // ggggggggggggg
 



useEffect(() => {
    
    consultarApi();
    setTotalPaginas(Math.ceil(mascotasb.length / 5));
 
}, []);

 




const consultarApi = async () => {
     const endpoint = "https://buddy-care-rest-api.onrender.com/query"
   let idcliente = localStorage.getItem('globalidcliente');
   //where pfvet_mascotas.id_cliente=${idcliente}; 
   const elQueryb ={"myQuery":`SELECT pfvet_mascotas.*, pfvet_adjuntos.contenido FROM pfvet_mascotas left JOIN pfvet_adjuntos ON pfvet_mascotas.id = pfvet_adjuntos.id_originador  AND trim(pfvet_adjuntos.originador) = 'MASCOTA' where pfvet_mascotas.id_cliente='${idcliente}'; `};
    //window.alert(elQueryb.myQuery)
    //setLoading(true);
   try{
    await axios.post(endpoint,elQueryb).then((response) => {
    // await axios.get(endpoint).then((response) => {
          const data = response.data
     // window.alert(data[0].nombre)
     // window.alert(elQueryb.myQuery)  
     //window.alert(data) 
     setMascotas(data);



        });

      } catch (error) {
        // Este código se ejecutará si se lanza una excepción durante la ejecución del bloque try
        window.alert(error);
      }

};


const activaAlta = () => {
setAlta(true)
//consultarApi();
}

const onComplete = () => {
  // logic when payment complete
  //window.alert("salir del carro")
  consultarApi()
}



const mostrarMascotas = () => {
    const mascotas = mascotasb.slice((paginaActual - 1) * 5, paginaActual * 5);

    //if (mascotas.length === 0) return null;

    return (
      


        
      <React.Fragment>
        <div className="container" style={{ width: '800px', backgroundColor: '#e4f5f7' ,  marginTop: 1}} >
        
        <button className="btn btn-success mx-2" onClick={activaAlta} >Agregar una Mascota</button>
        

        <div>
        {alta && <Abmmascota onComplete={onComplete} />}

        </div>



        <div className="container" style={{ width: '800px' }}>
          {paginaActual > 1 && (
            <button 
              onClick={() => setPaginaActual(paginaActual - 1)}
              className={styles.myButton + " mx-2"}
            >
               -- Anterior
            </button>
          )}
          {paginaActual < totalPaginas && (
            <button
              onClick={() => setPaginaActual(paginaActual + 1)}
              className={styles.myButton + " mx-2"}
            >
              Siguiente --
            </button>
          )}
        </div>


              <br></br>
              <br></br>


        </div>
            
        
        <div className= {styles.therow}>
          {mascotas.map((mascota) => (
            <MascoImagen key={mascota.id} mascota={mascota}  />
          ))}
        </div>
        
        
      </React.Fragment>
     
    );
  };

  return <React.Fragment>{mostrarMascotas()}</React.Fragment>;
};

export default Mascoresult;
