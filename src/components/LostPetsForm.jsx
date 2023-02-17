import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Center, FormTitle, FlexEnd } from "../styles";
import Cards from "./Cards";
import LostPets from "./LostPets";
import PetsFound from "./PetsFound";
import PetImg1 from "../assets/dog1.jpg";
import axios from "axios";

export default function LostPetsFormPage() {
  const [Name, setName] = useState("");
  const [Color, setColor] = useState("");
  const [Pedigree, setPedigree] = useState("");
  const [Reward, setReward] = useState("");
  const [City, setCity] = useState("");
  const [Contact, setContact] = useState("");
  const [File, setFile] = useState("");
  const [CardDog, setCardDog] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    CreateCard(Name, Color, Pedigree, Reward, City, Contact, File);
    alert(
      `The name you entered was: ${Name},  ${Color}, ${Pedigree}, ${Reward}, ${City}, ${Contact}, ${File} `
    );
    const newPet = { Name, Color, Reward, City };
    axios
      .post("http://localhost:3001/lostpet", newPet)
      .then((response) => {
        console.log("New pet added:", response.data);
      })
      .catch((error) => {
        console.log("Error adding new pet:", error);
      });
  };

  const CreateCard = (Name, Color, Pedigree, Reward, City, Contact, File) => {
    return setCardDog(
      <>
        <Col style={{ margin: "auto", color: "black" }} sm="3">
          <Cards
            ImgUrl={PetImg1}
            Name={Name}
            Pedigre={Pedigree}
            Color={Color}
            Reward={Reward}
            City={City}
          />
        </Col>
      </>
    );
  };

  return (
    <>
      <Container fluid style={{ background: "black" }}>
        <Row>
          <Col>
            <Center>
              <FormTitle>Create a Lost Pet</FormTitle>
            </Center>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Form.Group
                style={{ padding: "10px" }}
                className="mb-3"
                controlId="formBasicName"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={Name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  type="name"
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group
                style={{ padding: "10px" }}
                className="mb-3"
                controlId="formBasicColor"
              >
                <Form.Label>Color</Form.Label>
                <Form.Control
                  value={Color}
                  onChange={(event) => {
                    setColor(event.target.value);
                  }}
                  type="colorPet"
                  placeholder="Enter color"
                />
              </Form.Group>
              <Form.Group
                style={{ padding: "10px" }}
                className="mb-3"
                controlId="formBasicReward"
              >
                <Form.Label>Reward</Form.Label>
                <Form.Control
                  value={Reward}
                  onChange={(event) => {
                    setReward(event.target.value);
                  }}
                  type="reward"
                  placeholder="Reward"
                />
              </Form.Group>
              <Form.Group
                style={{ padding: "10px" }}
                className="mb-3"
                controlId="formBasicCity"
              >
                <Form.Label>City</Form.Label>
                <Form.Control
                  value={City}
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                  type="city"
                  placeholder="City"
                />
              </Form.Group>
              <FlexEnd style={{ padding: "10px" }}>
                <Button variant="secondary" type="submit">
                  Submit
                </Button>
              </FlexEnd>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col style={{ padding: "0px" }}>
            <LostPets Card={CardDog} />
          </Col>
        </Row>
        <Row>
          <Col style={{ padding: "0px" }}>
            <PetsFound />
          </Col>
        </Row>
      </Container>
    </>
  );
}
