import '../App.css';
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';

const Landing= ()=> {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">CarShop</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/client">Get Ticket</Nav.Link>
                    <Nav.Link href="/packages">Our Services</Nav.Link>
                </Nav>
            </Navbar>
            <Outlet />
        </div>
      );
}

export default Landing;