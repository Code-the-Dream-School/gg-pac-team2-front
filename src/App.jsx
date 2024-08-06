import React, { useState, useEffect } from "react";
import { getAllData } from "./util/index";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileForm from "./ProfileForm";

const URL = "http://localhost:8000/api/v1/";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const myData = await getAllData(URL);
      setMessage(myData.data);
    })();

    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <div className="container mt-5">
      <h1>Profile Page</h1>
      <h1>{message}</h1>
      <ProfileForm />
    </div>
  );
}

export default App;
