import {getAuth} from 'firebase/auth';

const auth = getAuth();

auth.onAuthStateChanged((user)=> {
    const authToken = user.accessToken;
    sessionStorage.setItem("accessToken", authToken);
});

export default function setupAxios(axios) {
    axios.interceptors.request.use(async config => {
        const authToken = sessionStorage.getItem("accessToken");
        if(authToken){
            config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
    },
    err => Promise.reject(err))

}