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


function Carro() {
 
 
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
 const cargarDatos = async ()=>{
    
    const  id_cli =localStorage.getItem('globalidcliente')
   // window.alert(id_cli)
    const elQuery= {"myQuery":`select pfvet_carritos.* ,  pfvet_articulos.nombre, pfvet_articulos.precio from pfvet_carritos inner join pfvet_articulos on pfvet_carritos.id_articulo = pfvet_articulos.id where  pfvet_carritos.id_cliente=${id_cli} ;`}
  // window.alert(elQuery.myQuery)
    try{
    const respuesta = await axios.post("https://buddy-care-rest-api.onrender.com/query",elQuery)
  console.log(respuesta)
  setDatos(respuesta.data);
 

 // Totalizar la propiedad precio de cada elemento del objeto de respuesta
 const total = respuesta.data.reduce(
    (acumulador, elemento) => acumulador + Number(elemento.precio),
    0
  );

setApagar(total)
setPaypalprice(total)

} catch (error) { 
    // Este código se ejecutará si se lanza una excepción durante la ejecución del bloque try
    window.alert(error);
  }

}
 

// agrega registro



// elimina registro
const eliminarRegistro = async (id)=> {
  //window.alert(id)
  const elQuerydel= {"myQuery":`delete from  pfvet_carritos where  id=${id} ;`}
  await  axios.post(`https://buddy-care-rest-api.onrender.com/query`,elQuerydel)
    cargarDatos();
  
  }

 
// elimina registro
const vaciarCarrito = async ()=> {
    //window.alert(id)
    const  id_cli =localStorage.getItem('globalidcliente')
    const elQuerydel= {"myQuery":`delete from  pfvet_carritos where  id_cliente=${id_cli} ;`}
    await  axios.post(`https://buddy-care-rest-api.onrender.com/query`,elQuerydel)
    
    Swal.fire({icon: 'success',title: 'Se ha VACIADO todo el carro de compras',text: `` ,})
    cargarDatos();
    
    }
  

// activa paypal
const activaPaypal =  ()=> {
  
setPaypalon(true)
//setModal(false)
cargarDatos();  
  }



  const onComplete = () => {
    // logic when payment complete
    //window.alert("salir del carro")
    setModal(false)
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
    <div style={{display: 'block', width: 500, padding: 30, position: "fixed"}}>
      <Modal isOpen={modal} toggle={toggle} modalTransition={{ timeout: 10 }}>
        <ModalBody>
          <div className='container-sm'>
            <h3 className='text-center'>Carro de Compras</h3>
            <Button className='btn btn-danger btn-sm' onClick={() => vaciarCarrito()}>VACIAR CARRO</Button>
            <div className='row'>
              <div className='col-12'>
                <h3 className='text-center'></h3>
                <table className="table table-dark table-sm">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Artículo</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      datos.map(fila => (
                        <tr>
                          <td>{fila.id}</td>
                          <td>{fila.nombre}</td>
                          <td>$ {fila.precio}</td>
                          <td><button className="btn btn-danger btn-sm" onClick={() => eliminarRegistro(fila.id)}>ELIMINAR</button></td>
                         
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              
                <table className="table table-dark table-sm">
                  <thead>
                    <tr>
                      <th scope="col">TOTAL A PAGAR: $ {apagar}</th>
                      </tr>
                  </thead>
              </table>
              <div>
              <Button className='btn btn-warning btn-sm' onClick={() => activaPaypal()} >CONFIRMAR EL PAGO DEL TOTAL POR Pay Pal !!</Button>
              <Button className='btn btn-info btn-sm' >CONFIRMAR ELPAGO DEL TOTAL CON CODIGO Buddy Care</Button>
              </div>
              
               

              {paypalon &&<Paypal price={paypalprice} onComplete={onComplete}/> }
   


              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
    {/*-------- FIN DE LA PARTE MODAL  ------- */}  
  </div>
)};



export default Carro