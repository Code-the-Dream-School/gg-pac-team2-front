import SideMenu from "../../components/SideMenu.jsx";
import {Link, useNavigate} from "react-router-dom";
import {Alert, ButtonGroup, Container} from "react-bootstrap";
import RideList from "../../components/RideList/RideList.jsx";
import Footer from "../../components/Footer.jsx";
import {useEffect, useState} from "react";
import {getCredentials} from "../../util/index.js";
import {getProfiles, getReceivedRequests, sendRideRequest} from "../../services/api.js";
import ReceivedRequestList from "../../components/ReceivedRequestList/ReceivedRequestList.jsx";
import Button from "../../components/Button.jsx";

// Function to get the name of the day of the week
const getTodayDay = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay(); // 0 - Sunday, 6 - Saturday
  return days[today];
};
const ReceivedRequests = () => {

  const navigate = useNavigate();
  const [receivedRequests, setReceivedRequests] = useState([]);
  const [alertMsg, setAlertMsg] = useState({
    variant: "",
    msg: ""
  });
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [selectedDay, setSelectedDay] = useState("");

  useEffect(() => {
    const today = getTodayDay();
    // If today is a day off (Saturday or Sunday), Monday is active
    const defaultDay = today === "Saturday" || today === "Sunday" ? "Monday" : today;
    setSelectedDay(defaultDay);

    // Retrieve the token from localStorage
    const credentials = getCredentials();
    if (credentials.token) {
      const fetchProfiles = async () => {
        try {
          const receivedRequestList = await getReceivedRequests(credentials.token);
          setReceivedRequests(receivedRequestList);
        } catch (error) {
          setAlertMsg({
            variant: "danger",
            msg: "Error fetching users: " + error.message
          });
        }
      };
      fetchProfiles();
    } else {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (receivedRequests.length > 0 && selectedDay) {
      const filtered = receivedRequests.filter((profile) => profile.requestedPickUpDays.includes(selectedDay));
      setFilteredProfiles(filtered);
    }
  }, [receivedRequests, selectedDay]);

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const rideRequestHandler = (profileId) => {
    try {
      const response = sendRideRequest(profileId, selectedDay);
      setAlertMsg({
        variant: "success",
        msg: "Your request has been successfully completed. Please wait for confirmation."
      })
      window.scrollTo(0, 0);
    } catch (error) {
      setAlertMsg({
        variant: "danger",
        msg: error.message
      });
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="p-4 shadow row">
          <div className="col-9">
            <SideMenu/>
            &nbsp;
            <Link to={"/"}>
              <img src="../../images/logo.png" alt="logo"/>
            </Link>
          </div>
        </div>

        <Container className={"mb-4"}>
          <h1 className={"mt-4 text-center"}>Received Ride Requests</h1>
          {alertMsg.msg && (
            <Alert variant={alertMsg.variant} className={"mt-4"}>
              {alertMsg.msg}
            </Alert>
          )}

          {/*Days of week switcher*/}
          <ButtonGroup className={"d-flex flex-wrap mt-4"}>
            {daysOfWeek.map((day) => (
              <Button
                key={day}
                className={"flex-grow-1 " + (selectedDay === day ? "btnStyleA" : "btnStyleA-outline")}
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </Button>
            ))}
          </ButtonGroup>

          <ReceivedRequestList receivedRequests={filteredProfiles} rideRequestHandler={rideRequestHandler}/>
        </Container>

        <Footer/>
      </div>
    </>
  );
}

export default ReceivedRequests;
