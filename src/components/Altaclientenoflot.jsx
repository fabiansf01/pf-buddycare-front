//import { useState, useEffect } from "react";
import React , {useEffect } from 'react'
import styles from "./ShopLaunch.module.css";
import { NavLink, useNavigate, Navigate,BrowserRouter, Route, Routes } from 'react-router-dom';
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


export const Altaclientenoflot = () => {
  


  // estado para controlar el boton modificar en el formulario
  const [validacionModificar, setValidacionModificar] = React.useState(false);


  //*********************** ESTADOS GLOBALES  */
  // estado para el array de rubros
  const [datosabm, setDatos] = React.useState([]);
  
  const navigate = useNavigate();
  /* TABLA PRINICPAL DE CLIENTES SUSCRIPTOS
------------------------------------------
	id                   
	apellido   APELLIDO DEL CLIENTE         
	nombres    NOMBRES DEL CLIENTE          
	pais       PAIS DEL CLIENTE         
	localidad  LOCALIDAD         
	direccion  DIRECCION DEL CLIENTE          
	cp         CODIGO POSTAL          
	telefono   TELEFONO             
	email      EMAIL         
	usuario    USUARIO DE LOGIN          
	password   PASSWORD DE LOGIN       
	facebook   FACEBOOK DEL CLIENTE         
	instagram  INSTAGRAM DEL CLIENTE          
	notas_int  NOTA INTERNA          
	falta      FECHA DE ALTA           
	halta      HORA DE ALTA   
*/	


const [apellido, setApellido] = React.useState("");
const [nombres, setNombres] = React.useState("");
const [pais, setPais] = React.useState("");
const [localidad, setLocalidad] = React.useState("");
const [direccion, setDireccion] = React.useState("");
const [cp, setCp] = React.useState("");
const [telefono, setTelefono] = React.useState("");
const [usuario, setUsuario] = React.useState("");
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const [facebook, setFacebook] = React.useState("");
const [instagram, setInstagram] = React.useState("");
const [notas_int, setNotasint] = React.useState("");
const [falta, setFalta] = React.useState("0000-00-00");
const [halta, setHalta] = React.useState("00:00:00");
const [id, setId] = React.useState(0);
 

  
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

 

 
 

   useEffect(()=>{
   
    //cargarDatos();
   
    
   
   },[])

   





  function queHago() {
    //window.alert(laaccion)
    //setXmodal(true);
    //if(laaccion=="ALTA"){
    let doyalta = false;
    setValidacionModificar(doyalta);
    //}else{
    //}
  }


  const cargarDatos = async ()=>{
   
    toggle(!modal)
    const respuesta = await axios.get("https://buddy-care-rest-api.onrender.com/clientes")
    setDatos(respuesta.data);
   }

// ************************** verifica si el correo ya existe ******
const verificaCorreo = async (email) => {
  return new Promise(async (resolve, reject) => {
    let xemail = email.trim();
    const endpoint = "https://buddy-care-rest-api.onrender.com/query";
    const elQueryb = {myQuery: `select * from pfvet_clientes where trim(email) = '${xemail}' limit 1 ;`};

    try {
      const response = await axios.post(endpoint, elQueryb);
      const datar = response.data;
      resolve(datar.length > 0 ? true : false);
    } catch (error) { {
      // Este código se ejecutará si se lanza una excepción durante la ejecución del bloque try
     // window.alert(error);
    }
      reject(error);
    }
  });
};

 
  
  // ********************   agrega registro ********************
  
  const agregarRegistro = async (e)=> {
    e.preventDefault()
    try{
    if(apellido.trim().length<1 || nombres.trim().length<1 || email.trim().length<1 || pais.trim().length<1 || localidad.trim().length<1 || direccion.trim().length<1 || telefono.trim().length<1 || password.trim().length<1){
     Swal.fire({
        icon: 'error',
        title: 'Complete la informacion requerida',
        text: '',
       
      })
    }else{
      const result = await verificaCorreo(email);
      if (result) {
        Swal.fire({
          icon: "error",
          title: "Este Email, ya existe en nuestra Base de Datos",
          text: "",
        });
      }else{
    const date = new Date();
    date.toLocaleDateString('en-GB').split('/').reverse().join('-'); // '20211124'
    await  axios.post("https://buddy-care-rest-api.onrender.com/clientes",{
  id:getRandomInt(1111111, 9999999),
  apellido,        
	nombres,           
	pais,          
	localidad,       
	direccion,         
	cp ,              
	telefono,             
	email,      
	usuario:"" ,          
	password,       
	facebook ,       
	instagram ,          
	notas_int:"" ,     
	falta:date.toLocaleDateString('en-GB').split('/').reverse().join('-'),
  halta:"00:00:00",      
  
  
  })

   Swal.fire({icon: 'success',title: 'Alta de Cliente realizada OK !! , proceda a registrase',text: '',})
  
  let path = '/home'; 
  navigate(path);
  
  }

}

} catch (error) {
  // Este código se ejecutará si se lanza una excepción durante la ejecución del bloque try
  window.alert(error);
}

  }
  
  
  
   // **************************************************** Activar la modificacion 
   const activarModificacion = async(id) =>{
    const respuesta = await axios.get(`https://buddy-care-rest-api.onrender.com/clientes/${id}`)
   
  
   /* TABLA PRINICPAL DE CLIENTES SUSCRIPTOS
------------------------------------------
	id                   
	apellido   APELLIDO DEL CLIENTE         
	nombres    NOMBRES DEL CLIENTE          
	pais       PAIS DEL CLIENTE         
	localidad  LOCALIDAD         
	direccion  DIRECCION DEL CLIENTE          
	cp         CODIGO POSTAL          
	telefono   TELEFONO             
	email      EMAIL         
	usuario    USUARIO DE LOGIN          
	password   PASSWORD DE LOGIN       
	facebook   FACEBOOK DEL CLIENTE         
	instagram  INSTAGRAM DEL CLIENTE          
	notas_int  NOTA INTERNA          
	falta      FECHA DE ALTA           
	halta      HORA DE ALTA   
*/	
  
  setApellido(respuesta.data.apellido)
  setNombres(respuesta.data.nombres)
  setPais(respuesta.data.pais)
  setLocalidad(respuesta.data.localidad)
  setDireccion(respuesta.data.direccion)
  setCp(respuesta.cp)
  setTelefono(respuesta.telefono)
  setEmail(respuesta.data.email)
  setUsuario(respuesta.data.usuario)
  setPassword(respuesta.data.password)
  setFacebook(respuesta.data.facebook)
  setInstagram(respuesta.data.instagram)
  setNotasint(respuesta.data.notas_int)
  
  setFalta(respuesta.data.falta)
  setHalta(respuesta.data.chip)

    setValidacionModificar(true)
    setIdModificar(id)
    togglesine();
   } 
  
  
  // ***************************   modifica registro
  const modificarRegistro = async (e)=> {
    e.preventDefault();
    if(apellido.trim().length<1 || nombres.trim().length<1 || email.trim().length<1 || pais.trim().length<1 || localidad.trim().length<1 || direccion.trim().length<1 || telefono.trim().length<1 || password.trim().length<1 ){
             Swal.fire({
                icon: 'error',
                title: 'Complete la informacion requerida',
              text: '',
       
             })
    }else{
        const date = new Date();
            await  axios.put(`https://buddy-care-rest-api.onrender.com/clientes/${idModificar}`,{
       
            apellido,        
            nombres,           
            pais,          
            localidad,       
            direccion,         
            cp ,              
            telefono,             
            email,      
            usuario:"" ,          
            password,       
            facebook ,       
            instagram ,          
            notas_int:"" ,     
            falta:date.toLocaleDateString('en-GB').split('/').reverse().join('-'),
            halta:"00:00:00",
           })
    
          togglesine();
          cargarDatos();
          setValidacionModificar(false)
    }

  }



 





//****************  RENDER - RENDER  -RENDER ******* */
        return (
          <>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                fontFamily: "Arial",
                fontSize: "14px",
                color: "black",
                textShadow: "none",
                width: "800px",
                margin: "auto",
                padding: "40px",
                border: "2px solid black"
              }}
            >
              <div className="col-12">
                <h3 className="text-center">Nuevo Cliente</h3>
                <form>
                  <div id="emailHelp" class="form-text">
                    Mediante este formulario con tus datos básicos, quedarás
                    habilitado para utilizar nuestros servicios
                  </div>
                  <br></br>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="mb-3">
                      <label for="validationCustom01" className="form-label">
                        Apellido
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="validationCustom01"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        required
                      />
                      <div id="emailHelp" class="form-text">
                        (*) tu apellido
                      </div>
                    </div>
                    <div>
                      <div className="mb-3">
                        <label for="validationCustom01" className="form-label">
                          Nombres
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="validationCustom01"
                          value={nombres}
                          onChange={(e) => setNombres(e.target.value)}
                          required
                        />
                        <div id="emailHelp" class="form-text">
                          (*) tus nombres{" "}
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label for="validationCustom01" className="form-label">
                        País
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="validationCustom01"
                        value={pais}
                        onChange={(e) => setPais(e.target.value)}
                        required
                      />
                      <div id="emailHelp" class="form-text">
                        (*) Tu país de residencia{" "}
                      </div>
                    </div>
                  </div>

                  <div>


                  
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="mb-3">
                      <label for="validationCustom01" className="form-label">
                        Localidad
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        id="validationCustom01"
                        value={localidad}
                        onChange={(e) => setLocalidad(e.target.value)}
                        required
                      />
                      <div id="emailHelp" class="form-text"> (*) Localidad y provincia de residencia </div>
                    </div>








                    <div className="mb-3">
                      <label for="validationCustom01" className="form-label">
                        Dirección
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        id="validationCustom01"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        required
                      />
                      <div id="emailHelp" class="form-text"> (*) Tu dirección completa </div>
                    </div>



                    




                    <div className="mb-3">
                      <label for="validationCustom01" className="form-label">
                        Código Postal
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        id="validationCustom01"
                        value={cp}
                        onChange={(e) => setCp(e.target.value)}
                        required
                      />
                    </div>
                    

                   
                    <div className="mb-3">
                      <label for="validationCustom01" className="form-label">
                        Teléfono
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        id="validationCustom01"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        required
                      />
                      <div id="emailHelp" class="form-text">
                        (*) Teléfono con caraterística
                      </div>
                    </div>

                    </div>







                    <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >

                    <div className="mb-3">
                      <label for="validationCustom01" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        id="validationCustom01"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <div id="emailHelp" class="form-text">
                        (*) Email con el cual te registrarás
                      </div>
                    </div>



                    <div className="mb-3">
                      <label for="validationCustom01" className="form-label">
                        Password
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        id="validationCustom01"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <div id="emailHelp" class="form-text">
                        (*) Contraseña de registro
                      </div>
                    </div>

                    <div className="mb-3">
                      <label for="validationCustom01" className="form-label">
                        Facebook
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        id="validationCustom01"
                        value={facebook}
                        onChange={(e) => setFacebook(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label for="validationCustom01" className="form-label">
                        Instagram
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        id="validationCustom01"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                    </div>
                  
                  
                  
                  
                  
                    <div
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                  
                  <div className="mb-3">
                    {validacionModificar ? (
                      <button
                        className="btn btn-warning btn-sm"
                        type="submit"
                        onClick={(e) => modificarRegistro(e)}
                        style={{ marginEnd: "20px" }}
                      >
                        Modificar
                      </button>
                    ) : (
                      <button
                        className="btn btn-success btn-sm"
                        type="submit"
                        onClick={(e) => agregarRegistro(e)}
                      >
                        --- Crear Nueva Cuenta ---
                      </button>
                    )}
                  </div>
                  <div className="mb-3">
                    
                  </div>
                
                
                </div>
                
                </form>
              </div>
            </div>
            {/*-------- FIN DE LA PARTE MODAL  ------- */}
          </>
        );

}