import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Footer from './components/Footer';

// vet  ///
import Registrese from './components/registrese';
import Shop from './components/shop';
import Mismascotas from './components/mismascotas';
import Petservices from './components/petservices';
import Urgencias from './components/urgencias';
import Micuenta from './components/micuenta';
import Developers from './components/developers';



import NavBarExample from './layouts/navbar';

function App() {

// inicio de localstorge
localStorage.setItem('logindetalle', 'NINGUN CLIENTE REGISTRADO')
localStorage.setItem('globalidcliente', '')
localStorage.setItem('globalidhabilitado', '101010')
localStorage.setItem('globalestadoficha', 'SINESTADO')
localStorage.setItem('globaltelefono', '')
localStorage.setItem('globalemail', '')
  return (
    <div className="App" style={{ backgroundColor: '#e4f5f7' }}>

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <Home /> } />
    
    <Route path='Registrese' element={ <Registrese/> } />
    <Route path='Shop' element={ <Shop /> } />
    <Route path='Mismascotas' element={ <Mismascotas/> } />
    <Route path='Petservices' element={ <Petservices/> } />
    <Route path='Urgencias' element={ <Urgencias/> } />
    <Route path='Micuenta' element={ <Micuenta/> } />
    <Route path='Developers' element={ <Developers/> } />
   
   
    
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  
  
  
  </Route>
</Routes> 
</BrowserRouter>


<div>
      <Footer/>
    </div>

    </div>
    

    
  );
}

export default App;
