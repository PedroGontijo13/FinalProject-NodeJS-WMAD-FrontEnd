import { Col, Row, Container } from "react-bootstrap";
import Footer from "../components/Footer";
import LostPetsForm from "../components/LostPetsForm";

export default function LostPetsFormPage() {
    return (
        <Container fluid>
            <Row>
                <Col style={{ padding: '0px' }}>
                    <LostPetsForm/>
                </Col>
            </Row>
            <Row>
                <Footer/>
            </Row>
        </Container>
    )
}