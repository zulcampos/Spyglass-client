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
                <h3>Login Form</h3>
                <img src="data:image/jpeg;base64,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" alt="Girl in a jacket" 
                width="100
                " height="100"></img>
            </div>

            <Box
                component="form"
                xs={{
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

