import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/Logo.png'
import Person from '../assets/Person.png'
import { ColContainer, Column } from '../styles'

export default function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <ColContainer>
                        <Column>
                            <Navbar.Brand href="#home"><img src={Person} style={{ height: '45px' }} alt="" /></Navbar.Brand>

                        </Column>
                        <Column>
                            <Navbar.Brand href="#home"><img src={Logo} style={{ height: '45px' }} alt="" /></Navbar.Brand>

                        </Column>
                        <Column>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </Column>
                    </ColContainer>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}