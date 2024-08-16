import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="p-4 shadow row">
          <div className="col-3 m-auto ps-5">
            <Link to={"/"}>
              <img src="../../images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="col-9">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
