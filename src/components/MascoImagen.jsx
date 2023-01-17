

//import React from 'react'
import React, { useState } from 'react';
//import { homeContainer,newcards,fontdescribe } from "./MascoLaunch.module.css";
import styles from "./MascoLaunch.module.css";
import { Editmascota } from './Editmascota';
import { Fotomascota } from './Fotomascota';
import axios from "axios";
import Swal from 'sweetalert2';
import Hcmascota from './Hcmascota';
// no se usa component porque est eva a ser un componente funcional

// no se puede usar this porque es una clase , por eso se usa props
const MascoImagen = (props) =>{

const {id,nombre,especie,raza,nota,chip,contenido,estado}=props.mascota;

const [editar, setEditar] = useState(false); 
const [modalAbierto, setModalAbierto] = useState(false); 
const [activafoto, setActivafoto] = useState(false); 
const [activahc, setActivaHc] = useState(false); 


const activaEdita = () => {
   //window.alert(id)
    //setIdaeditar(idx)
    localStorage.setItem("fotomascotaid",id.toString());
    setEditar(true)
    setModalAbierto(true)
    }
   
   

    const cierraModal = () => {
      setEditar(false);
      setModalAbierto(false);
      setActivafoto(false);
      setActivaHc(false);
    }


   /* const cierraModal = (id) => {
        setEditar(false);
        setModalAbierto(false);
      }*/





  const activaFoto = (id) => {
    
    //window.alert(id)
     //setIdaeditar(idx)
     localStorage.setItem("fotomascotaid",id.toString());
     setActivafoto(true)
     setModalAbierto(true)
    // cargarDatos();
     }
    


     const activaHc = (id) => {
    
      //window.alert(id)
       //setIdaeditar(idx)
       localStorage.setItem("fotomascotaid",id.toString());
       setActivaHc(true)
       setModalAbierto(true)
      // cargarDatos();
       }
    

// ***************************************    elimina registro
const eliminarRegistro = async (id) => {
  Swal.fire({
    title: "Está seguro de borrar este registro  ?",
    text: "",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "CANCELAR",
    // confirmButtonText: 'SI,  borrar !!'
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`https://buddy-care-rest-api.onrender.com/mascotas/${id}`);
      //cargarDatos();
    }
  });
};







 
 return(
 
 




        
<div>
    <div>


        {editar && <Editmascota  xid={id} cierraModal={cierraModal}/> }
        {activafoto && <Fotomascota  xid={id} cierraModal={cierraModal} /> }
        {activahc && <Hcmascota xid={id} cierraModal={cierraModal}/>}
</div>


<div className={`mx-auto ${styles.newcards}`}>
    <div>

        <div className="card me-3 " style={{ width: '13rem', height:'27rem' }}>
  
         <div className="card-body" >
          
         <img src={contenido ? contenido : 'https://www.fpsoft.com.ar/pfsubefotos/archivos/imagennodisponible.jpg'} 
    className="card-img-top"
    style={{height: "130px", width: "130px"}}
/>
           <h5 className={styles.fontdescribetitle}  >{nombre}</h5>
           <p className={styles.fontdescribe} style={{ lineHeight: "0.5" }} >Ref.: {id} </p>
           <p className={styles.fontdescribe} style={{ lineHeight: "0.5" }} >Especie: {especie.trim()}  Raza: {raza.trim()} </p>
           <p className={styles.fontdescribe} style={{ lineHeight: "0.5" }}>{nota.trim()} </p>
           <hr></hr>
           <p className={styles.fontdescribe}  style={{ lineHeight: "0.3" }} >ESTADO: {estado.trim()}</p>
           <h5 className={styles.fontdescribetitle} >Chip: {chip}</h5>
                    
           <br></br>
           
           <div class="d-flex"> 
           <button className="btn btn-danger  btn-sm mx-1" onClick={() => eliminarRegistro(id)} >ELIMINAR</button>
           <button className="btn btn-secondary  btn-sm mx-1" onClick={() => activaEdita(id)} >Editar</button>
           
           </div>
           <div class="d-flex"> 
           <button className="btn btn-warning  btn-sm mx-1" onClick={() => activaHc(id)}>Historia Clínica</button>
           <button className="btn btn-info  btn-sm mx-1"  onClick={() => activaFoto(id)}>Foto</button>
            </div>
          </div>
        </div>
</div>		


</div>


</div>


       




    )
}
 


export default MascoImagen;
