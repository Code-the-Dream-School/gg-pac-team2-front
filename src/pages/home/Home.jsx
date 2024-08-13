import { Carousel1, Carousel2 } from "../../components/Carousel";
import Footer from "../../components/Footer";
import Info from "../info/Info";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/common.css";

const Home = () => {
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
