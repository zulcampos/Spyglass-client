import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ProgressBar from '../components/ProgressBar';
import GoalTypeBox from '../components/GoalTypeBox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchBar from '../components/SearchBar';

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Text');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          style={{background: "rgb(232, 241, 250)"}}
          id="outlined-textarea"
          label="Goal Start Date"
          multiline
          maxRows={2}
          value={value}
          onChange={handleChange}
        />
        </div>
        <div className="col-8">
        
        <GoalTypeBox alignItems="center"justify="center">
            
        </GoalTypeBox>
        </div>
        <div>
        <TextField
          style={{background: "rgb(232, 241, 250)"}}
          id="outlined-textarea"
          label="Goal Due Date"
          placeholder="Placeholder"
          multiline
        />
      </div>
      <TextField
          style={{background: "rgb(232, 241, 250)"}}
          id="filled-multiline-static"
          label="Goal Description"
          multiline
          rows={4}
          defaultValue="Enter"
          variant="filled"
        />
      <div>
      
        <TextField
          style={{background: "rgb(232, 241, 250)"}}
          id="filled-multiline-flexible"
          label="Saved So Far"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          variant="filled"
        />
      </div>
      <div>
        <TextField
          style={{background: "rgb(232, 241, 250)"}}
          id="standard-multiline-flexible"
          label="Goal Amount"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          variant="standard"
        />
        
      </div>
      <ProgressBar></ProgressBar>

    <Stack spacing={2} direction="row">
      <Button 
          style={{background: "rgb(232, 241, 250)"}}variant="start">Start</Button>
    </Stack>


<SearchBar></SearchBar>


    </Box>

  );
}