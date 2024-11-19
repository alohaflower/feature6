import {
    useEffect,
    useState,
  } from "react";
import { Link } from "react-router-dom";
import { getAllPatterns } from "../../Service/Pattern.js";
import MainList from "./MainList.js";
import { checkUser, logoutUser } from "../Auth/AuthService";
import Star from '@mui/icons-material/Star';

  
  const Main = () => {
    const [patterns, setPatterns] = useState([]);
  
    useEffect(() => {
      getAllPatterns().then((patterns) => {
        setPatterns(patterns);
      });
    }, []);

    const onSubmitHandler = (e) => {
      console.log('submit handler');
      if (!checkUser()) {
        alert("You are not logged in.");
      } else {
        logoutUser();
        alert("You have been logged out.");
      }
    };
  
    return (
        <div>
        <Star></Star>
        <h1>Feature 6</h1>
        This is the stateful parent component.
        <hr></hr>

        <Link to="/register">
          <button>Register</button>
        </Link>
        <br />
        <br />
        <Link to="/login">
          <button>Login</button>
        </Link>
        <br />
        <br />
        <button onClick={onSubmitHandler}>
          Logout
        </button>

        <MainList patterns={patterns} />
      </div>
    );
  };
  
  export default Main;
  