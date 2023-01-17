//import { useState, useEffect } from "react";
import React , {useEffect} from 'react'
//import MUIDataTable from "mui-datatables";
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import Swal from 'sweetalert2';
import ReactDOM from 'react-dom';
import Profileinterno from './Profileinterno';
import NavBarExample from '../layouts/navbar'; 
import { NavLink, useNavigate, Navigate,BrowserRouter, Route, Routes } from 'react-router-dom';



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
//import { DataSaverOnSharp } from '@mui/icons-material';









export const Modallogin = () => {



//*********************** ESTADOS GLOBALES  */
  // estado para el array de rubros
  const [datos, setDatos] = React.useState([]);
  // estados para el formulario
  const [descripcion, setDescripcion] = React.useState("");
  const [estado, setEstado] = React.useState("ACTIVO");
 /* *************************************************** */
 const [email, setEmail] = React.useState("");
 const [password, setPassword] = React.useState("");
 const [datoscliente, setDatosCliente] =React.useState([])
 const [profileinterno, setProfileinterno] =React.useState(false)
 

  const [id, setId] = React.useState(0);
  const [foto, setFoto] = React.useState("");
  // estado para controlar el boton modificar en el formulario
  const [validacionModificar, setValidacionModificar] = React.useState(false);
  // guardar el id a modificar
  const [idModificar, setIdModificar] = React.useState(0);
  // CONTROL VENTANA MODAL 
  const [showModal, setShowModal] = React.useState(false);
  // Modal open state
  const [modal, setModal] = React.useState(true);
 
  
  // funcion abre y cierra modal 
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  
  
  
  
  
  
  
  // Toggle for Modal
 // const toggle = () => setModal(!modal);
  function toggle(e){
    e.preventDefault();
    setModal(!modal);

  } 
    


  function togglesine(){
    setProfileinterno(true)   
    setModal(!modal);
       //ReactDOM.render(<Profileinterno />, document.getElementById('root'));
       //ReactDOM.render(<NavBarExample />, document.getElementById('root'));
  }  



   useEffect(()=>{
  
   // cargarDatos();
    
   },[])
   
  
   
   
  

   // *************** VALIDAR LOGIN  ************************* //
  
   const endpoint = "https://buddy-care-rest-api.onrender.com/query"
   
   
   const validarLogin = async (e) => {
   
    e.preventDefault();
    
    let xpassword=password.trim()
    let xemail=email.trim()
    //window.alert(xemail)
    const elQueryb ={"myQuery":`select * from pfvet_clientes where trim(email) = '${xemail}' limit 1 ;`};
    //setLoading(true);
    await axios.post(endpoint,elQueryb).then((response) => {
     
           const data = response.data
      
           setDatosCliente(data);
           console.log(datoscliente)
           if(data.length !== 0){
        
           if (xpassword === data[0].password.trim() ){

            let elnombre = "Ref.: "+ data[0].id.toString()+"  " +  data[0].apellido.trim()+" "+data[0].nombres.trim();
             localStorage.setItem('logindetalle',  elnombre)
            localStorage.setItem('globalidcliente',data[0].id.toString())
            localStorage.setItem('globalidhabilitado', '0111000')
            localStorage.setItem("globalestadoficha", "MODIFICA");
            localStorage.setItem('globaltelefono', data[0].telefono.trim())
            localStorage.setItem('globalemail', data[0].email.trim())
            Swal.fire({
              icon: 'success',
              title: 'E-mail encontrado',
            text: `Hola... ${elnombre}`,
     
           })
          
          
            togglesine()


          }else{
            localStorage.setItem('logindetalle', 'NINGUN CLIENTE REGISTRADO')
            localStorage.setItem('globalidcliente', '')
            localStorage.setItem('globalidhabilitado', '101010')
            localStorage.setItem('globalestadoficha', 'SINESTADO')
            localStorage.setItem('globaltelefono', '')
            localStorage.setItem('globalemail', '')
            Swal.fire({
              icon: 'error',
              title: 'La contraseña ingresada no coincide con la registrada en la  Base de CLIENTES',
            text: '',
          })


          }


           }else{
            localStorage.setItem('logindetalle', 'NINGUN CLIENTE REGISTRADO')
            localStorage.setItem('globalidcliente', '')
            localStorage.setItem('globalidhabilitado', '101010')
            localStorage.setItem('globalestadoficha', 'SINESTADO')
            localStorage.setItem('globaltelefono', '')
            localStorage.setItem('globalemail', '')
            Swal.fire({
              icon: 'error',
              title: 'Su  E-mail no esta registrado en la Base de CLIENTES',
            text: '',
     
           })
           }

           
   })};

  


   //****************   CREAR CUENTA ********/
   const navigate = useNavigate();
   const crearCuenta =  (e) => {
    e.preventDefault();

    localStorage.setItem("logindetalle", "NINGUN CLIENTE REGISTRADO");
    localStorage.setItem("globalidcliente", "");
    localStorage.setItem("globalidhabilitado", "101010");
    localStorage.setItem("globalestadoficha", "CREACUENTA");
    localStorage.setItem('globaltelefono', '')
    localStorage.setItem('globalemail', '')
    Swal.fire({  icon: 'success',
    title: 'Serás direccionado al formulario de ALTA de CLIENTE',
  text: ``,
 
 })
  
    togglesine()
    let path = '/micuenta'; 
    navigate(path);
  

   }


//****************   cerra sesion ********/

const cerrarSesion =  (e) => {
 e.preventDefault();

 localStorage.setItem("logindetalle", "NINGUN CLIENTE REGISTRADO");
 localStorage.setItem("globalidcliente", "");
 localStorage.setItem("globalidhabilitado", "101010");
 localStorage.setItem('globalestadoficha', 'SINESTADO')
 localStorage.setItem('globaltelefono', '')
 localStorage.setItem('globalemail', '')
 Swal.fire({  icon: 'success',
   title: 'Sesión cerrada correctamente !!!',
 text: ``,

})

 togglesine()
 let path = '/home'; 
 navigate(path);


}






// ****************** olvide contraseña ********
const olvidePassword = async (e) => {
   
  e.preventDefault();
  
  let xpassword=password.trim()
  let xemail=email.trim()
  //window.alert(xemail)
  const elQueryb ={"myQuery":`select * from pfvet_clientes where trim(email) = '${xemail}' limit 1 ;`};
  //setLoading(true);
  await axios.post(endpoint,elQueryb).then((response) => {
   
         const data = response.data
    
         setDatosCliente(data);
         console.log(datoscliente)
         if(data.length !== 0){
      
        
          enviaMail(xemail,data[0].password)






         }else{
          localStorage.setItem('logindetalle', 'NINGUN CLIENTE REGISTRADO')
          localStorage.setItem('globalidcliente', '')
          localStorage.setItem('globalidhabilitado', '101010')
          localStorage.setItem('globalestadoficha', 'SINESTADO')
          localStorage.setItem('globaltelefono', '')
          localStorage.setItem('globalemail', '')
          Swal.fire({
            icon: 'error',
            title: 'Su  E-mail no esta registrado en la Base de CLIENTES',
          text: '',
   
         })
         }

         
 })};




const enviaMail= async (xemail,xpassword)=>{

 await axios.post("https://www.fpsoft.com.ar/pfmailer/api.php", {
  mail:xemail,
  asunto:" Recupero de CONTRASEÑA  BuddyCare ",
  cuerpo: "La contraseña actual es: " + xpassword ,

});

//window.alert("enviado")


Swal.fire({
icon: 'success',
title: 'Su PASSWORD fue enviado OK !!',
text: ``,

})
}






// **************************************************************************

        return (
         <div>
          {/*{profileinterno && <Profileinterno/>}*/}
            <div
              style={{
                display: "block",
                width: 500,
                padding: 30,
                marginTop: 160,
                position: 'fixed'

              }}
            >
              <Modal
                isOpen={modal}
                toggle={toggle}
                modalTransition={{ timeout: 3 }}
              >
                <ModalBody>
                  <div className="col-12">
                    <h3 className="text-center">Registrese en BuddyCare</h3>

                    <form >
                      <div className="mb-3">
                      <div id="emailHelp" class="form-text">
                          Acceda a los beneficios de BuddyCare registrándose sin costo. 
                          Con su registro Ud. podrá acceder a nuestro exclusivo E-commerce 
                          que agrupa múltiples Pet Shps, como así también a servicios extra como Urgencias Veterinarias
                        </div>
                        <br></br>
                        <label for="validationCustom01" className="form-label">
                          E-Mail
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="validationCustom01"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <div id="emailHelp" class="form-text">
                          Ingrese el E-Mail utilizado en el alta de sus datos personales
                        </div>
                      </div>

                      <div className="mb-3">
                        <label for="validationCustom01" className="form-label">
                          Contraseña
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-sm"
                          id="validationCustom01"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        
                      </div>
                     

                      <div className="d-grid gap-2">
                        
                          <button
                            className="btn btn-primary btn-floating mx-1"
                            type="button"
                            onClick={(e)=>validarLogin(e)}
                          >
                            Acceder
                          </button>
                        
                          <button
                            className="btn btn-danger btn-floating mx-1"
                            type='button'
                            onClick={(e)=>olvidePassword(e)}
                          >
                            Olvidé mi Contraseña
                          </button>
                        
                      
                        <button
                          className="btn btn-info btn-floating mx-1"
                          type='button'
                          onClick={(e)=>crearCuenta(e)}
                        >
                          Quiero crear Mi Cuenta
                        </button>
                       

                        <button
                          className="btn btn-secondary btn-floating mx-1"
                          type='button'
                          onClick={(e)=>cerrarSesion(e)}
                        >
                          Cerrar SESIÓN
                        </button>
                       
                        </div>

                        
                       


                    </form>
                  </div>
                </ModalBody>
              </Modal>
            
            {/*-------- FIN DE LA PARTE MODAL  ------- */}
          </div>
          </div>
        );

}