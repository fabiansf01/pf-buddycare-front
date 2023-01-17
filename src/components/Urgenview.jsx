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


function Urgenview() {
 
 
 //*********************** ESTADOS GLOBALES  */
  // estado para el array de rubros
 const [datos, setDatos] = React.useState([]);
// estados para el formulario
const [descripcion, setDescripcion] = React.useState("");
const [estado, setEstado] = React.useState("ACTIVO");
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
const [urgencias, setUrgencias] = React.useState("");

// funcion abre y cierra modal 
const handleCloseModal = () => setShowModal(false);
const handleShowModal = () => setShowModal(true);

/*
id                   integer  NOT NULL  ,
id_veterinario       integer    ,
fechaguardia         date  NOT NULL  ,
descripcion          text  NOT NULL  ,
falta                date    ,
halta                time    ,
*/

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
    const elQuery= {"myQuery":`select pfvet_horarios.*, pfvet_veterinarios.nombre, pfvet_veterinarios.nota,pfvet_veterinarios.telefono,pfvet_veterinarios.email from pfvet_horarios inner join pfvet_veterinarios on pfvet_horarios.id_veterinario=pfvet_veterinarios.id ;`}
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
 



// ********************************************
  return (

    <div>
    {/* -- PARTE MODAL DEL TEMA ------------------------- */}        
    <div
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                fontFamily: "Arial",
                fontSize: "14px",
                color: "black",
                textShadow: "none",
                width: "980px",
                margin: "auto",
                padding: "10px",
                border: "2px solid black"
              }}
            >
          <div className='container-sm'>
            <h3 className='text-center'>Atención de URGENCIAS disponibles</h3>
            
            <div className='row'>
              <div className='col-12'>
                <h3 className='text-center'></h3>
                <div style={{height: '500px', overflow: 'scroll'}}>
                <table className="table  table-sm" style={{width: "920px", textAlign: 'left', backgroundColor: 'red', color: 'white',fontSize: '16px', fontWeight: 'bold'}}>
                  <thead>
                    <tr>
                      <th scope="col">Fecha </th>
                      <th scope="col">Profesional</th>
                      <th scope="col">Especialidad</th>
                      <th scope="col">Detalle atención</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      datos.map(fila => (
                        <tr>
                          <td>{(new Date(fila.fechaguardia)).toLocaleDateString()}</td>
                          <td>{fila.nombre.trim()} 
                          <><br/></> 
                          {fila.telefono.trim()} 
                          <><br/></> 
                          {fila.email.trim()} </td>
                          <td> {fila.nota.trim()}</td>
                          <td> {fila.descripcion.trim()}</td>
                         
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
    {/*-------- FIN DE LA PARTE MODAL  ------- */}  
  </div>
)};



export default Urgenview