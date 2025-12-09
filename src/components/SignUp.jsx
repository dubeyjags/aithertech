import { Form, Card } from "react-bootstrap";

function SignIn() {
  return (
    <Card>
        <Card.Header>Sign Up</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SignIn;
