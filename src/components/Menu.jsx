import menuStyles from "../styles/menu.module.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="p-4 shadow row">
          <div className="col-3 m-auto ps-5">
            <Link to={"/"}>
              <img src="../../images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="col-5 m-auto">
            <div className={menuStyles.navbar}>
              <div className={menuStyles.dropdown}>
                Carpool Solution
                <div className={menuStyles.dropdownContent}>
                  <div className="row">
                    <div className="col-4">
                      <h4>
                        <strong>Overview</strong>
                      </h4>
                      <p className="text-black">
                        Discover the Benefits of Streamlined School
                        Transportation for a More Efficient Daily Routine
                      </p>
                    </div>
                    <div className="col-4">
                      <h4>
                        <strong>Convenience</strong>
                      </h4>
                      <p className="text-black">
                        Providing a convenient and personalized transportation
                        solution for busy lives.
                      </p>
                    </div>
                    <div className="col-4">
                      <h4>
                        <strong>Maximize Time</strong>
                      </h4>
                      <p className="text-black">
                        Make the most of your day with our efficient
                        transportation services, designed to streamline your
                        schedule and provide reliable, time-saving solutions.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <h4>
                        <strong>Simplified Commute</strong>
                      </h4>
                      <p className="text-black">
                        Transform your daily routine with our convenient school
                        transportation options, offering time-saving benefits
                        and a smoother commute for your family.
                      </p>
                    </div>
                    <div className="col-4">
                      <h4>
                        <strong>Reimagine Routine</strong>
                      </h4>
                      <p className="text-black">
                        Transform the way you manage school runs with our
                        flexible and efficient transportation options.
                      </p>
                    </div>
                    <div className="col-4">
                      <h4>
                        <strong> Peace of Mind</strong>
                      </h4>
                      <p className="text-black">
                        ensuring that your school commute is both efficient and
                        worry-free.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={menuStyles.dropdown}>
                Families
                <div className={menuStyles.dropdownContent}>
                  <div className="row">
                    <div className="col-6">
                      <h4>
                        <strong>Overview</strong>
                      </h4>
                      <p className="text-black">
                        Discover the Benefits of Streamlined School
                        Transportation for a More Efficient Daily Routine
                      </p>
                    </div>
                    <div className="col-6">
                      <h4>
                        <strong>Convenience</strong>
                      </h4>
                      <p className="text-black">
                        Providing a convenient and personalized transportation
                        solution for busy lives.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h4>
                        <strong>Simplified Commute</strong>
                      </h4>
                      <p className="text-black">
                        Transform your daily routine with our convenient school
                        transportation options, offering time-saving benefits
                        and a smoother commute for your family.
                      </p>
                    </div>
                    <div className="col-6">
                      <h4>
                        <strong>Reimagine Routine</strong>
                      </h4>
                      <p className="text-black">
                        Transform the way you manage school runs with our
                        flexible and efficient transportation options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={menuStyles.dropdown}>
                Region
                <div className={menuStyles.dropdownContent}>
                  <div className="row">
                    <div className="col-6">
                      <h4>
                        <strong>Overview</strong>
                      </h4>
                      <p className="text-black">
                        Discover the Benefits of Streamlined School
                        Transportation for a More Efficient Daily Routine
                      </p>
                    </div>
                    <div className="col-6">
                      <h4>
                        <strong>Convenience</strong>
                      </h4>
                      <p className="text-black">
                        Providing a convenient and personalized transportation
                        solution for busy lives.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h4>
                        <strong>Simplified Commute</strong>
                      </h4>
                      <p className="text-black">
                        Transform your daily routine with our convenient school
                        transportation options, offering time-saving benefits
                        and a smoother commute for your family.
                      </p>
                    </div>
                    <div className="col-6">
                      <h4>
                        <strong>Reimagine Routine</strong>
                      </h4>
                      <p className="text-black">
                        Transform the way you manage school runs with our
                        flexible and efficient transportation options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 text-end m-auto ps-2">
            <Link to={"/login"}>
              <Button className={"loginBtn btnRadius25 w-75"}>LOGIN</Button>
            </Link>
          </div>
          <div className="col-2 m-auto">
            <Button className={"demoBtn btnRadius25 w-75"}>GET A DEMO</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
