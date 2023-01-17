import Footer from '../components/Footer';
import Profileinterno from './Profileinterno';
import Testimoniourgencias from './Testimoniourgencias';
import Urgenview from './Urgenview';

const Urgencias = () => {
    return(
      
        <div>
      
        <div>
        <Profileinterno/>
          </div>
  
      
  
      {localStorage.getItem("globalidhabilitado").trim()==="101010" && <Testimoniourgencias/>}
  
      {localStorage.getItem("globalidhabilitado").trim()==="0111000" && <Urgenview/>}
      
  </div>
   
    )
}
export default Urgencias