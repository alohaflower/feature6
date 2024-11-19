import React from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Components/Auth/AuthService.js";
import MainDetail from "../Components/Main/MainDetail.js";

const ProtectedRoute = ({ element: Component}) => {
    console.log("element: ", Component);
    const navigate = useNavigate();
    const goBackHandler = () => {
      navigate("/login");
    };
    if (checkUser()) {
      return <MainDetail />;
    } else {
      return (
        <div>
          {/* Will send to login if pressed */}
          <p>Unauthorized!</p> <button onClick={goBackHandler}>Go to Login.</button>
        </div>
      );
    }
  };
  
  export default ProtectedRoute;
  