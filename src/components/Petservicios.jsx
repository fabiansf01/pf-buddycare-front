import React , {useEffect} from 'react'
import { Form } from 'react-router-dom'
import axios from 'axios'
//import Modal from 'react-bootstrap/Modal';
//import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import {
	Button, Modal, ModalFooter,
	ModalHeader, ModalBody
} from "reactstrap"


function Petservicios() {
 
 
 //*********************** ESTADOS GLOBALES  */
  // estado para el array de rubros
 const [datos, setDatos] = React.useState([]);
// estados para el formulario
const [consulta, setConsulta] = React.useState("");

// estado para controlar el boton modificar en el formulario
const [validacionModificar, setValidacionModificar] = React.useState(false);
// guardar el id a modificar
const [idModificar, setIdModificar] = React.useState(0);
// CONTROL VENTANA MODAL 
const [showModal, setShowModal] = React.useState(false);
// Modal open state
const [modal, setModal] = React.useState(false);
const [urgencias, setUrgencias] = React.useState("");

// funcion abre y cierra modal 
const handleCloseModal = () => setShowModal(false);
const handleShowModal = () => setShowModal(true);



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


// Toggle for Modal
const toggle = () => setModal(!modal);

  
 useEffect(()=>{
//window.alert("use effect")
  cargarDatos();
 },[])
 


 // https://buddy-care-rest-api.onrender.com/query
 
 /* {"myQuery":`select pfvet_horarios.*, pfvet_veterinarios.nombre, pfvet_veterinarios.nota,pfvet_veterinarios.telefono,pfvet_veterinarios.email from pfvet_horarios inner join pfvet_veterinarios on pfvet_horarios.id_veterinario=pfvet_veterinarios.id ;`}*/
 
 
 
 
 const cargarDatos = async ()=>{
    
   
   // window.alert(id_cli)
    const elQuery= {"myQuery":"SELECT pfvet_veterinarias.*, pfvet_adjuntos.contenido FROM pfvet_veterinarias left JOIN pfvet_adjuntos ON pfvet_veterinarias.id = pfvet_adjuntos.id_originador  AND trim(pfvet_adjuntos.originador) = 'VETERINARIAS' ;"}
  // window.alert(elQuery.myQuery)
    try{
    const respuesta = await axios.post("https://buddy-care-rest-api.onrender.com/query",elQuery)
  console.log(respuesta)
  setDatos(respuesta.data);
 

 




} catch (error) { 
    // Este código se ejecutará si se lanza una excepción durante la ejecución del bloque try
    window.alert(error);
  }

}
 

// Activar la modificacion 
const activarConsulta = async(id) =>{
    //setValidacionModificar(true)
    //setIdModificar(id)
    toggle(!modal);

   }
   
   
   const enviarConsulta = async (e)=> {
    e.preventDefault();
 
    /*   localStorage.setItem('logindetalle', 'NINGUN CLIENTE REGISTRADO')
localStorage.setItem('globalidcliente', '')
localStorage.setItem('globalidhabilitado', '101010')
localStorage.setItem('globalestadoficha', 'SINESTADO')
localStorage.setItem('globaltelefono', '')
localStorage.setItem('globalemail', '')*/
    
let datosdelcliente =  localStorage.getItem('logindetalle').trim()+" Email: "+localStorage.getItem('globalemail').trim()+" Tel: "+
localStorage.getItem('globaltelefono').trim()
try {
       
      




      await axios.post("https://www.fpsoft.com.ar/pfmailer/api.php", {
          mail:"PfVeterinarias10@gmail.com",
          asunto:" Consulta de un Cliente BuddyCare ",
          cuerpo: "El Cliente " + datosdelcliente + " CONSULTA: "+ consulta.trim(),
      });

      //window.alert("enviado")


      Swal.fire({
        icon: 'success',
        title: 'Su consulta fue enviada a la Veterinaria Afiliada !!',
      text: ``,

      })

      toggle(!modal); 
  } catch (error) {
    // Este código se ejecutará si se lanza una excepción durante la ejecución del bloque try
    window.alert(error);
  }
   
  
    }






// ********************************************
  return (

    <div>
          
    <div
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                fontFamily: "Arial",
                fontSize: "14px",
                color: "black",
                textShadow: "none",
                width: "1150px",
                margin: "auto",
                padding: "1px",
                border: "2px solid black"
              }}
            >
          <div className='container-sm'>
            <h3 className='text-center'>Nuestro Staff de Veterinarias disponibles</h3>
            
            <div className='row'>
              <div className='col-12'>
                <h3 className='text-center'></h3>
                <div style={{height: '500px', width: "920px", overflow: 'scroll'}}>
                <table className="table  table-sm" style={{width: "1110px", textAlign: 'left', backgroundColor: 'white', color: 'black',fontSize: '14px', fontWeight: 'bold', padding: "1px"}}>
                  <thead>
                    <tr>
                    <th scope="col">Consulta</th>  
                      <th scope="col">Img: </th>
                      <th scope="col">Veterinaria</th>
                      <th scope="col">Especialidad</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                      datos.map(fila => (
                        <tr>
                          <td><Button className='btn btn-info btn-sm' onClick={()=>activarConsulta(fila.id)} >Consultar</Button></td>
                          <td> <img src={fila.contenido} width="120px" height="120px" alt="Veterinaria" /></td>
                          <td>{fila.razon.trim()} 
                          <><br/></> 
                          {fila.responsable.trim()} 
                          <><br/></> 
                          {fila.direccion.trim()} 
                          <><br/></>
                          {fila.localidad.trim()}  {fila.provincia.trim()}
                          <><br/></>
                          {fila.telefono.trim()}
                          <><br/></>
                          {fila.email.trim()}
                          <><br/></>
                          {fila.instagram.trim()}
                          <><br/></>
                          {fila.facebook.trim()}
                          <><br/></>
                          </td>
                          <td style={{textAlign: 'justify', fontSize: '10px' }}> {fila.descripcion.trim()}</td>

                         
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
                
              <div>
              
              </div>
              
              </div>
            </div>
          </div>
       
    </div>
    
    <Modal
                isOpen={modal}
                toggle={toggle}
                modalTransition={{ timeout: 3 }}
              >



                <ModalBody>
                  <div className="col-12">
                    <h5 className="text-center">Consulta por servicios </h5>
                    <p>Su consulta será enviada con sus datos de contacto a la veterinaria afiliada</p>
                    <form >
                    <div className="mb-3">
                  <label for="validationCustom01" className="form-label">
                    Su consulta:
                  </label>
                  <textarea
                    className="form-control"
                    type="textarea"
                    class="form-control form-control-sm"
                    id="validationCustom01"
                    style={{ height: "50px", width: "430px", resize: "both" }}
                    value={consulta}
                    onChange={(e) => setConsulta(e.target.value)}
                   
                  />
                  <div id="emailHelp" class="form-text">
                    (*) Indique su requerimiento (suites veterinarias,guarderia, paseador de perros, servicios varios) 
                  </div>
                </div>

                <div className="mb-3">
              <button className='btn btn-success btn-sm' type="submit"  onClick={(e)=>enviarConsulta(e)}>-- ENVIAR SU CONSULTA --</button>
              </div>




                    </form>
                  </div>
                </ModalBody>
              </Modal>












  </div>
)};



export default Petservicios