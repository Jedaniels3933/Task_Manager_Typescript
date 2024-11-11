import { Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import './Task.css'


const NavBar: React.FC = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Navbar  expand="lg" className="NavBar">
            <Nav className="me-auto">
                <Navbar.Brand className="NavItem" href="/">Home</Navbar.Brand>
                {isAuthenticated &&
                <>
                    <Nav.Link className="NavItem" href="/Task-Details">Task</Nav.Link>

                </>
                }
            </Nav>
        </Navbar>
    );
};

export default NavBar;