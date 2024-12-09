import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styles from './main.module.css'; 

const MainList = ({ patterns }) => {
    const [filteredPatterns, setFilteredPatterns] = useState(patterns);
    useEffect(() => {
      setFilteredPatterns(patterns);
    }, [patterns]); 

    const handleInputChange = (event, value) => {
      const newFilteredPatterns = patterns.filter((pattern) =>
        pattern.animal.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPatterns(newFilteredPatterns);
    }; 

    return (
      <div className={styles.ListStyle}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Autocomplete
          disablePortal
          options={patterns.map((pattern) => pattern.animal)}
          sx={{ width: 300 }}
          onInputChange={handleInputChange}
          renderInput={(params) => <TextField {...params} label="Animals" />} 
        /> 
        <br></br>
        </div>
        {/* <p className={styles.UnlockFont}>Items for Sale</p> */}
        <ul>
        {filteredPatterns.map(
          (pattern) =>
            <li key={pattern.id}>
              <div>
                <Link to={pattern.id} className={styles.PurpleFont}>{pattern.humanName} the {pattern.animal}</Link>
                <span>, ${pattern.cost}</span>
              </div>
              <span>{pattern.description} </span>
              <div>
                <img
                  src={require(`../../Images/${pattern.imgName}.jpeg`)}
                  width="225"
                  height="300"
                />
              </div>
            </li>
        )}
      </ul>
    </div>
    );
};

export default MainList;
