import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ProgressBar from '../components/ProgressBar';
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
            label="First name"
            multiline
            maxRows={2}
            onChange={handleChange}
          />
          </div>
          <div className="col-8">
          
        
          </div>
          <div>
              
          
          <TextField
            style={{background: "rgb(232, 241, 250)"}}
            id="outlined-textarea"
            label="Last Name"
            placeholder="MM/YYYY"
            multiline
          />
        </div>
        <TextField
         style={{background: "rgb(232, 241, 250)"}}
         id="outlined-textarea"
         label="Email"
         placeholder="user@spyglass.com"
         multiline
           
          />
        <div>
        
          <TextField
            style={{background: "rgb(232, 241, 250)"}}
            id="outlined-textarea"
            label="Password"
            placeholder="H****!1"
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
            label="Verify Password"
            placeholder="H****!1"
            multiline
            maxRows={4}
            onChange={handleChange}
            variant="filled"
          />
          
        </div>
     
        
        <Button
        
            style={{background: "rgb(232, 241, 250)"}}variant="save" >Save</Button>
      
  
        
      </Box>
  
    );
  }