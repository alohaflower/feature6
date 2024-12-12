import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
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
    
    const [prices, setPrices] = useState([]);

    const handlePriceChange=(event,value)=> {
      const newFilteredPatterns = patterns.filter((pattern) =>
        pattern.cost < Number(value.substring(3,5)) && pattern.cost > Number(value.substring(0,2))
      );
      console.log(value)
      console.log(Number(value.substring(0,2)))
      console.log(Number(value.substring(3,5)))
      setFilteredPatterns(newFilteredPatterns);
    }
    


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
        </div>
        {/* Filter Prices */}



        <div>
        <p>Filter by Price</p>
        <ToggleButtonGroup
           onChange={handlePriceChange}
           exclusive
           aria-label="Prices Filter"
                >
            <ToggleButton value="10-20">$10-20</ToggleButton>
            <ToggleButton value="21-30">$21-30</ToggleButton>
            <ToggleButton value="31-40">$31-40</ToggleButton>
            <ToggleButton value="41-50">$41-50</ToggleButton>
        </ToggleButtonGroup>
        </div>
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
