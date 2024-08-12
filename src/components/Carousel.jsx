import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Carousel1() {
  return (
    <>
      <div className="text-center mt-2">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <Carousel.Caption></Carousel.Caption>
            <img src="../../images/carousel1.png" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../images/carousel2.png" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../images/carousel3.png" alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

function Carousel2() {
  return (
    <>
      <div className="text-center mt-2">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <Carousel.Caption></Carousel.Caption>
            <img src="../../images/say1.png" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../images/say2.png" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../images/say3.png" alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export { Carousel1, Carousel2 };
