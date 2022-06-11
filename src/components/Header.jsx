import { Navbar, Container } from 'react-bootstrap'

const Header = () => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">Brand link</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header