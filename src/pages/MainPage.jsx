import { Col, Row, Container } from "react-bootstrap";
import { BannerArea, ContenBannerArea, WhiteBg } from "../styles";
import Banner from "../components/Banner";
import ContentBanner from "../components/ContentBanner";
import LostPets from "../components/LostPets";
import PetsFound from "../components/PetsFound";
import Footer from "../components/Footer";

export default function MainPage() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <BannerArea>
                        <Banner></Banner>
                    </BannerArea>
                </Col>
            </Row>
            <Row>
                <Col style={{ background: '#000', margin: '20px 0px', padding: '0px !important' }}>
                    <ContentBanner></ContentBanner>
                </Col>
            </Row>
            <WhiteBg>
                <Row>
                    <Col>
                        <LostPets></LostPets>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <PetsFound></PetsFound>
                    </Col>
                </Row>
            </WhiteBg>
            <Footer></Footer>
        </Container>
    )
}