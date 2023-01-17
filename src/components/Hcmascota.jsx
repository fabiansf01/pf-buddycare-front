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
import Paypal from './Paypal';


function Hcmascota({ cierraModal }) {
 
 
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
const [apagar, setApagar] = React.useState(0);
const [paypalon, setPaypalon] = React.useState(false);
const [paypalprice, setPaypalprice] = React.useState(0);

// funcion abre y cierra modal 
const handleCloseModal = () => setShowModal(false);
const handleShowModal = () => setShowModal(true);

const [modalOpen, setModalOpen] = React.useState(false);

const handleCloseModalc = () => {
 window.alert("handleCloseModalc")
 setModalOpen(false);
}



// Toggle for Modal
const toggle = () => setModal(!modal);


 useEffect(()=>{
//window.alert("use effect")
  cargarDatos();
 },[])
 


 // https://buddy-care-rest-api.onrender.com/query
 const cargarDatos = async ()=>{
    
    const  id_mascota =localStorage.getItem("fotomascotaid")
   
    const elQuery= {"myQuery":`select pfvet_historia_clinica.*, pfvet_veterinarios.nombre  from pfvet_historia_clinica inner join pfvet_veterinarios on pfvet_historia_clinica.id_veterinario=pfvet_veterinarios.id where pfvet_historia_clinica.id_mascota = ${id_mascota} ;`}
   //window.alert(elQuery.myQuery)
    try{
    const respuesta = await axios.post("https://buddy-care-rest-api.onrender.com/query",elQuery)
  console.log(respuesta)
  setDatos(respuesta.data);
 

 

} catch (error) { 
    // Este código se ejecutará si se lanza una excepción durante la ejecución del bloque try
    window.alert(error);
  }

}
 

// agrega registro





 

  




  const onComplete = () => {
    // logic when payment complete
    //window.alert("salir del carro")
    //setModal(false)
    handleCloseModalc()
  }

  



 /* swal({
    title: "An input!",
    text: "Write something interesting:",
    type: "input",
    showCancelButton: true,
    closeOnConfirm: false,
    animation: "slide-from-top",
    inputPlaceholder: "Write something"
  },
  function(inputValue){
    if (inputValue === null) return false;
    
    if (inputValue === "") {
      swal.showInputError("You need to write something!");
      return false
    }
    
    swal("Nice!", "You wrote: " + inputValue, "success");
  });*/


// ********************************************
  return (

    <div>
    {/* -- PARTE MODAL DEL TEMA ------------------------- */}        
    {/*<div style={{display: 'block', width: 1000, padding: 30, position: "fixed"}}>*/}
    <div style={{ position: "fixed"}}>
      <Modal isOpen={modal}  onHide={handleCloseModalc} toggle={toggle}  style={{maxWidth: 'none',width: '1080px'}}   modalTransition={{ timeout: 10 }}>
        <ModalBody>
          <div className='container-sm'>
            <h3 className='text-center'>Historias Clinicas</h3>
            
            <div className='row'>
              <div className='col-12'>
                <h3 className='text-center'></h3>
                <table className="table table-dark table-sm" style={{width: '1000px'}}>
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Veterinario</th>
                      <th scope="col">Nomenclador</th>
                      <th scope="col">Intervención</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                      datos.map(fila => (
                        <tr>
                          <td>{fila.id}</td>
                          <td>{(new Date(fila.faccion)).toLocaleDateString()}</td>
                          <td>{fila.nombre}</td>
                          <td>{fila.nomenclador}</td>
                          <td>{fila.descripcion}</td>
                          
                         
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              
               
                </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
    {/*-------- FIN DE LA PARTE MODAL  ------- */}  
  </div>
)};



export default Hcmascota