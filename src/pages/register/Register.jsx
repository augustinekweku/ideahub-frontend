import "./register.css";
import { useRef } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import { useHistory } from "react-router";

export default function Register() {
    const email = useRef();
    const username = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            password.current.setCustomValidity("Passwords do not match")
            console.log(password.current.value, passwordAgain.current.value)
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post("/auth/register", user);
                history.push("/login")
            } catch (error) {
                console.log(error)
            }

        }
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">IdeaHub</h3>
                    <span className="loginDesc">Where Ideas are Born</span>
                </div>
                <div  className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                            placeholder="Username"
                            required
                            ref={username}
                            type="text"
                            className="loginInput"
                        />
                        <input
                            placeholder="Email"
                            required
                            ref={email}
                            type="email"
                            className="loginInput"
                        />
                        <input
                            placeholder="Password"
                            required
                            ref={password}
                            type="password"
                            minLength="6"
                            className="loginInput"
                        />
                        <input
                            placeholder="Confirm Password"
                            required
                            ref={passwordAgain}
                            type="password"
                            className="loginInput"
                        />
                        <button type="submit" className="loginButton">
                            Register
                        </button>
                        <button  className="loginRegisterButton">
                        <Link to="/login">
                            Log in to your Account
                        </Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
