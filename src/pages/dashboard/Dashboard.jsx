import { Link } from "react-router-dom";
import { getCredentials } from "../../util";
import netImage from "../../../images/net.png";
import SideMenu from "../../components/SideMenu";

const Dashboard = () => {
  return (
    <>
      <style type="text/css">
        {`

      `}
      </style>
      <div className="container-fluid">
        <div className="p-4 shadow row">
          <div className="col-9">
            <SideMenu />&nbsp;
            <Link to={"/"}>
              <img src="../../images/logo.png" alt="logo" />
            </Link>
          </div>
        </div>
        <h1 className="text-center mt-5" style={{ fontWeight: 900, fontSize: "5rem", color: "#1a4a7a" }}>
          DASHBOARD
        </h1>
        <div className="text-center">
          <img src={netImage} width="1200px" />
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Dashboard;
