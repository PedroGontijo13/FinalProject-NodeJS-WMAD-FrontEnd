import { Container, Row, Col, Button } from "react-bootstrap";
import { LostPetsTitle, Rigth, Left, Center } from "../styles";
import Cards from "./Cards";

export default function PetsFound() {
    return (
        <Container style={{ marginBottom: '10px' }}>
            <Row style={{ margin: '4% 0' }}>
                <Col sm='6'>
                    <Left>
                        <LostPetsTitle>
                            PetsFound
                        </LostPetsTitle>
                    </Left>
                </Col>
                <Col sm='6'>
                    <Rigth>
                        <Button style={{ float: "right" }} variant="dark">Dark</Button>
                    </Rigth>
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
        </Container>
    )
}