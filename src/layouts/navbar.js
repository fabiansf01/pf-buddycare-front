import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import Profileinterno from "../components/Profileinterno"
const NavBarExample = () => {
    
    // <Navbar className="navBg" variant="dark" expand="lg lg">
    // <Navbar bg="dark" variant="dark">
    return(
       <>    
       
      

       <Navbar className="navBg" variant="dark" expand="lg">
       
        <Container>
           
            <Navbar.Brand as={Link} to="/" >Buddy Care </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                
                <Nav.Link as={Link} to="/shop" style={{ fontSize: "17px" }}>Tienda</Nav.Link>                
                <Nav.Link as={Link} to="/mismascotas" style={{ fontSize: "17px", marginRight: "15px" }}>Mis Mascotas</Nav.Link>
                <Nav.Link as={Link} to="/petservices" style={{ fontSize: "17px", marginRight: "15px" }}>Pet Services</Nav.Link>                
                <Nav.Link as={Link} to="/urgencias"style={{ fontSize: "17px", marginRight: "15px" }}>Urgencias</Nav.Link>                
                <Nav.Link as={Link} to="/micuenta"style={{ fontSize: "17px", marginRight: "15px" }}>Mi Cuenta</Nav.Link>                
                <Nav.Link as={Link} to="/registrese"style={{ fontSize: "17px", marginRight: "15px" }}>Registrese</Nav.Link>
                <Nav.Link as={Link} to="/developers"style={{ fontSize: "17px", marginRight: "15px" }}>Developers</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  
        <div>
        {/*<Profileinterno/>*/}
       </div>
        <section>
            <Outlet></Outlet>
        </section> 
       
       
       
       </> 

      
    )
}
export default NavBarExample