import { Container, Row, Col, Button } from "react-bootstrap";
import { LostPetsTitle, Rigth, Left, Center } from "../styles";
import Cards from "./Cards";
import Dog2 from "../assets/dog2.jpg"

export default function PetsFound({Card}) {
    return (
        <Container fluid style={{ marginBottom: '10px' }}>
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
                        <a href="/FoundPets">
                            <Button style={{ float: "right" }} variant="dark">Check</Button>
                        </a>
                    </Rigth>
                </Col>
            </Row>
            <Row style={{ margin: '4% 0' }}>
                <Col style={{ margin: 'auto', color: 'black' }} sm='3'>
                    <Cards ImgUrl={Dog2} Name='Marley' Pedigre='Hey' Color='Black' Reward='$1200' City='Vancouver'></Cards>
                </Col>
                <Col style={{ margin: 'auto', color: 'black' }} sm='3'>
                    <Cards ImgUrl={Dog2} Name='Marley' Pedigre='Hey' Color='Black' Reward='$1200' City='Vancouver'></Cards>
                </Col>
                <Col style={{ margin: 'auto', color: 'black' }} sm='3'>
                    <Cards ImgUrl={Dog2} Name='Marley' Pedigre='Hey' Color='Black' Reward='$1200' City='Vancouver'></Cards>
                </Col>
                {Card}
            </Row>
            <Row style={{ marginTop: '5%' }}>
                <Col>
                    <Center>
                        <a href="/CreateFoundPet">
                            <Button variant="dark">Create</Button>
                        </a>
                    </Center>
                </Col>
            </Row>
        </Container>
    )
}