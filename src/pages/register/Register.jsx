import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import ModalA from "../../components/ModalA";
import Input from "../../components/Input";
import Button from "../../components/Button";
import registerPageStyle from "./register.module.css";
import axios from "axios";

const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const [msg, setMsg] = useState("");
  const [bodyMsg, setBodyMsg] = useState("");

  const [values, setValues] = useState({
    parentName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { parentName, email, password, passwordConfirm } = values;
    const registerNewUser = { parentName, email, password };

    if (password !== passwordConfirm) {
      setMsg("Password confirmation didn't match!");
      setBodyMsg("Please check your password and try again");
      setShowModal(true);
      return;
    }
    try {
      const data = await axios.post(
        "http://localhost:8000/api/v1/auth/register",
        registerNewUser
      );
      console.log(data);
    } catch (error) {
      if (error.response) {
        setMsg("Error!");
        setBodyMsg(error.response.data.message);
        setShowModal(true);
      } else if (error.request) {
        console.log(error.request);
      } else if (error.message) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <Menu />
      <div className="container-fluid h-100">
        <div className={`${registerPageStyle.bgImage} row h-100 pb-5`}>
          <div className="col-5 mt-3 bg-light offset-6 border p-5 rounded-5 shadow">
            <h4 className={`${registerPageStyle.darkBlueColor} ms-2`}>
              <strong>Start your Carpool Journey</strong>
            </h4>
            <form onSubmit={handleSubmit}>
              <Input
                className={"mt-4"}
                label={"Name"}
                type={"text"}
                inputName={"parentName"}
                placeholder={"placeholder"}
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value });
                }}
              />
              <Input
                className={"mt-4"}
                label={"Email"}
                type={"email"}
                inputName={"email"}
                placeholder={"placeholder"}
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value });
                }}
              />
              <Input
                className={"mt-4"}
                label={"Password"}
                type={"password"}
                inputName={"password"}
                placeholder={"placeholder"}
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value });
                }}
              />
              <Input
                className={"mt-4"}
                label={"Password Confirmation"}
                type={"password"}
                inputName={"passwordConfirm"}
                placeholder={"placeholder"}
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value });
                  // TODO
                  console.log(values);
                }}
              />
              <p className={`${registerPageStyle.smallFont} mt-3`}>
                By proceeding, you consent to getting text messages and emails
                from CarpoolSchool at the number and email address you provided,
                including for marketing purposes. If you no longer wish to
                receive communications from CarpoolSchool, text “STOP” to a text
                message or follow instructions to unsubscribe. Please refer to
                our <a href="">Privacy Policy</a> for more information.
              </p>
              <Button
                className={"btnStyleA btnRadius5 w-100 mt-2"}
                type={"submit"}
              >
                Sign Up
              </Button>
            </form>
            <p className={`${registerPageStyle.smallFont} mt-2 text-secondary`}>
              <strong>
                Already a Carpool Member? <Link to="/login">Sign in</Link>
              </strong>
            </p>
          </div>
        </div>
        <div className="mt-3 p-5">
          Carpooling for school offers multiple benefits, including significant
          time savings by reducing the number of days parents need to drive. It
          also promotes community bonding as families connect and collaborate on
          shared transportation duties. By cutting down on the number of
          vehicles used, carpooling reduces traffic congestion around schools,
          leading to a safer environment for students. Additionally, it lowers
          fuel costs and minimizes wear and tear on vehicles, offering financial
          savings. Carpooling also contributes to environmental sustainability
          by decreasing carbon emissions. Overall, it's a convenient,
          cost-effective, and eco-friendly solution. Carpool school's{" "}
          <a href="#">Terms of Use</a> and certain{" "}
          <a href="#">terms and conditions</a> more fully described here.
        </div>
        <div
          className={`text-center ${registerPageStyle.bigText} ${registerPageStyle.darkBlueColor}`}
        >
          <strong>Why School Carpool?</strong>
          <div className="container">
            <div className="row justify-content-center mt-3">
              <div className="col-2 text-end mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="156px"
                  viewBox="0 -960 960 960"
                  width="156px"
                  fill="#41c5e7"
                >
                  <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
                </svg>
              </div>
              <div className="col-3 text-start">
                <h3 className="mt-5 w-50">
                  <strong> Make a Difference</strong>
                </h3>
                <p className={`mt-3 ${registerPageStyle.smallText}`}>
                  Choose rides in your area that best fit your own schedule.
                </p>
              </div>
              <div className="col-2 ms-4 text-end mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="156px"
                  viewBox="0 -960 960 960"
                  width="156px"
                  fill="#41c5e7"
                >
                  <path d="M640-440 474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Zm0-112 109-107q19-19 35-40.5t16-48.5q0-22-15-37t-37-15q-14 0-26.5 5.5T700-778l-60 72-60-72q-9-11-21.5-16.5T532-800q-22 0-37 15t-15 37q0 27 16 48.5t35 40.5l109 107ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Zm520-546Z" />
                </svg>
              </div>
              <div className="col-3 text-start">
                <h3 className="mt-5 w-50">
                  <strong> Set your availability</strong>
                </h3>
                <p className={`mt-3 ${registerPageStyle.smallText}`}>
                  Choose rides in your area that best fit your own schedule.
                </p>
              </div>

              <div className="col-2 text-end mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="156px"
                  viewBox="0 -960 960 960"
                  width="156px"
                  fill="#41c5e7"
                >
                  <path d="M612-306 450-468v-202h60v178l144 144-42 42Zm-495-1q-15-34-24-70t-12-73h60q2 29 10 57.5t19 55.5l-53 30ZM81-510q3-38 12-74t25-70l52 30q-12 27-19.5 56t-9.5 58H81Zm173 363q-32-22-59.5-49T146-255l53-30q17 25 38.5 46.5T284-200l-30 53Zm-55-529-52-30q21-32 48-59t59-48l30 53q-25 17-46.5 38T199-676ZM450-81q-38-3-74-12t-70-25l30-52q27 12 56 19.5t58 9.5v60ZM336-790l-30-52q34-16 70-25t74-12v60q-29 2-58 9.5T336-790ZM510-81v-60q29-2 58-9.5t56-19.5l30 52q-34 16-70 25t-74 12Zm114-709q-27-12-56-19.5t-58-9.5v-60q38 3 74 11.5t70 25.5l-30 52Zm82 643-30-53q25-17 46-38t38-46l53 30q-21 32-48 59t-59 48Zm54-529q-17-25-38-46t-46-38l30-53q32 21 58.5 48t47.5 59l-52 30Zm59 166q-2-30-10-58.5T789-624l53-30q17 34 25.5 70t11.5 74h-60Zm23 204-52-30q12-27 19.5-56t9.5-58h60q-3 38-12 74t-25 70Z" />
                </svg>
              </div>
              <div className="col-3 text-start">
                <h3 className="mt-5 w-50">
                  <strong> Make a Difference</strong>
                </h3>
                <p className={`mt-3 ${registerPageStyle.smallText}`}>
                  Choose rides in your area that best fit your own schedule.
                </p>
              </div>
              <div className="col-2 ms-4 text-end mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="156px"
                  viewBox="0 -960 960 960"
                  width="156px"
                  fill="#41c5e7"
                >
                  <path d="M200-204v54q0 12.75-8.62 21.37Q182.75-120 170-120h-20q-12.75 0-21.37-8.63Q120-137.25 120-150v-324l85-256q5-14 16.5-22t26.5-8h464q15 0 26.5 8t16.5 22l85 256v324q0 12.75-8.62 21.37Q822.75-120 810-120h-21q-13 0-21-8.63-8-8.62-8-21.37v-54H200Zm3-330h554l-55-166H258l-55 166Zm-23 60v210-210Zm105.76 160q23.24 0 38.74-15.75Q340-345.5 340-368q0-23.33-15.75-39.67Q308.5-424 286-424q-23.33 0-39.67 16.26Q230-391.47 230-368.24q0 23.24 16.26 38.74 16.27 15.5 39.5 15.5ZM675-314q23.33 0 39.67-15.75Q731-345.5 731-368q0-23.33-16.26-39.67Q698.47-424 675.24-424q-23.24 0-38.74 16.26-15.5 16.27-15.5 39.5 0 23.24 15.75 38.74Q652.5-314 675-314Zm-495 50h600v-210H180v210Z" />
                </svg>
              </div>
              <div className="col-3 text-start">
                <h3 className="mt-5 w-50">
                  <strong> Set your availability</strong>
                </h3>
                <p className={`mt-3 ${registerPageStyle.smallText}`}>
                  Choose rides in your area that best fit your own schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <ModalA
        showModal={showModal}
        setShowModal={setShowModal}
        msg={msg}
        bodyMsg={bodyMsg}
      />
    </>
  );
};

export default Register;
