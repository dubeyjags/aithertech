import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export const Dashboard = () => {
  return (
    <>
    <div style={{ background: "linear-gradient(to bottom, #e7f4f5 0%, #ffffff 100%)" }}>
      {/* HERO SECTION */}
      <Container className="py-5 text-center">
        <h1 className="fw-bold display-5">
          Complaint Management <span className="text-primary">Made Simple</span>
        </h1>
        <p className="mt-3 text-muted fs-5">
          Streamline your complaint handling process with our powerful platform
          designed for dealers, agents, clients, and engineers.
        </p>
<Link to="/signup" className="btn btn-primary btn-lg mb-3 mt-3 px-4 py-2">Get Started</Link>
    
      </Container>

      {/* 4 INFO CARDS */}
      <Container className="pb-5">
        <Row className="g-4">
          {[
            {
              title: "For Dealers",
              desc: "Manage all complaints from a centralized dashboard with complete oversight.",
              icon: "👨‍💼",
            },
            {
              title: "For Agents",
              desc: "Track and coordinate complaint resolution with real-time status updates.",
              icon: "📝",
            },
            {
              title: "For Clients",
              desc: "Submit and track your complaints easily with full visibility on progress.",
              icon: "📦",
            },
            {
              title: "For Engineers",
              desc: "Receive assignments and update task status efficiently with priority indicators.",
              icon: "⚡",
            },
          ].map((item, i) => (
            <Col md={3} key={i}>
              <Card className="h-100 shadow-sm border-0 rounded-4 bg-white">
                <Card.Body className="p-4">
                  <div className="fs-2 mb-3">{item.icon}</div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted small mt-2">{item.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* WHY CHOOSE SECTION */}
      <Container>
        <Card className="shadow-sm border-0 rounded-4 p-4 mb-5">
          <h3 className="text-center fw-bold mb-4">Why Choose Our Platform?</h3>

          <Row className="text-center g-4 px-3 pb-3">
            {[
              {
                title: "Easy to Use",
                desc: "Intuitive interface for all user types with minimal learning curve.",
                icon: "✔️",
              },
              {
                title: "Real-time Updates",
                desc: "Stay informed with instant status changes and notifications.",
                icon: "⚡",
              },
              {
                title: "Role-based Access",
                desc: "Customized dashboards for dealers, agents, clients, and engineers.",
                icon: "👤",
              },
            ].map((item, i) => (
              <Col md={4} key={i}>
                <div className="fs-1 mb-2">{item.icon}</div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted small">{item.desc}</p>
              </Col>
            ))}
          </Row>
        </Card>
      </Container>

      {/* CTA SECTION */}
      <div
        className="text-center py-5"
        style={{ background: "linear-gradient(to bottom, #e7f4f5 0%, #e7f4f5 100%)" }}
      >
        <h2 className="fw-bold">Ready to get started?</h2>
        <p className="text-muted">
          Join today and streamline your complaint management
        </p>

            <Link to="/signup" className="btn btn-primary mb-3">Create Your Account</Link>
      
      </div>
    </div>
    </>
  )
}
