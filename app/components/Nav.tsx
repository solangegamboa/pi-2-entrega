'use client'
import { Container, Nav, Navbar } from 'react-bootstrap';

function NavGeral() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">PI - Parte II 2023</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/pi-2-entrega">Login</Nav.Link>
                    <Nav.Link href="/pi-2-entrega/cadastro">Cadastro</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavGeral;