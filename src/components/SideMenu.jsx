import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SideMenu = () => {
  const openNavRef = useRef("");

  const navigate = useNavigate();

  const openNav = () => {
    openNavRef.current.style.left = "0";
  };

  const closeNav = () => {
    openNavRef.current.style.left = "-310px";
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    axios.post("/api/v1/auth/logout")
  };

  return (
    <>
      <style>
        {`
            .sidenav {
                height: 100%;
                width: 300px;
                position: fixed;
                z-index: 1;
                top: 0;
                left: -310px;
                background-color: white;
                overflow-x: hidden;
                transition: 0.5s;
                padding-top: 60px;
            }

            .sidenav div {
                padding: 8px 8px 8px 32px;
                text-decoration: none;
                font-size: 25px;
                color: #818181;
                display: block;
                transition: 0.3s;
                cursor:pointer;                
            }

            .sidenav a:hover {
                color: black;
            }

            .sidenav .closebtn {
                position: absolute;
                top: 0;
                right: 25px;
                font-size: 36px;
                margin-left: 50px;
            }

            @media screen and (max-height: 450px) {
                .sidenav {padding-top: 15px;}
                .sidenav a {font-size: 18px;}
            }
        `}
      </style>

      <div ref={openNavRef} className="sidenav">
        <div href="#" className="closebtn" onClick={closeNav}>
          &times;
        </div>
        <div
          onClick={() => {
            navigate("/profile");
            navigate(0);
          }}
        >
          My Profile
        </div>
        <div
          onClick={() => {
            navigate("/rides");
            navigate(0);
          }}
        >
          Rides
        </div>
        <div>My Network</div>
        <hr />
        <div onClick={handleSignOut}>Sign Out</div>
      </div>
      <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#5f6368">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </span>
    </>
  );
};

export default SideMenu;
