import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards";
import PetImg1 from "../assets/dog1.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AllLostPets({ Card }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://finalproject-abi9.onrender.com/lostpet/getPets")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container fluid>
      <Row style={{ margin: "4% 0" }}>
        <Col sm="12">
          <h2 style={{textAlign: 'center !important'}}>All lost pets</h2>
        </Col>
      </Row>
      <Row style={{ margin: "4% 0" }}>
        {data.map((pet) => (
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
      </Row>
    </Container>
  );
}
