import {Card, Col, ListGroup, Row} from 'react-bootstrap';
import Button from "../Button.jsx";

const SentRequestList = ({ receivedRequests, rideRequestHandler }) => {

  if (receivedRequests.length === 0) {
    return (
      <ListGroup className={'mt-4'}>
        No requests found.
      </ListGroup>
    );
  }

  return (
    <Row className={'mt-4'}>
      {receivedRequests.map(receivedRequest => (
        <Col key={receivedRequest._id} xs={12} md={6} className="mb-4">
          <Card className="mb-3 ">
          <Card.Body>
            <Card.Title>{receivedRequest.profile.parentName}</Card.Title>
            <Card.Text>Destination: {'Community Middle School'}</Card.Text>
            <Card.Text>Address: {receivedRequest.profile.address}</Card.Text>
            <Card.Text>Status: {receivedRequest.status}</Card.Text>
          </Card.Body>
        </Card>
        </Col>
      ))}
    </Row>
  );

}

export default SentRequestList;
