import { useState } from "react";
import { Col, Form, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FormTitle, Center, FlexEnd } from "../styles";
import axios from "axios";

export default function LoginForm() {
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${UserEmail}, ${UserPassword}`);
    axios
      .post("https://finalproject-abi9.onrender.com/user/login", {
        email: UserEmail,
        password: UserPassword,
      })
      .then((response) => {
        console.log('Logged', response)
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <>
      <Container fluid style={{ background: "black" }}>
        <Row>
          <Col>
            <Center>
              <FormTitle>Login User</FormTitle>
            </Center>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form
              onSubmit={handleSubmit}
              method="POST"
              style={{ width: "100%" }}
            >
              <Form.Group
                style={{ padding: "10px" }}
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={UserEmail}
                  onChange={(event) => {
                    setUserEmail(event.target.value);
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
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={UserPassword}
                  onChange={(event) => {
                    setUserPassword(event.target.value);
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
