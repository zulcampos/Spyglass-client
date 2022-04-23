import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ProgressBar from '../components/ProgressBar';
import GoalTypeBox from '../components/GoalTypeBox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchBar from '../components/SearchBar';
import { FormControl } from '@mui/material';


export default function MultilineTextFields() {
  const [value, setValue] = React.useState('');

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
      <SearchBar></SearchBar>
      <div>
        <TextField
          style={{background: "rgb(232, 241, 250)"}}
          id="outlined-textarea"
          label="Goal Start Date"
          placeholder="MM/DD/YYYY"
          multiline
          maxRows={2}
          onChange={handleChange}
        />
        </div>
        <div className="col-8">
        
      
        </div>
        <div>
            
        <GoalTypeBox container direction="column" alignItems="center"justify="center">
            
            </GoalTypeBox>
        <TextField
          style={{background: "rgb(232, 241, 250)"}}
          id="outlined-textarea"
          label="Goal Due Date"
          placeholder="MM/YYYY"
          multiline
        />
      </div>
      <TextField
          style={{background: "rgb(232, 241, 250)"}}
          id="outlined-textarea"
          label="Goal Description"
          placeholder="Enter description here!"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
        />
      <div>
      

        <TextField
          style={{background: "rgb(232, 241, 250)"}}
          id="filled-multiline-flexible"
          label="Saved So Far"
          placeholder="$"
          multiline
          maxRows={4}
          onChange={handleChange}
          variant="filled"
        />
      </div>
      <div>
        <TextField
          style={{background: "rgb(232, 241, 250)"}}
          id="standard-multiline-flexible"
          label="Goal Amount"
          placeholder="$"
          multiline
          maxRows={4}
          onChange={handleChange}
          variant="filled"
        />
        
      </div>
      <ProgressBar></ProgressBar>
      <FormControl sx={{ ml: 5, minWidth: 120 }} size="small">
    <Stack spacing={2} direction="row">
      
      <Button
      
          style={{background: "rgb(232, 241, 250)"}}variant="save" >Save</Button>
    </Stack>

      </FormControl>
    </Box>

  );
}