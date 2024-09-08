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
            <Card.Text>Destination: {'Community Middle School'}</Card.Text>
            <Card.Text>Address: {ride.neighborhood}</Card.Text>
            <Card.Text>Available Pick-Up Days: {ride.availablePickUpDays.join(", ")}</Card.Text>
            <Card.Text>Seats available: {ride.numberOfSeatsInCar}</Card.Text>
            {
              ride.numberOfSeatsInCar > 0 ?
                <Button
                  className={'btnStyleA btnRadius25'}
                  onClick={() => handleSelectRide(ride._id)}>
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
      ))}
    </ListGroup>
  );

}

export default RideList;
