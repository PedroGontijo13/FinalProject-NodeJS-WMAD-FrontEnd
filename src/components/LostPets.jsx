import { Container, Row, Col, Button } from "react-bootstrap";
import { LostPetsTitle, Rigth, Left, Center } from "../styles";
import Cards from "./Cards";
import PetImg1 from '../assets/dog1.jpg'

export default function LostPets({Card}) {

    return (
        <Container fluid>
            <Row style={{ margin: '4% 0' }}>
                <Col sm='6'>
                    <Left>
                        <LostPetsTitle>
                            Lost Pets
                        </LostPetsTitle>
                    </Left>
                </Col>
                <Col sm='6'>
                    <Rigth>
                        <a href="/LostPets">
                            <Button style={{ float: "right" }} variant="dark">Check</Button>
                        </a>
                    </Rigth>
                </Col>
            </Row>
            <Row style={{ margin: '4% 0' }}>
                <Col style={{ margin: 'auto', color: 'black' }} sm='3'>
                    <Cards ImgUrl={PetImg1} Name='Marley' Pedigre='Hey' Color='Black' Reward='$1200' City='Vancouver'></Cards>
                </Col>
                <Col style={{ margin: 'auto', color: 'black' }} sm='3'>
                    <Cards ImgUrl={PetImg1} Name='Marley' Pedigre='Hey' Color='Black' Reward='$1200' City='Vancouver'></Cards>
                </Col>
                <Col style={{ margin: 'auto', color: 'black' }} sm='3'>
                    <Cards ImgUrl={PetImg1} Name='Marley' Pedigre='Hey' Color='Black' Reward='$1200' City='Vancouver'></Cards>
                </Col>
                {Card}
            </Row>
            <Row style={{ margin: '4% 0' }}>
                <Col>
                    <Center>
                        <a href="/CreateLostPet">
                            <Button variant="dark">Create</Button>
                        </a>
                    </Center>
                </Col>
            </Row>
        </Container>
    )
}