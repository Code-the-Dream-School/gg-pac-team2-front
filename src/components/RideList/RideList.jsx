import { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import Button from "../Button.jsx";

const RideList = ({ rides }) => {

  const [selectedRide, setSelectedRide] = useState(null);

  const handleSelectRide = (rideId) => {
    setSelectedRide(rideId);
    //todo: API request
  };

  return (
    <ListGroup>
      {rides.map(ride => (
        <Card key={ride._id} className="mb-3">
          <Card.Body>
            <Card.Title>{ride.parentName}</Card.Title>
            <Card.Text>Address: {ride.departure}</Card.Text>
            <Card.Text>Destination: {ride.destination}</Card.Text>
            <Card.Text>Time: {ride.departureTime}</Card.Text>
            <Card.Text>Seats available: {ride.numberOfSeatsInCar}</Card.Text>
            <Button
              className={'btnStyleA btnRadius25'}
              onClick={() => handleSelectRide(ride.id)}
              disabled={ride.numberOfSeatsInCar === 0}
            >
              {ride.numberOfSeatsInCar > 0 ? "Request for ride" : "No seats available"}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </ListGroup>
  );

}

export default RideList;