import UserForm from "../components/UserForm";
import { Col, Row, Container } from "react-bootstrap";
import LostPets from "../components/LostPets";
import PetsFound from "../components/PetsFound";
import Footer from "../components/Footer";

export default function FormPage() {
    return (
        <Container fluid>
            <Row>
                <Col style={{ padding: '0px' }}>
                    <UserForm></UserForm>
                </Col>
            </Row>
            <Row>
                <Col style={{ padding: '0px' }}>
                    <LostPets />
                </Col>
            </Row>
            <Row>
                <Col style={{ padding: '0px' }}>
                    <PetsFound />
                </Col>
            </Row>
            <Row>
                <Col style={{ padding: '0px' }}>
                    <Footer />
                </Col>
            </Row>
        </Container>
    )
}