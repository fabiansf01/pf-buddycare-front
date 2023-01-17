//import { useState, useEffect } from "react";
import React , {useState } from 'react'

import axios from "axios";
import Swal from 'sweetalert2';
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
  } from "reactstrap";


export const Fotomascota= () => {
  


  // estado para controlar el boton modificar en el formulario
  const [validacionModificar, setValidacionModificar] = React.useState(false);


  //*********************** ESTADOS GLOBALES  */
  // estado para el array de rubros
  const [datosabm, setDatos] = React.useState([]);
  
  
  // **************************** estados para el formulario
  // id, nombre,usuario ,password ,
  //email ,	rol ,estado ,falta,	halta 
  
  //const [nombre, setNombre] = React.useState("");
  //const [usuario, setUsuario] = React.useState("");
  //const [password, setPassword] = React.useState("");  
  //const [email, setEmail] = React.useState("");  
  //const [rol, setRol] = React.useState("");
  //const [estado, setEstado] = React.useState("");
 /* *************************************************** */
 // estados para el formulario
 
 
/* *************************************************** */





  
  // guardar el id a modificar
  const [idModificar, setIdModificar] = React.useState(0);
  // CONTROL VENTANA MODAL 
  const [showModal, setShowModal] = React.useState(false);
  // Modal open state
  const [modal, setModal] = React.useState(true);
  const [xmodal, setXmodal] = React.useState(false);
  
  // funcion abre y cierra modal 
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
    
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  
  // ************ Toggles para  Modal
 
  function toggle(e){
    e.preventDefault();
    setModal(!modal);

  } 
  
  function togglesine(){
       setModal(!modal);
  }  

 

 
 

  const [image, setImage] = useState(null);
  const [orTipo, setOrTipo] =useState("")
  const [orId, setOrId] =useState(0)


  /*useEffect(()=>{
  
    asumeOrigen();
   },[])*/


   const asumeOrigen = () => {
     let cadena = localStorage.getItem("adjorigen");
     let array= cadena.split(",")
      setOrTipo(array[0])
      setOrId(array[1])
    //localStorage.setItem("adjorigen", "GENERAL,666")
     
     //let miadjid = localStorage.getItem("adjid");
     //setOrId(parseInt(miadjid));

    // localStorage.setItem("adjorigen", "GENERAL");
    // localStorage.setItem("adjid", "666"); 

   };




   //localStorage.setItem("adjorigen", "GENERAL,666")



  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    
    try{
    let mascotaid = localStorage.getItem("fotomascotaid");
    //window.alert(mascotaid) 
    const formData = new FormData();
   // window.alert(arrayb[0],arrayb[1])
    formData.append('image', image);
    formData.append('id', mascotaid);
    formData.append('tipo', "MASCOTA");



    
    fetch('https://www.fpsoft.com.ar/pfsubefotos/backend8.php', {
      method: 'POST',
      body: formData
    }).then(response => response.json())
      .then(data => {
       //console.log(data);
       Swal.fire(
        'Exito !!',
        'El archivo fue subido al servidor de imágenes',
        'success'
      )

      });

      setModal(!modal);

    } catch (error) {
        // Este código se ejecutará si se lanza una excepción durante la ejecución del bloque try
        window.alert(error);
      }
      
  }




   





 



   
  
   //  <div style={{ overflow: 'hidden', position: 'fixed' }}>
  

//****************  RENDER - RENDER  -RENDER ******* */
        return (
          <>
          <> 
        
          </>
 
          {/* -- PARTE MODAL DEL TEMA ------------------------- */}        

<div style={{
			display: 'block', width: 500, padding: 30, position: 'fixed'
		}}>
		
			<Modal isOpen={modal}
				toggle={toggle}
				modalTransition={{ timeout: 3 }}>
				<ModalBody>
					
        <div className='col-12'>
                  <h3 className='text-center'>Foto de Mascota</h3>    
                 



                  <form onSubmit={handleSubmit} >
     <label >  
        
      </label>
      <br></br>
         
      
      <label >
        
      
      </label>
      <br></br>
      <br></br>
      <label >  
        <h3>Seleccionar imagen:</h3>
        
      </label>
      <br></br> <br></br>
      <input type="file" className="form-control" onChange={handleImageChange} />
      <br></br>
      <div className="d-grid">
      <button type="submit" className="btn btn-outline-danger" >Enviar imagen</button>
      </div>
    </form>
    









              
              
              </div>

				</ModalBody>
			</Modal>
		</div >
    {/*-------- FIN DE LA PARTE MODAL  ------- */}  

            </>
        )

}