import {Card, Col, ListGroup, Row} from 'react-bootstrap';
import Button from "../Button.jsx";

const ReceivedRequestList = ({ receivedRequests, rideRequestHandler }) => {

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
            <Card.Title>{receivedRequest.requester.parentName}</Card.Title>
            <Card.Text>Destination: {'Community Middle School'}</Card.Text>
            <Card.Text>Address: {receivedRequest.requester.address}</Card.Text>
            <Card.Text>Status: {receivedRequest.status}</Card.Text>

                <Button
                  className={'btnStyleA btnRadius25'}
                  onClick={() => rideRequestHandler(receivedRequest._id)}>
                  Accept
                </Button>
                &nbsp;
                <Button
                  className={'btnStyleA-outline btnRadius25'}
                  onClick={() => rideRequestHandler(receivedRequest._id)}>
                  Reject
                </Button>

          </Card.Body>
        </Card>
        </Col>
      ))}
    </Row>
  );

}

export default ReceivedRequestList;
