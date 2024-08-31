import Menu from "../../components/Menu.jsx";
import Footer from "../../components/Footer.jsx";
import {Alert, Container} from "react-bootstrap";
import RideList from "../../components/RideList/RideList.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getProfiles} from "../../services/api.js";

const Rides = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('authToken');
    if (token) {

      const fetchProfiles = async () => {
        try {
          const userList = await getProfiles(token);
          setProfiles(userList);
        } catch (error) {
          setError('Error fetching users: ' + error.message);
        }
      };
      fetchProfiles();

    } else {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <Menu />

      <Container>
        <h1 className={'mt-5'}>Find a ride</h1>
        {error &&  <Alert variant={'danger'} className={'mt-3'}>{error}</Alert>}
        <RideList rides={profiles} />
      </Container>

      <Footer />
    </div>
  );
}

export default Rides;