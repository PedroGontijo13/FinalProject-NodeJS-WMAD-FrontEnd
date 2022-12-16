import { Col, Row, Container } from "react-bootstrap";
import LostPetsForm from "../components/LostPetsForm";

export default function LostPetsFormPage() {
    return (
        <Container fluid>
            <Row>
                <Col style={{ padding: '0px' }}>
                    <LostPetsForm/>
                </Col>
            </Row>
        </Container>
    )
}