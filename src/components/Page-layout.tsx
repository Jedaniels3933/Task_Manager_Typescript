import { Col, Container } from "react-bootstrap";
import NavBar from "./NavBar";
import NavBarButtons from "./NavBarButtons";
import React from "react";

type PageLayoutProps = {
    children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({children}) => {
    return(
        <Container>
            <Col>
            <NavBar />
            <NavBarButtons />
            </Col>
            {children}
        </Container>
    );
};

export default PageLayout;