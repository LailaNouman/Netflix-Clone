import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


function NavBar() {
    return (
        <>

            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Hello</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/favMovie">Fav Movie</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default NavBar;