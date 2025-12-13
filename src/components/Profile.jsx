import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export const Profile = () => {
  return (
    <Container className="py-4">
      <Row>
        {/* LEFT SIDEBAR */}
        <Col md={4}>
          <Card className="text-center mb-4 bg-white">
            <Card.Body>
              <img
                src="https://via.placeholder.com/120"
                alt="Profile"
                className="rounded-circle mb-3"
                width="120"
                height="120"
              />
              <h5 className="mb-1">John Doe</h5>
              <p className="text-muted">john@example.com</p>

              <Button variant="primary" size="sm">
                Change Photo
              </Button>
            </Card.Body>
          </Card>

          <Card className="bg-white">
            <Card.Header>Account Details</Card.Header>
            <Card.Body>
              <p><strong>Role:</strong> Customer</p>
              <p><strong>Member since:</strong> Jan 2024</p>
              <p><strong>Status:</strong> Active</p>
            </Card.Body>
          </Card>
        </Col>

        {/* MAIN CONTENT */}
        <Col md={8}>
          <Card className="bg-white">
            <Card.Header>Profile Information</Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" defaultValue="John" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" defaultValue="Doe" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" defaultValue="john@example.com" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" defaultValue="+1 234 567 890" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue="123 Main Street, USA"
                  />
                </Form.Group>

                <div className="text-end">
                  <Button type="submit" variant="primary">
                    Save Changes
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
