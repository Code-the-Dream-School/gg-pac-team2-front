import { Carousel1, Carousel2 } from "../../components/Carousel";
import { getCredentials } from "../../util";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import Info from "../info/Info";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/common.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getCredentials().authToken && !getCredentials().authUser) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <>
      <Menu />
      <Banner />
      <Carousel1 />
      <Info />
      <Carousel2 />
      <Footer />
    </>
  );
};

export default Home;
