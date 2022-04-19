import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();
    const logMeOut = () => {
        sessionStorage.removeItem("Auth Token");
        navigate("/login");
    }

    useEffect(()=>{
        axios.get("http://localhost:8080/me")
    },[])
    return(<>
        <h1>Home</h1>
        <button onClick={logMeOut}>Log Out</button>
    </>);
}

export default Home;