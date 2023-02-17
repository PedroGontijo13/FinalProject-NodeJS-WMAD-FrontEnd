import { Container, Row, Col, Button } from "react-bootstrap";
import { Center, ColContainer, LostPetsTitle } from "../styles";
import Cards from "../components/Cards";
import ContentBanner from "../components/ContentBanner";
import PetsFound from "../components/PetsFound";
import Footer from '../components/Footer'
import LostPets from "../components/LostPets";
import AllLostPets from "../components/AllLostPets";

export default function LostPetsPage() {
    return (
        <Container fluid style={{ background: '#FFFF', color: 'black' }}>
            <Row style={{ margin: '4% 0' }}>
                <LostPets />
            </Row>
            <Row>
                <AllLostPets/>
            </Row>
            <Row>
                <Col style={{ background: '#000', margin: '20px 0px', padding: '0px !important' }}>
                    <ContentBanner></ContentBanner>
                </Col>
            </Row>
            <Row>
                <PetsFound></PetsFound>
            </Row>
            <Footer></Footer>
        </Container>
    )
}