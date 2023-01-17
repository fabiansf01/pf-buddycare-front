import "./paypalindex.css";
import React from "react";
import ReactDOM from "react-dom";
//import { loadScript } from "@paypal/paypal-js";
//import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import axios from "axios";
import Swal from 'sweetalert2';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function Paypal({price, onComplete}) {
  
  const [datospaypal, setDatospaypal] = React.useState([]);
  const [secuenciasql, setSecuenciasql] = React.useState("");


  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }


  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: price
          }
        }
      ]
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture(handlePay());
  };

  function handlePay() {
    console.log("el pago ha sido exitoso desde la web");
    Swal.fire({ icon: 'success', title: 'Pago con Pay Pal APROBADO  !!!',text: ``,  })
  procesaCompra()
  
  }


/*
  //***************  ASENTAR COMPRAS *************** */
const procesaCompra = async ()=>{
  try{  
  const  id_cli =localStorage.getItem('globalidcliente')
 // window.alert(id_cli)
  const elQuery= {"myQuery":`select pfvet_carritos.* ,  pfvet_articulos.nombre, pfvet_articulos.precio from pfvet_carritos inner join pfvet_articulos on pfvet_carritos.id_articulo = pfvet_articulos.id where  pfvet_carritos.id_cliente=${id_cli} ;`}
// window.alert(elQuery.myQuery)
  //try{
  const respuesta = await axios.post("https://buddy-care-rest-api.onrender.com/query",elQuery)
console.log(respuesta)
setDatospaypal(respuesta.data);


  let min = 11111, max = 99999;
  let micomprobante =getRandomInt(min, max);
  const date = new Date();
  let lafecha=  date.toLocaleDateString('en-GB').split('/').reverse().join('-');
  let insertfinal="";
  let parteinsert = "insert into pfvet_commerces (id,id_cliente,id_articulo,tipo,detalle,fecha,comprobante,importe,mediopago,cuota,decuota,falta,halta) ";
 
  let updatefinal="";
  let parteupdate="";

  respuesta.data.map(fila => {
    insertfinal += parteinsert + ` values ( '${getRandomInt(min, max)}','${id_cli}','${fila.id_articulo}','COMPRA','${fila.nombre.trim()}','${lafecha}','${micomprobante}','${fila.precio}','PAYPAL','1','1','${lafecha}','00:00:00'); `
   
  });

  respuesta.data.map(filab => {
    updatefinal += parteupdate + ` update pfvet_articulos set stock = stock-1 where id = ${filab.id_articulo};`
   
  });



  
  // updatefinal += ` update pfvet_articulos set stock = stock-1 where id = ${fila.id};`
  //console.log(insertfinal)
  //setSecuenciasql(insertfinal)
  //let sqlfinal = insertfinal.replace(/(\r\n|\n|\r)/gm, "");
//sqlfinal += updatefinal.replace(/(\r\n|\n|\r)/gm, "");

procesaComprasecundaria(insertfinal);
  
procesaComprasecundaria(updatefinal);
 
   // Swal.fire({ icon: 'success', title: 'SQL resdata Insert final  !!!',text: `${insertfinal}  ${updatefinal}`,  })

 vaciarCarrito();

 onComplete();

  } catch (error) { 
  // Este código se ejecutará si se lanza una excepción durante la ejecución del bloque try
  window.alert(error);
}

}




const procesaComprasecundaria = async (paramfinal)=>{
 
 // window.alert(id_cli)
  const elQuery= {"myQuery":paramfinal }
// window.alert(elQuery.myQuery)
  try{
  const respuesta = await axios.post("https://buddy-care-rest-api.onrender.com/query",elQuery)
console.log(respuesta)

} catch (error) { 
  // Este código se ejecutará si se lanza una excepción durante la ejecución del bloque try
  window.alert(error);
}

}










const vaciarCarrito = async ()=> {
  //window.alert(id)
  const  id_cli =localStorage.getItem('globalidcliente')
  const elQuerydel= {"myQuery":`delete from  pfvet_carritos where  id_cliente=${id_cli} ;`}
  await  axios.post(`https://buddy-care-rest-api.onrender.com/query`,elQuerydel)
  
  //Swal.fire({icon: 'success',title: 'Se ha VACIADO todo el carro de compras',text: `` ,})
  //cargarDatos();
  
  }












  //  --------------  RENDER RENDER RENDER RENDER -----------------------//
  return (
    <center>
      <div className="App">
        <h1>Importe a Pagar con Pay Pal $ {price} </h1>

    
        <br />
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </div>
    </center>
  );
}

