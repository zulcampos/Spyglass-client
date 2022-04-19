import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import axios from 'axios';

const defaultValues = {
    email:'',
    password:'',
    firstName:'',
    lastName:'',
    extra:'extra data'
}

function Register(){
    const navigate = useNavigate();
    const [userData, setUserData] = useState(defaultValues);

    const handleInputChange = (e) => {
        const {id, name, value} = e.target;
        setUserData({
            ...userData,
            [name]:value,
        });
    }


    const createAccountAndLogIn = (event) => {
        event.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then((response) => {
            sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken); 
            axios.post("http://localhost:8080/me",userData)
            .then(response => {
                console.log(response);
                navigate("/home");
            })           
            
        }).catch((error)=> {
            console.log(error);
        })
    }

    return(
      <div>
            <div className="heading-container">
                <h3>
                    Register Form
                </h3>
                <form onSubmit={createAccountAndLogIn}>
                    <Grid container spacing={2} alignItems="center" justify="center" direction="column">
                        <Grid item lg={10}>
                            <TextField
                                id="email"
                                name="email"
                                label="Enter the Email"
                                variant="outlined"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="password"
                                name="password"
                                label="Enter the Password"
                                variant="outlined"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="firstName"
                                name="firstName"
                                label="Enter the First Name"
                                variant="outlined"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="lastName"
                                name="lastName"
                                label="Enter the Last Name"
                                variant="outlined"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
                    </Grid>
                    
                </form>
            </div>
      </div>  
    )
}

export default Register;