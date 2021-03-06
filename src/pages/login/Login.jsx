import { useRef, useContext } from 'react';
import './login.css';
import { loginCall } from '../../apiCalls';
import {AuthContext} from "../../context/AuthContext"
import { CircularProgress } from "@material-ui/core"


export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch} = useContext(AuthContext);
    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email:email.current.value, password:password.current.value}, dispatch);
        //console.log(email.current.value + ' ' + password.current.value)
    }
    console.log(user)
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">IdeaHub</h3>
                    <span className="loginDesc">Where Ideas are Born</span>
                </div>
                <div className="loginRight" onSubmit={handleClick}>
                    <form className="loginBox">
                        <input placeholder="Email" type="email" ref={email}  required className="loginInput"/>
                        <input placeholder="Password" type="password" minLength="6" ref={password} required className="loginInput"/>
                        <button className="loginButton" disabled={isFetching}>{isFetching ? <CircularProgress color="inherit"/> : "Login"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">{isFetching ? <CircularProgress color="inherit"/> : "Create a New Account"}</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
