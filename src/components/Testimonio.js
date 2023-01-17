import React from 'react';
import { globalperroshome,textotestimoniohome,contenedortestimoniohome,imagentestimoniohome,contenedortextotestimoniohome } from  '../css/testimoniohome.css';
//<div  style={{ overflow: 'hidden', position: 'fixed' }}> 
function Testimonio(props){
  return (
    <div > 
    
    
    <div className='contenedortestimoniohome'>
      <img className='imagentestimoniohome' src={require('../assets/testi_foto1.jpg')} />


      <div className='contenedortextotestimoniohome'>
      
        
        <p className='textotestimoniohome'>BUDDY CARE
Es una aplicación orientada a la afiliación de Veterinarias y  Médicos Veterinarios 
con el fin de proporcionarle a los clientes suscriptos diferentes servicios como 
el acceso a un exclusivo shop de artículos de veterinaria con inmejorables promociones

 </p> 
      </div>
    </div>

    <div className='contenedortestimoniohome'>
      <img className='imagentestimoniohome' src={require('../assets/testi_foto2.jpg')} />


      <div className='contenedortextotestimoniohome'>
      
        
        <p className='textotestimoniohome'>Como cliente suscripto
también tendrá acceso a un servicio de URGENCIAS , donde veterinarios del staff
publicaran sus horarios de atención para solucionar esta 
el acceso a un exclusivo shop de artículos de veterinaria con inmejorables promociones

 </p> 
      </div>
    </div>

    <div className='contenedortestimonio'>
      <img className='imagentestimoniohome' src={require('../assets/testi_foto3.jpg')} />


      <div className='contenedortextotestimoniohome'>
      
        
        <p className='textotestimoniohome'>Las Veterinarias afiliadas y el staff Médicos
etán habilitados para realizar campañas promocionales con todos los clientes suscriptos,
además podrán generar contenido dirigido

 </p> 
      </div>
    </div>







</div>



  );
}

export default Testimonio;