import { Container, Row, Col, Button } from "react-bootstrap";
import { Center, ColContainer, LostPetsTitle } from "../styles";
import Cards from "../components/Cards";
import ContentBanner from "../components/ContentBanner";
import PetsFound from "../components/PetsFound";
import Footer from '../components/Footer'

export default function LostPetsPage() {
    return (
        <Container fluid style={{ background: '#FFFF', color: 'black', marginTop: '20px' }}>
            <Row>
                <Col>
                    <ColContainer>
                        <Center>
                            <LostPetsTitle>
                                Lost Pets
                            </LostPetsTitle>
                        </Center>
                        <Button variant="dark">Dark</Button>
                        <Button variant="dark">Dark</Button>
                    </ColContainer>
                </Col>
            </Row>
            <Row style={{ margin: '4% 0' }}>
                <Col style={{ margin: 'auto', color: 'black' }} sm='3'>
                    <Cards Text='Ho' Title='Hey' Url='Tow'></Cards>
                </Col>
                <Col style={{ margin: 'auto', color: 'black' }} sm='3'>
                    <Cards Text='Ho' Title='Hey' Url='Tow'></Cards>
                </Col>
                <Col style={{ margin: 'auto', color: 'black' }} sm='3'>
                    <Cards Text='Ho' Title='Hey' Url='Tow'></Cards>
                </Col>
            </Row>
            <Row style={{ margin: '4% 0' }}>
                <Col style={{ margin: 'auto', color: 'black' }} sm='3'>
                    <Cards Text='Ho' Title='Hey' Url='Tow'></Cards>
                </Col>
                <Col style={{ margin: 'auto', color: 'black' }} sm='3'>
                    <Cards Text='Ho' Title='Hey' Url='Tow'></Cards>
                </Col>
                <Col style={{ margin: 'auto', color: 'black' }} sm='3'>
                    <Cards Text='Ho' Title='Hey' Url='Tow'></Cards>
                </Col>
            </Row>
            <Row style={{ marginTop: '5%' }}>
                <Col>
                    <Center>
                        <Button variant="dark">Go somewhere</Button>
                    </Center>
                </Col>
            </Row>
            <Row>
                <Col>
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