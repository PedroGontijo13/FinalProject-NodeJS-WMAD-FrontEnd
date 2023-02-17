import { Container, Row, Col, Button } from "react-bootstrap";
import { LostPetsTitle, Rigth, Left, Center } from "../styles";
import Cards from "./Cards";
import PetImg1 from "../assets/dog2.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PetsFound({ Card }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://finalproject-abi9.onrender.com/foundpet/getPets")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Create a new array with the first three elements
  const firstThreeItems = data.slice(0, 3);

  return (
    <Container fluid>
      <Row style={{ margin: "4% 0" }}>
        <Col sm="6">
          <Left>
            <LostPetsTitle>Found Pets</LostPetsTitle>
          </Left>
        </Col>
        <Col sm="6">
          <Rigth>
            <a href="/FoundPets">
              <Button style={{ float: "right" }} variant="dark">
                Check
              </Button>
            </a>
          </Rigth>
        </Col>
      </Row>
      <Row style={{ margin: "4% 0" }}>
        {firstThreeItems.map((pet) => (
          <Col key={pet.id} style={{ margin: "auto", color: "black" }} sm="3">
            <Cards
              ImgUrl={PetImg1}
              Name={pet.name}
              Color={pet.color}
              Reward={pet.reward}
              City={pet.location}
            ></Cards>
          </Col>
        ))}
        {Card}
      </Row>
      <Row style={{ margin: "4% 0" }}>
        <Col>
          <Center>
            <a href="/CreateFoundPet">
              <Button variant="dark">Create</Button>
            </a>
          </Center>
        </Col>
      </Row>
    </Container>
  );
}
