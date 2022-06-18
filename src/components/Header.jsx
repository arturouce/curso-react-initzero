import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/books/all">Libros</Nav.Link>
                    <Nav.Link href="/users/all">Usuarios</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header