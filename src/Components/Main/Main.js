import {
    useEffect,
    useState,
  } from "react";
import { Link } from "react-router-dom";
import { getAllPatterns } from "../../Service/Pattern.js";
import MainList from "./MainList.js";
import { checkUser, logoutUser } from "../Auth/AuthService";
import Star from '@mui/icons-material/AutoAwesomeTwoTone';
import styles from './main.module.css'; 
import Button from '@mui/material/Button';
  
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
        <div className={styles.MuktaFont}>
          <h1 className={styles.FascinateFontBlackOut}>Feature 6</h1>

          <div>
              <Link to="/register">
                <Button variant="outlined" color="secondary">Register</Button>
              </Link>
              <Link to="/login">
                  <Button variant="outlined" color="secondary" className={styles.AddMargin}>Login</Button>
              </Link>
              <Button variant="outlined" color="secondary" onClick={onSubmitHandler}>Logout</Button>
          </div>
          <hr></hr>
          <div className={styles.FascinateFont}>
            <Star></Star><span className={styles.AddMargin}>FIND WORLD-FAMOUS PLUSHIES HERE!!!</span><Star></Star>
          </div>
          <br></br>
          <MainList patterns={patterns} />
        </div>
      );
  };
  
  export default Main;
  