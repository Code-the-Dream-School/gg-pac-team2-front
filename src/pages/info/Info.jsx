import Button from '../../components/Button';
import infoPageStyle from './info.module.css';
import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Info() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 justify-content-center m-auto mt-2">
          <div className={`p-2 mt-1 mb-4 rounded-5`}>
            <div className={infoPageStyle.content}>
              <div className={infoPageStyle.contentInner}>
                <h1
                  data-aos="fade-down"
                  className={`monsFont text-center ${infoPageStyle.bigText} ${infoPageStyle.lSpace15} ${infoPageStyle.darkBlueColor}`}
                >
                  <strong>
                    We're setting the bar{' '}
                    <span className={infoPageStyle.lightBlueColor}>
                      above and beyond{' '}
                    </span>
                    for safe youth transportation solutions.
                  </strong>
                </h1>
                <div className="container mt-5">
                  <div className="row justify-content-center text-center">
                    <div className="col-3">
                      <h1
                        className={`${infoPageStyle.bigText} ${infoPageStyle.darkBlueColor}`}
                      >
                        <strong>
                          <CountUp
                            start={0}
                            end={10}
                            duration={3}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                          >
                            {({ countUpRef }) => (
                              <span ref={countUpRef} />
                            )}
                          </CountUp>
                          K+
                        </strong>
                      </h1>
                      <h5 className={infoPageStyle.lightBlueColor}>
                        <strong>STUDENTS SERVED</strong>
                      </h5>
                    </div>
                    <div className="col-3 border-start">
                      <h1
                        className={`${infoPageStyle.bigText} ${infoPageStyle.darkBlueColor}`}
                      >
                        <strong>
                          <CountUp
                            start={0}
                            end={3}
                            duration={4}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                          >
                            {({ countUpRef }) => (
                              <span ref={countUpRef} />
                            )}
                          </CountUp>
                          K+
                        </strong>
                      </h1>
                      <h5 className={infoPageStyle.lightBlueColor}>
                        <strong>RIDES COMPLETED</strong>
                      </h5>
                    </div>
                    <div className="col-3 border-start">
                      <h1
                        className={`${infoPageStyle.bigText} ${infoPageStyle.darkBlueColor}`}
                      >
                        <strong>
                          <CountUp
                            start={0}
                            end={500}
                            duration={1}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                          >
                            {({ countUpRef }) => (
                              <span ref={countUpRef} />
                            )}
                          </CountUp>
                          +
                        </strong>
                      </h1>
                      <h5 className={infoPageStyle.lightBlueColor}>
                        <strong>SCHOOL SERVED</strong>
                      </h5>
                    </div>
                  </div>
                  <br />
                  <hr />
                </div>
              </div>
            </div>
            <h1
              className={`text-center mt-5 ${infoPageStyle.bigText} ${infoPageStyle.darkBlueColor}`}
            >
              <strong>How It Works</strong>
            </h1>
            <div className="container">
              <div className="row justify-content-center align-items-center mt-5">
                <div className="col-5 " data-aos="fade-right">
                  <img
                    src="../../images/step1.jpg"
                    alt="step1"
                    className="img-fluid"
                  />
                </div>
                <div data-aos="fade-left" className="col-3 ps-5">
                  <h3 className={infoPageStyle.lightBlueColor}>
                    <strong>STEP 1</strong>
                  </h3>
                  <h5>Join School Carpool</h5>
                  <h5>with easy & simple</h5>
                  <h5>steps by providing</h5>
                  <h5>your basic information</h5>
                  <h5>complete profile latter</h5>
                </div>
              </div>

              <div className="row justify-content-center align-items-center pt-5 mt-5">
                <div className="col-3" data-aos="fade-right">
                  <h3 className={infoPageStyle.lightBlueColor}>
                    <strong>STEP 2</strong>
                  </h3>
                  <h5>Search in your area</h5>
                  <h5>determine school</h5>
                  <h5>find Carpool member</h5>
                  <h5>who offer the service</h5>
                  <h5>contact the member</h5>
                </div>
                <div className="col-5" data-aos="fade-left">
                  <img
                    src="../../images/step2.png"
                    alt="step2"
                    className="img-fluid"
                  />
                </div>

                <div className="row justify-content-center align-items-center mt-5">
                  <div className="col-5" data-aos="fade-up-right">
                    <img
                      src="../../images/step3.png"
                      alt="step1"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-3 ps-5" data-aos="fade-up-left">
                    <h3 className={infoPageStyle.lightBlueColor}>
                      <strong>STEP 3</strong>
                    </h3>
                    <h5>Consider win-win</h5>
                    <h5>participate in providing</h5>
                    <h5>a service on other days</h5>
                    <h5>Finally, you may need</h5>
                    <h5>to drive students</h5>
                    <h5>one or two days a week</h5>
                  </div>
                </div>
              </div>
              <h1
                className={`text-center mt-5 pt-5 ${infoPageStyle.bigText} ${infoPageStyle.darkBlueColor}`}
              >
                <strong>Partnerships That Drive Success</strong>
              </h1>
              <div className="text-center mt-5">
                <img
                  src="../../images/partners.png"
                  alt="partners"
                  width="500px"
                />
              </div>
              <div className="text-center mt-5 pt-5">
                <img src="../../images/corp.png" alt="partners" />
              </div>
              <div
                className={`text-center mt-5 pt-5 ${infoPageStyle.darkBlueColor}`}
              >
                <div>
                  Contact us today to join the thousands of district
                  communities,
                </div>
                <div>
                  schools, non-profits, and government agencies that
                  we support through safe,
                </div>
                <div>reliable student transportation.</div>
              </div>
              <div className="text-center mt-5">
                <Link to={'/register'}>
                  <Button className={`btnStyleA btnRadius25`}>
                    Join Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <h1
        className={`hideHeader text-center mt-5 ${infoPageStyle.bigText} ${infoPageStyle.darkBlueColor}`}
      >
        <strong>In Their Words</strong>
      </h1> */}
    </div>
  );
}

export default Info;
