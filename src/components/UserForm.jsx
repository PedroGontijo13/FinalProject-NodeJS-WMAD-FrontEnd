import { useState } from "react";
import { Col, Form, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FormTitle, Center, FlexEnd } from "../styles";
import axios from "axios";

export default function UserForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name},  ${email}, ${password}`);

    const newUser = { name, email, password };
    axios
      .post("https://finalproject-abi9.onrender.com/user", newUser)
      .then((response) => {
        console.log("New user added:", response.data);
      })
      .catch((error) => {
        console.log("Error adding new pet:", error);
      });
  };
  return (
    <>
      <Container fluid style={{ background: "black" }}>
        <Row>
          <Col>
            <Center>
              <FormTitle>Create User</FormTitle>
            </Center>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Form.Group
                style={{ padding: "10px" }}
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setemail(event.target.value);
                  }}
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group
                style={{ padding: "10px" }}
                className="mb-3"
                controlId="formBasicName"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="Name"
                  value={name}
                  onChange={(event) => {
                    setname(event.target.value);
                  }}
                  placeholder="Enter Name"
                />
                <Form.Text className="text-muted">
                  We'll never share your Name with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group
                style={{ padding: "10px" }}
                className="mb-3"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(event) => {
                    setpassword(event.target.value);
                  }}
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group
                style={{ padding: "10px" }}
                className="mb-3"
                controlId="formBasicCheckbox"
              >
                <Form.Check type="checkbox" label="Check me out" />
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
    </>
  );
}
