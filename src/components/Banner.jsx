import { Row, Col, Button, Container } from "react-bootstrap";
import { BannerImage, BannerSubTitle, BannerTitle, Center, ZeroPadding } from "../styles";
import BannerImg from '../assets/bannerdog.png'

export default function Banner() {
    return (
        <Container fluid>
            <Row>
                <Center>
                    <Col sm='6'>
                        <BannerTitle>Lost your pet?</BannerTitle>
                        <Center>
                            <BannerSubTitle>You can find it here</BannerSubTitle>
                        </Center>
                        <Center>
                            <a href="/LostPets">
                                <Button variant="dark">Check</Button>
                            </a>
                        </Center>
                    </Col>
                    <Col sm='6'>
                        <Center>
                            <BannerImage src={BannerImg} alt="" />
                        </Center>
                    </Col>
                </Center>
            </Row>
        </Container>
    )
}