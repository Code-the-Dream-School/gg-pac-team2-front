import loginPageStyles from "./login.module.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { login } from "../../services/api.js";
import { setCredentials, getCredentials } from "../../util";

function LoginForm() {
  const emailInputRef = useRef(null);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(email, password);
      setCredentials(response.token, response.user.name);
      navigate("/dashboard");
      navigate(0);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (getCredentials().token && getCredentials().user) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <>
      <div className="container-fluid m-0 h-100 overflow-hidden">
        <div className={`row h-100`}>
          <div className={`${loginPageStyles.bgImage} col-6`}> </div>
          <div className={`col-6 p-5`}>
            <div className="row ms-5 pb-4">
              <div className="col-12">
                <Link to={"/"}>
                  <img src="../../images/logo.png" alt="logo" />
                </Link>
              </div>
              <div className={`col-12 mt-5 ms-3 ${loginPageStyles.bigText}`}>Sign In</div>
              <div className="col-8 text-center mt-5 position-relative">
                <Input
                  controlClass={"inputStyleA"}
                  placeholder={"Email"}
                  label={""}
                  type={"text"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="position-absolute" style={{ top: "12px", left: "35px", zIndex: "2" }}>
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 -2.5 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -922.000000)" fill="#afafaf">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path
                              d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z"
                              id="email-[#41c5e7]"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>

              <div className="col-8 text-center mt-3 position-relative">
                <Input
                  controlClass={"inputStyleA"}
                  placeholder={"Password"}
                  label={""}
                  type={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="position-absolute" style={{ top: "12px", left: "35px", zIndex: "2" }}>
                  <svg
                    fill="#afafaf"
                    height="24px"
                    width="24px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <g>
                          <path d="M461.913,289.391H50.087C22.468,289.391,0,311.859,0,339.478v100.174c0,27.619,22.468,50.087,50.087,50.087h411.826 c27.619,0,50.087-22.468,50.087-50.087V339.478C512,311.859,489.532,289.391,461.913,289.391z M157.847,401.369 c6.521,6.521,6.521,17.087,0,23.609c-3.261,3.261-7.533,4.892-11.804,4.892c-4.271,0-8.544-1.631-11.804-4.892l-11.805-11.804 l-11.804,11.804c-3.261,3.261-7.533,4.892-11.804,4.892s-8.544-1.631-11.804-4.892c-6.521-6.521-6.521-17.087,0-23.609 l11.803-11.804l-11.804-11.804c-6.521-6.521-6.521-17.087,0-23.609c6.521-6.521,17.087-6.521,23.609,0l11.804,11.804 l11.804-11.804c6.521-6.521,17.087-6.521,23.609,0c6.521,6.521,6.521,17.087,0,23.609l-11.804,11.804L157.847,401.369z M291.413,401.369c6.521,6.521,6.521,17.087,0,23.609c-3.261,3.261-7.533,4.892-11.804,4.892c-4.271,0-8.544-1.631-11.804-4.892 L256,413.174l-11.804,11.804c-3.261,3.261-7.533,4.892-11.804,4.892c-4.271,0-8.544-1.631-11.804-4.892 c-6.521-6.521-6.521-17.087,0-23.609l11.803-11.804l-11.804-11.804c-6.521-6.521-6.521-17.087,0-23.609 c6.521-6.521,17.087-6.521,23.609,0L256,365.956l11.804-11.804c6.521-6.521,17.087-6.521,23.609,0 c6.521,6.521,6.521,17.087,0,23.609l-11.804,11.804L291.413,401.369z M424.978,401.369c6.521,6.521,6.521,17.087,0,23.609 c-3.261,3.261-7.533,4.892-11.804,4.892s-8.544-1.631-11.804-4.892l-11.805-11.804l-11.804,11.804 c-3.261,3.261-7.533,4.892-11.804,4.892s-8.544-1.631-11.804-4.892c-6.521-6.521-6.521-17.087,0-23.609l11.803-11.804 l-11.804-11.804c-6.521-6.521-6.521-17.087,0-23.609c6.521-6.521,17.087-6.521,23.609,0l11.804,11.804l11.804-11.804 c6.521-6.521,17.087-6.521,23.609,0c6.521,6.521,6.521,17.087,0,23.609l-11.804,11.804L424.978,401.369z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M339.478,122.435h-16.696V89.043c0-36.826-29.956-66.783-66.783-66.783s-66.783,29.956-66.783,66.783v33.391h-16.696 c-9.217,0-16.696,7.479-16.696,16.696v100.174c0,9.217,7.479,16.696,16.696,16.696h166.957c9.217,0,16.696-7.479,16.696-16.696 V139.13C356.174,129.913,348.695,122.435,339.478,122.435z M289.391,122.435h-66.783V89.043c0-18.413,14.978-33.391,33.391-33.391 s33.391,14.978,33.391,33.391V122.435z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                {error && (
                  <Alert variant={"danger"} className={"mt-3"}>
                    {error}
                  </Alert>
                )}
                <div className="mt-4 text-start">
                  <Link to={"/"}>
                    <Button className={`btnStyleA btnRadius25`} onClick={handleSubmit}>
                      Sign In
                    </Button>
                  </Link>
                  <Link className="ps-2" style={{ textDecoration: "none" }} to={"/forget-password"}>
                    <strong className={loginPageStyles.lightBlueColor}>Forget password</strong>
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-top border-secondary w-100 mt-5">
              <div className="mt-5 ms-5">
                <strong>Trouble Logging in? Contact</strong>
                <br />
                <br />
                <Link>
                  <strong>support@carpoolschool.com</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
