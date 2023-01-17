import Footer from '../components/Footer';
import Profileinterno from './Profileinterno';
import Testimoniomascotas from './Testimoniomascotas';
import Mascoresult from './Mascoresult';
const Mismascotas = () => {
    return(
        <div>
        <div>
          <Profileinterno/> 
         </div>
         <div>  
          
            {localStorage.getItem("globalidhabilitado").trim()==="101010" && <Testimoniomascotas/>}

            {localStorage.getItem("globalidhabilitado").trim()==="0111000" && <Mascoresult/>}
        </div>
        </div>

    )
}
export default Mismascotas





