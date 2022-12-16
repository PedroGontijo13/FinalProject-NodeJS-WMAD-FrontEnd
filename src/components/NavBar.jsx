import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/Logo.png'
import Person from '../assets/Person.png'
import { Center, ColContainer, Column } from '../styles'

export default function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <ColContainer>
                        <Column>
                            <Center>
                                <Navbar.Brand href="/FormPage"><img src={Person} style={{ height: '45px' }} alt="" /></Navbar.Brand>
                            </Center>
                        </Column>
                        <Column>
                            <Center>
                                <Center>
                                    <Navbar.Brand href="/"><img src={Logo} style={{ height: '45px' }} alt="" /></Navbar.Brand>
                                </Center>
                            </Center>
                        </Column>
                        <Column style={{ display: 'flex', alignContent: 'center' }}>
                            <Center>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            </Center>
                        </Column>
                    </ColContainer>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">
                                    <a href="/FoundPets">
                                        Found Pets
                                    </a>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    <a href="/LostPets">
                                        Lost Pets
                                    </a>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    <a href="/FormPage">
                                        Create User
                                    </a>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    <a href="/CreateLostPet">
                                        Create Lost Pet
                                    </a>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    <a href="/CreateFoundPet">
                                        Create Found Pet
                                    </a>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}