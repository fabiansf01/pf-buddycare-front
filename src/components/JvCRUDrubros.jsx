import React , {useEffect} from 'react'
import { Form } from 'react-router-dom'
import axios from 'axios'
//import Modal from 'react-bootstrap/Modal';
//import Button from 'react-bootstrap/Button';

import {
	Button, Modal, ModalFooter,
	ModalHeader, ModalBody
} from "reactstrap"


function JvCRUDrubros() {
 
 
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
const [modal, setModal] = React.useState(false);


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

  cargarDatos();
 },[])
 

 const cargarDatos = async ()=>{
  const respuesta = await axios.get("http://localhost:3001/rubros")
  console.log(respuesta)
  setDatos(respuesta.data);
 }
 

// agrega registro

const agregarRegistro = async (e)=> {
e.preventDefault();
await  axios.post("http://localhost:3001/rubros",{
id:getRandomInt(1111111, 9999999),
descripcion,
estado,
foto:"mifoto"

})
cargarDatos();

}

// elimina registro
const eliminarRegistro = async (id)=> {
  
  await  axios.delete(`http://localhost:3001/rubros/${id}`)
    cargarDatos();
  
  }

 // Activar la modificacion 
 const activarModificacion = async(id) =>{
  setValidacionModificar(true)
  setIdModificar(id)
  toggle();
 } 


// modifica registro
const modificarRegistro = async (e)=> {
  e.preventDefault();
  await  axios.put(`http://localhost:3001/rubros/${idModificar}`,{
  descripcion,
  estado,
  foto:"mifoto"
  
  })
  toggle();
  cargarDatos();
  
  }


// ********************************************
  return (
    
      
    
    
    <div className='container-sm'>
      
       
       
        <h3 className='text-center'>CRUD - Rubros</h3>
        <Button className='btn btn-success btn-sm'
				onClick={toggle}>AGREGAR RUBRO</Button>
        <div className='row'>
            <div className='col-12'>
                    <h3 className='text-center'></h3>
                    <table className="table table-dark table-sm">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Descripción</th>
      <th scope="col">Estado</th>
      <th scope="col">Eliminar</th>
      <th scope="col">Modificar</th>
     
    </tr>
  </thead>
  <tbody>
    {
    datos.map(fila =>(

      <tr>
      
      <td>{fila.id}</td>
     
      <td>{fila.descripcion}</td>
      <td>{fila.estado}</td>
      <td><button className="btn btn-danger btn-sm" onClick={()=>eliminarRegistro(fila.id)}>ELIMINAR</button></td>
      <td><button className="btn btn-warning btn-sm" onClick={()=>activarModificacion(fila.id)}>MODIFICAR</button></td>

          </tr>
   


    ))
}
   
    
            </tbody>
            </table>
             </div>
              
              


           
              

    <div>          
  
  
{/* -- PARTE MODAL DEL TEMA ------------------------- */}        
<div style={{
			display: 'block', width: 500, padding: 30
		}}>
			
			
			<Modal isOpen={modal}
				toggle={toggle}
				modalTransition={{ timeout: 10 }}>
				<ModalBody>
					
        <div className='col-4'>
                  <h3 className='text-center'>Nuevo/Modifica</h3>    
              
              
              <form>
              <div className="mb-3">
               <label  className="form-label">Descripción</label>
               <input type="text" className="form-control" onChange={(e)=>setDescripcion(e.target.value)} />
              </div>
              <div className="mb-3">
               <label  className="form-label">Estado</label>
               <input type="text" className="form-control" onChange={(e)=>setEstado(e.target.value)} />
              </div>

              <div className="mb-3">
              
              {validacionModificar ? (
              <button className='btn btn-warning btn-sm' onClick={(e)=>modificarRegistro(e)}>Modificar</button>
              ):(
              <button className='btn btn-success btn-sm' onClick={(e)=>agregarRegistro(e)}>Agregar</button> 
              )
              }

              </div>

              </form>
              
              </div>

				</ModalBody>
			</Modal>
		</div >
    {/*-------- FIN DE LA PARTE MODAL  ------- */}  






</div>




        </div>
        
    </div>
  )
}

export default JvCRUDrubros