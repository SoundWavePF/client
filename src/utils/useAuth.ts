import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { getCookie, setCookie, removeCookie} from "typescript-cookie";
import * as actionUser from "../redux/actions/action_user"; 
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { UserOnDb } from "../consts/userResponse";
import { AuthResponse } from "../consts/authResponse";


export default function useAuth(){
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { getUserInfo } = bindActionCreators(actionUser, dispatch);

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userCookie, setUserCookie] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { user_info: user } = useSelector((state): any => state);


    useEffect(()=>{
        const theCookie = getCookie('swID');
        if(theCookie) {
            setUserCookie(theCookie);
            setIsAuthenticated(true);
        }
        setIsLoading(false)
    },[]);

    useEffect(()=>{
        if(isAuthenticated && !user.email){
            getUser(userCookie);
        }

    }, [isAuthenticated, user])


    async function getUser(cookie: string){
        try{
            const {data} = await axios.get<UserOnDb>(`${process.env.REACT_APP_BACK}/info/verify`, {
                headers: {Authorization: `Bearer ${cookie}`}
            })
            getUserInfo(data.email);
        } catch (e) {
            
        }
    }

    async function signup(username: string, email: string, password: string){
        if(!username || !email || !password) {
            setErrorMessage('Missing fields')
            return;
        }
        try {
            const {data} = await axios.post<AuthResponse>(`${process.env.REACT_APP_BACK}/auth/signup`, {username, email, password})
            if(!data.token) return data;
            setCookie('swID', data.token, {secure: true})
            return data;
        } catch (e:any) {
            const {data} = e.response;
            if (data.statusCode === 400 ) setErrorMessage(data.message[0])
            setErrorMessage(data.message)
        }
    }
    
    async function login(email: string, password:string){
        try{
            const {data} = await axios.post<AuthResponse>(`${process.env.REACT_APP_BACK}/auth/login`, {email, password})
            if(!data.token) return data;
            setCookie('swID', data.token, {secure: true})
            return data;
        } catch (e:any) {
            const {data} = e.response;
            if (data.statusCode === 400 ) setErrorMessage(data.message[0])
            setErrorMessage(data.message)
        }
    }

    function logout(){
        removeCookie('swID');
        navigate(0);
    }

    async function googleLogin() {
        window.open(`${process.env.REACT_APP_BACK}/auth/google`, '_self');
    }

    async function googleCallback(token: string) {
        setCookie('swID', token, {secure: true, path:'/'});
        navigate('/home');
    }

    return {isAuthenticated, isLoading, user, errorMessage, signup, login, logout, googleLogin, googleCallback}
}