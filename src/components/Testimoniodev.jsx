import React from 'react';
import { globalperroshome,textotestimoniohome,contenedortestimoniohome,imagentestimoniohome,contenedortextotestimoniohome } from  '../css/testimoniohome.css';
//<div  style={{ overflow: 'hidden', position: 'fixed' }}> 
function Testimoniodev(props){
  return (
    <div > 
    
    
    <div className='contenedortestimoniohome'>
      <img className='imagentestimoniohome'src={require('../assets/imagenasdru.jpeg')} />


      <div className='contenedortextotestimoniohome'>
      
        
        <p className='textotestimoniohome'>Mi nombre es Asdrubal Alfonso Mejia López, soy de Magangué-Bolívar(Colombia), Administrador Público graduado en la universidad de cartagena en el año 2018 y he laborado en asesorías comerciales, entidades bancarias y recepcionista de hotel, me encaminé desde comienzos del 2022 en el mundo de la programación y desarrollo web, conocí Henry en redes sociales y me siento afortunado de ser parte de esta gran comunidad donde he aprendido muchas tecnologías además de seguir adquiriendo de habilidades blandas, actualmente estoy en proceso de formación como Full Stack Developer.
Mi Email: asdrumejia19@gmail.com Tel: +573004071981 GitHub: Asdrumejia19

 </p> 
      </div>
    </div>

    <div className='contenedortestimoniohome'>
      <img className='imagentestimoniohome' src={require('../assets/imagenfabian.jpeg')} />


      <div className='contenedortextotestimoniohome'>
      
        
        <p className='textotestimoniohome'>Me llamo Fabián Leonardo Peralta, soy clase ´71, vivo en San Francisco, Córoba Argentina, Soy Técnico en Electrónica Industrial egresado en 1989, 
        Desde el año 1984 estoy en contacto con el desarrollo de aplicaciones (1984 , sumador A +B en Basic ,para Comodore 64)
        Padecí RM Cobol 85, Calculé con Pascal, Me asombré con clipper y MSDOS Dbase, Entré a los noventa de la mano de FoXpro , me enamoré de VisualFox , evolucioné con Macromedia Flash y su actionscript, Entendí y utilizo PHP +MySQL, estoy reaccionando a REACT . Mi vida laboral transcurrió, hasta el 2018, como Gerente administrativo y de sistemas de una empresa financiera. Actualmente exploto un software financiero de mi autoría franquiciado a cuatro empresas del rubro.
        Mi email: fabianperaltasfco@gmail.com Tel:+54 3564 560635 
 </p> 
      </div>
    </div>

    <div className='contenedortestimonio'>
      <img className='imagentestimoniohome' src={require('../assets/imagenjau.jpeg')} />


      <div className='contenedortextotestimoniohome'>
      
        
        <p className='textotestimoniohome'>Me llamo Jaume Suarez Molina, soy de Barcelona España, vivo en Bogota de Colombia. Graduado de secundaria en Bogota colombia, Desde el 2022 incursioné a programar por pasatiempo, inicie en el desarrollo de web, por medio de la plataforma henry.
Correo electronico: santjaume02@gmail.com  movil: +57 3125047788 Github: Jau2002
 </p> 
      </div>
    </div>







</div>



  );
}

export default Testimoniodev;