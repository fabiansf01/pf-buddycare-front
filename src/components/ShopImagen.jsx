


//export default Imagen;*/

import React from 'react'
//import { homeContainer,newcards,fontdescribe } from "./Shclass.module.css";

import styles from "./ShopLaunch.module.css";
import axios from "axios";
import Swal from 'sweetalert2';
// no se usa component porque est eva a ser un componente funcional

// no se puede usar this porque es una clase , por eso se usa props
const ShopImagen = (props) =>{
// se descontructura la matriz




//const {id,nombre,descripcion,precio,stock, contenido}=props.articulo;
   
let {id,nombre,descripcion,precio,stock, contenido,desrub} = {};
if (props.articulo) {
  ({id,nombre,descripcion,precio,stock, contenido,desrub}=props.articulo);
}

/*CREATE  TABLE pfvet_carritos ( 
	id                   integer  NOT NULL  ,
	id_cliente           integer  NOT NULL  ,
	id_articulo          integer  NOT NULL  ,
	cantidad			 integer  NOT NULL  ,
	comfav               char(1)    ,
	falta                date    ,
	halta                time    ,
	fvto                 date    ,
	CONSTRAINT pk_pfvet_carritos PRIMARY KEY ( id )
 );*/



 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

  }


  const date = new Date();

  // ********************** ACTIVA COMPRA  ***********

  const activaCompra = async (id,nombre) => {
    
    if(localStorage.getItem('globalidhabilitado')=== '101010'){
    
        Swal.fire({icon: 'error',title: 'Solo pueden realizar compras los CLIENTES REGISTRADOS , regístrese sin cargo a nuestro SISTEMA  !!! ',text: `` ,})
  }else{
    
    //Swal.fire({icon: 'success',title: 'Se ha ingresado al carro de compras el artículo',text: `Ref.: ${id}   ${nombre}` ,})
  
    let id_art=id.toString();
    let id_cli =localStorage.getItem('globalidcliente')
    let id_carr = getRandomInt(1111111, 9999999); 
    let faltacarr =  date.toLocaleDateString('en-GB').split('/').reverse().join('-');
    date.toLocaleDateString('en-GB').split('/').reverse().join('-'); // '20211124'
   const elQuerycar ={"myQuery":`insert into pfvet_carritos (id,id_cliente,id_articulo,cantidad,comfav,falta,halta,fvto) values ('${id_carr}', '${id_cli}','${id_art}','1','C','${faltacarr}','00:00:00','2022-01-01');`};
    //window.alert(elQuerycar.myQuery)
    try{
    

    
   await  axios.post("https://buddy-care-rest-api.onrender.com/query",elQuerycar)

   Swal.fire({icon: 'success',title: 'Se ha ingresado al carro de compras el artículo',text: `Ref.: ${id}   ${nombre}` ,})
  

} catch (error) {
    // Este código se ejecutará si se lanza una excepción durante la ejecución del bloque try
    window.alert(error);
  }  

  

  //*************** fin  */
}}




/*const activaCompra = async (id,nombre) => {
    Swal.fire({icon: 'success',title: 'Se ha ingresado al carro de compras el artículo',text: `Ref.: ${id}   ${nombre}` ,})
  
    let id_art=id;
    let id_cli =localStorage.getItem('globalidcliente').parseInt()
    let id_carr = getRandomInt(1111111, 9999999); 
    let faltacarr =  date.toLocaleDateString('en-GB').split('/').reverse().join('-');
    date.toLocaleDateString('en-GB').split('/').reverse().join('-'); // '20211124'
   //const elQuerycar ={"myQuery":`insert into pfvet_carritos (id,id_cliente,id_articulo,cantidad,comfav,falta,halta,fvto) values ('${id_carr}', '${id_cli}','${id_art}','1','C','${faltacarr}','00:00:00','2022-01-01');`};
   // window.alert(elQuerycar.myQuery)
    try{
    

    
   await  axios.post("https://buddy-care-rest-api.onrender.com/carrito",{
    id: id_carr,
    id_cliente: id_cli,
    id_articulo: id_art,
    cantidad: 1,
    comfav: "C",
    falta: date.toLocaleDateString('en-GB').split('/').reverse().join('-'),
    halta: "00:00:00",
    fvto: "2022-01-01",







   })

} catch (error) {
    // Este código se ejecutará si se lanza una excepción durante la ejecución del bloque try
    window.alert(error);
  }  
   
}*/
  
    
    
   




// ************************  render ***********************
return(

        

<div className={`mx-auto ${styles.newcards}`}>
    <div className=" justify-content-center">

        <div className="card me-3 " style={{ width: '14rem', height:'25rem' }}>
  
         <div className="card-body" >
         <img src={contenido}  className="card-img-top" style={{height: "150px", width: "150px"}} />
           
         <h5 className={`card-title ${styles.fontdescribetitle}`}>Ref.: {id}</h5>
             <h5 className={`card-title ${styles.fontdescribetitle}`}> {nombre}</h5>
             <h5 className={`card-title ${styles.fontdescribetitle}`}>Rubro.: {desrub}</h5>
           <p className={styles.fontdescribe} >{descripcion} </p>
           <h5 className={`card-title ${styles.fontdescribeprecio}`}>Precio:${precio}</h5>
                    
           <br></br>
           <button className="btn btn-secondary" onClick={() => activaCompra(id,nombre)} >COMPRAR</button>
          </div>
        </div>
</div>		
</div>





       




    )
}
 


export default ShopImagen;
