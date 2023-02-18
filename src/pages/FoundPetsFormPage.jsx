import { Container, Row, Col } from "react-bootstrap"
import FoundPetsForm from "../components/FoundPetsForm";

export default function FoundPetsFormPage() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col style={{ padding: '0px' }}>
                        <FoundPetsForm/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}