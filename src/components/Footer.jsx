import { Col, Container, Row } from "react-bootstrap";
import { Center, FooterP } from "../styles";

export default function Footer() {
    return (
        <Container fluid>
            <Row style={{ backgroundColor: '#D9D9D9', color: 'black' }} >
                <Col>
                    <Center>
                        <FooterP>CopyRigth - PetFinder - PedroGont13</FooterP>
                    </Center>
                </Col>
            </Row>
        </Container>
    )
}