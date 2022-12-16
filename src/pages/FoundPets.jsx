import { Container, Row, Col } from "react-bootstrap";
import ContentBanner from "../components/ContentBanner";
import PetsFound from "../components/PetsFound";
import LostPets from "../components/LostPets";
import Footer from "../components/Footer";

export default function FoundPets() {
    return (
        <Container fluid style={{ background: '#FFFF', color: 'black', marginTop: '20px' }}>
            <PetsFound />
            <Row>
                <Col style={{ background: '#000', margin: '20px 0px', padding: '0px !important' }}>
                    <ContentBanner></ContentBanner>
                </Col>
            </Row>
            <Row>
                <LostPets />
            </Row>
            <Row>
                <Footer></Footer>
            </Row>
        </Container>
    )
}