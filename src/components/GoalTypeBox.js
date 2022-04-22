import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';


export default function BasicSelect() {
  const [goalType, setGoalType] = React.useState('');

  const handleChange = (event) => {
    setGoalType(event.target.value);
  };

  return (
    <Grid container = "column" alignItems="center"justify="center" >
         
    
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Goal Type</InputLabel>
        <Select
          style={{background: "rgb(232, 241, 250)"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={goalType}
          label="Goal Type"
          onChange={handleChange}
        >
          <MenuItem value={10}>Travel</MenuItem>
          <MenuItem value={20}>Marrige</MenuItem>
          <MenuItem value={30}>Baby</MenuItem>
          <MenuItem value={40}>Retirement</MenuItem>
          <MenuItem value={50}>Home</MenuItem>
          <MenuItem value={60}>Vehicle</MenuItem>
          <MenuItem value={70}>Emergency</MenuItem>
          <MenuItem value={80}>Other</MenuItem>
        </Select>
      </FormControl>
    
    </Grid>
  );
}
