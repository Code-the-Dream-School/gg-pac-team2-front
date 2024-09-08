import loginPageStyles from "./resetPassword.module.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { resetPassword } from "../../services/api.js";

function ResetPassword() {
  const { token, id } = useParams(); // Get token from URL
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await resetPassword(token, id, password); // Call reset password API
      if (response.success) {
        setSuccess(response.message);
        setError("");
        setTimeout(() => {
          navigate("/login"); // Redirect to login after success
        }, 3000);
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
                Reset Password
              </div>
              <div className="col-8 text-center mt-5 position-relative">
                <Input
                  controlClass={"inputStyleA"}
                  placeholder={"New Password"}
                  label={""}
                  type={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="position-absolute"
                  style={{ top: "12px", left: "35px", zIndex: "2" }}
                >
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
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
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
              </div>

              <div className="col-8 text-center mt-3 position-relative">
                <Input
                  controlClass={"inputStyleA"}
                  placeholder={"Confirm Password"}
                  label={""}
                  type={"password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div
                  className="position-absolute"
                  style={{ top: "12px", left: "35px", zIndex: "2" }}
                >
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
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
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
                      Reset Password
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
}

export default ResetPassword;
