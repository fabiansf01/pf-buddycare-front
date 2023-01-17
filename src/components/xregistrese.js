import { globalbackground } from "../css/backgroundcss.css";
import { fuenteglobal } from "../css/globalfont.css";
import Footer from '../components/Footer';
import Formulario from './Formulario';
import GoogleLogin from 'react-google-login';
const Registrese = () => {
    return(
        <div className="globalbackground">
            <h1 className="fuenteglobal">Registrese</h1> 
            <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
      
        </div>
    )
}
export default Registrese