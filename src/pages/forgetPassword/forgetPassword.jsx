import loginPageStyles from "./forgetPassword.module.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { login } from "../../services/api.js";
import { sendPasswordResetLink } from "../../services/api.js";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await sendPasswordResetLink(email); // Call API to send reset link
      
      // If response is successful, set the success message
      if (response.success) {
        setSuccess(response.message);
        setError("");
      } else {
        setError(response.message || "Failed to send email. Please try again.");
        setSuccess("");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      setSuccess("");
    }
  };

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
              <div className={`col-12 mt-5 ms-3 ${loginPageStyles.bigText}`}>
                Forget Password
              </div>
              <div className="col-8 text-center mt-5 position-relative">
                <Input
                  controlClass={"inputStyleA"}
                  placeholder={"Enter Valid Email ID"}
                  label={""}
                  type={"text"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div
                  className="position-absolute"
                  style={{ top: "12px", left: "35px", zIndex: "2" }}
                >
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
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-340.000000, -922.000000)"
                          fill="#afafaf"
                        >
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
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
                {error && (
                  <Alert variant={"danger"} className={"mt-3"}>
                    {error}
                  </Alert>
                )}
                {success && (
                  <Alert variant={"success"} className={"mt-3"}>
                    {success}
                  </Alert>
                )}
                <div className="mt-4 text-start">
                  <Link to={"/"}>
                    <Button
                      className={`btnStyleA btnRadius25`}
                      onClick={handleSubmit}
                    >
                      Send Email
                    </Button>
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
};

export default ForgetPassword;
