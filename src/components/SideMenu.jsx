import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../services/api";
import mainLogo from "../../images/logo.png";
import { terminate } from "../util";

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
    logOut();
    terminate();
    navigate("/login")
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
                font-weight: 500
            }

            .sidenav div:hover {
                color: darkBlue;
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

      <div ref={openNavRef} className="sidenav shadow">
        <div>
          <img src={mainLogo} alt="" />
        </div>
        <div href="#" className="closebtn" onClick={closeNav}>
          &times;
        </div>
        <div
          className="mt-4"
          onClick={() => {
            navigate("/profile");
            navigate(0);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368">
            <path d="M600-120h240v-33q-25-23-56-35t-64-12q-33 0-64 12t-56 35v33Zm120-120q25 0 42.5-17.5T780-300q0-25-17.5-42.5T720-360q-25 0-42.5 17.5T660-300q0 25 17.5 42.5T720-240ZM480-480Zm2-140q-58 0-99 41t-41 99q0 48 27 84t71 50q0-23 .5-44t8.5-38q-14-8-20.5-22t-6.5-30q0-25 17.5-42.5T482-540q15 0 28.5 7.5T533-512q11-5 23-7t24-2h36q-13-43-49.5-71T482-620ZM370-80l-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-85 65H696q-1-5-2-10.5t-3-10.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q24 25 54 42t65 22v184h-70Zm210 40q-25 0-42.5-17.5T520-100v-280q0-25 17.5-42.5T580-440h280q25 0 42.5 17.5T920-380v280q0 25-17.5 42.5T860-40H580Z" />
          </svg>
          &nbsp; My Profile
        </div>
        <div
          onClick={() => {
            navigate("/rides");
            navigate(0);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5f6368">
            <path d="M213.33-202.67v49.34q0 14.16-9.58 23.75Q194.17-120 180-120h-26.67q-14.16 0-23.75-9.58-9.58-9.59-9.58-23.75V-476l84.67-250.67Q210-742 222.83-751q12.84-9 29.17-9h456q16.33 0 29.17 9 12.83 9 18.16 24.33L840-476v322.67q0 14.16-9.58 23.75-9.59 9.58-23.75 9.58h-27.34q-14.33 0-23.5-9.58-9.16-9.59-9.16-23.75v-49.34H213.33Zm-.66-340h534.66l-50.66-150.66H263.33l-50.66 150.66Zm-26 66.67v206.67V-476Zm103.84 160q23.82 0 39.99-16.33 16.17-16.34 16.17-39.67 0-23.89-16.34-40.61-16.33-16.72-39.66-16.72-23.89 0-40.61 16.67-16.73 16.68-16.73 40.5 0 23.83 16.68 39.99Q266.69-316 290.51-316ZM670-316q23.89 0 40.61-16.33 16.72-16.34 16.72-39.67 0-23.89-16.67-40.61-16.68-16.72-40.5-16.72-23.83 0-39.99 16.67Q614-395.98 614-372.16q0 23.83 16.33 39.99Q646.67-316 670-316Zm-483.33 46.67h586.66V-476H186.67v206.67Z" />
          </svg>
          &nbsp;Rides
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368">
            <path d="M480-124.67q-38 0-65.67-27.66Q386.67-180 386.67-218t27.66-65.67Q442-311.33 480-311.33t65.67 27.66Q573.33-256 573.33-218t-27.66 65.67Q518-124.67 480-124.67ZM239.33-353.33l-70-70.67q66.34-66.33 143.84-101.17Q390.67-560 480-560q89.33 0 166.83 35 77.5 35 143.84 101.67l-70 70q-55.34-55.34-116-81Q544-460 480-460t-124.67 25.67q-60.66 25.66-116 81ZM70-522.67l-70-70q92.67-94.66 216-151Q339.33-800 480-800q140.67 0 264 56.33 123.33 56.34 216 151l-70 70q-84.33-81.66-187.83-129.5Q598.67-700 480-700q-118.67 0-222.17 47.83Q154.33-604.33 70-522.67Z" />
          </svg>
          &nbsp;My Network
        </div>
        <hr />
        <div onClick={handleSignOut}>
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#5f6368">
            <path d="M186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h292.66v66.67H186.67v586.66h292.66V-120H186.67Zm470.66-176.67-47-48 102-102H360v-66.66h351l-102-102 47-48 184 184-182.67 182.66Z" />
          </svg>
          &nbsp;Sign Out
        </div>
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
