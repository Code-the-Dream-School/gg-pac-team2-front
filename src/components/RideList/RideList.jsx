import {Card, Col, ListGroup, Row} from 'react-bootstrap';
import Button from "../Button.jsx";

const RideList = ({ rides, rideRequestHandler }) => {

  if (rides.length === 0) {
    return (
      <ListGroup className={'mt-4'}>
        No rides available.
      </ListGroup>
    );
  }

  return (
    <Row className={'mt-4'}>
      {rides.map(ride => (
        <Col key={ride._id} xs={12} md={6} className="mb-4">
          <Card className="mb-3 ">
          <Card.Body>
            <Card.Title>{ride.parentName}</Card.Title>
            <Card.Text>Destination: {'Community Middle School'}</Card.Text>
            <Card.Text>Address: {ride.neighborhood}</Card.Text>
            <Card.Text>Available Pick-Up Days: {ride.availablePickUpDays.join(", ")}</Card.Text>
            <Card.Text>Seats available: {ride.numberOfSeatsInCar}</Card.Text>
            {
              ride.numberOfSeatsInCar > 0 ?
                <Button
                  className={'btnStyleA btnRadius25'}
                  onClick={() => rideRequestHandler(ride._id)}>
                  Request for ride
                </Button> :
                <Button
                  className={'btnDisabled btnRadius25'}
                  disabled={true}>
                  No seats available
                </Button>
            }
          </Card.Body>
        </Card>
        </Col>
      ))}
    </Row>
  );

}

export default RideList;
