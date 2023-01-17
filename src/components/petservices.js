import Footer from '../components/Footer';
import Profileinterno from './Profileinterno';
import Petservicios from './Petservicios';
import Testimoniopetshop from './Testimoniopetshop';
const Petservices = () => {
    return(
        <div>
           <Profileinterno/> 
       
       
      {localStorage.getItem("globalidhabilitado").trim()==="101010" && <Testimoniopetshop/>}
  
  {localStorage.getItem("globalidhabilitado").trim()==="0111000" && <Petservicios/>}
       
       
       
          
        </div>
    )
}
export default Petservices