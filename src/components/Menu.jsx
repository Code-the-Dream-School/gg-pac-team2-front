import menuStyles from "../styles/menu.module.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="p-4 shadow row">
          <div className="col-8 m-auto ps-5">
            <Link to={"/"}>
              <img src="../../images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="col-2 text-end m-auto ps-2">
            <Link to={"/login"}>
              <Button className={"loginBtn btnRadius25 w-75"}>LOGIN</Button>
            </Link>
          </div>
          <div className="col-2 m-auto">
            <Button className={"demoBtn btnRadius25 w-75"}>JOIN</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
