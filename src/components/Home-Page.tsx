import { Col, Container } from "react-bootstrap";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import NavBar from "./NavBar";

const HomePage: React.FC =()=> {
    return (
        <Container>
            <NavBar />
            <Col>
            <h1>Welcome To the Task Management System</h1>
            <LoginButton />
            <LogoutButton  />
            </Col>
        </Container>
    );
};

export default HomePage;