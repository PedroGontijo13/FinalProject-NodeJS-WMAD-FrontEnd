import { Container, Row, Col } from "react-bootstrap"
import PetsFound from "../Components/PetsFound";
import Footer from "../Components/Footer";
import FoundPetsForm from "../components/LostPetsForm";

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