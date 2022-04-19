import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const logMeIn = () =>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((response)=> {
            sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken);
            navigate("/home");
        }).catch((error) => {
            console.log(error);
        })
    }

    return(
        <div>
            <div className="heading-container">
                <h3>
                    Login Form
                </h3>
            </div>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="email"
                    label="Enter the Email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="password"
                    label="Enter the Password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Box>

            <Button variant="contained" onClick={logMeIn}>Log In</Button>
        </div>
    )
}

export default Login;