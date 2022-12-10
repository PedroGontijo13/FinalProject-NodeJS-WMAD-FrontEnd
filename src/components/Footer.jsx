import { Col, Container, Row } from "react-bootstrap";
import { Center, FooterP} from "../styles";

export default function Footer() {
    return (
        <Container>
            <Row>
                <Col>
                    <Center>
                        <FooterP>CopyRigth - PetFinder - PedroGont13</FooterP>
                    </Center>
                </Col>
            </Row>
        </Container>
    )
}