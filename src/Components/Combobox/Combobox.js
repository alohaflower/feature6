import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Combobox({ patterns }) {
  return (
    <Autocomplete
      disablePortal
      options={patterns.map((pattern) => pattern.animal)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Animals" />}
    /> 
  );
} 