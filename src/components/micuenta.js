import React , {useEffect} from 'react'
import Formulariomicuenta from './Formulariomicuenta';
import { globalperros } from "../css/backgroundcss.css";
import { fuenteglobal } from "../css/globalfont.css";
import Footer from '../components/Footer';
import Profileinterno from './Profileinterno';
import { Altacliente } from './Altacliente';
import { Altaclientenoflot } from './Altaclientenoflot';
import Testimoniomicuenta from './Testimoniomicuenta';
import { Editaclientenoflot } from './Editaclientenoflot';


const Micuenta = () => {
 
    const [activatestimonio, setActivaTestimonio] = React.useState(false);
    const [activaaltacuenta, setActivaaltacuenta] = React.useState(false);
    

    return(
        <div>
      
      <div>
      <Profileinterno/>
        </div>

    {localStorage.getItem("globalestadoficha").trim() === "CREACUENTA" && <Altaclientenoflot/>}

    {localStorage.getItem("globalidhabilitado").trim()==="101010" && localStorage.getItem("globalestadoficha")!== "CREACUENTA" && <Testimoniomicuenta/>}
    {localStorage.getItem("globalestadoficha").trim() === "MODIFICA" &&  <Editaclientenoflot/>}


    </div>
    )
}
export default Micuenta