import { Col, Row } from "react-bootstrap";
import { BannerSubTitle, BannerTitle, Center, ContenBannerArea } from "../styles";

export default function ContentBanner() {
    return (
        <ContenBannerArea>
            <Row>
                <Center>
                    <Col style={{ padding: '50px' }}>
                        <BannerTitle>Can’t find your pet?</BannerTitle>
                        <Center>
                            <BannerSubTitle>Here people can post pets found that were lost, as well as pets that are still lost.
                            </BannerSubTitle>
                        </Center>
                    </Col>
                </Center>
            </Row>
        </ContenBannerArea>
    )
}