import React from "react";

import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";

export const Complaints = () => {
 const listItems = [
    {
      title: "Complaint #2341",
      status: "Pending",
      statusVariant: "warning",
      description: "Customer reported an issue with product delivery.",
      date: "2025-01-12",
    },
    {
      title: "Complaint #2342",
      status: "Resolved",
      statusVariant: "success",
      description: "Issue solved with refund and follow-up confirmation.",
      date: "2025-01-10",
    },
    {
      title: "Complaint #2343",
      status: "In Progress",
      statusVariant: "primary",
      description: "Dealer reviewing the submitted documentation.",
      date: "2025-01-09",
    }
  ];
  return (
    <div>
     <>

      {/* TOP 4 BOXES */}
      <Row className="mb-4">
        {["Total Complaints", "Pending", "In Progress", "Resolved"].map(
          (title, idx) => {
            const variants = ["bg-info", "bg-warning", "bg-danger", "bg-success"];
            return (
              <Col md={3} sm={6} key={idx}>
                <Card className={`text-center shadow-sm p-3 ${variants[idx]} text-white`}>
                  <h5 className="mb-2">{title}</h5>
                  <h2 className="fw-bold">123</h2>
                </Card>
              </Col>
            );
          }
        )}
      </Row>

      {/* WHITE CONTAINER */}
      <Card className="shadow-sm bg-white">
        <Card.Body>
          <h4 className="mb-4">Recent Complaints</h4>

          {listItems.map((item, i) => (
            <Card className="mb-3 border-0 shadow-sm" key={i}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h5 className="mb-0">
                    {item.title}{" "}
                    <Badge bg={item.statusVariant}>{item.status}</Badge>
                  </h5>
                  <small className="text-muted">{item.date}</small>
                </div>

                <p className="text-muted mb-3">{item.description}</p>

                <div className="text-end">
                  <Button size="sm" variant="primary">
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Card.Body>
      </Card>
    </>
    </div>
  );
};
