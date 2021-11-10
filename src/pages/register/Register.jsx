import './register.css';

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">IdeaHub</h3>
                    <span className="loginDesc">Where Ideas are Born</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username"  className="loginInput"/>
                        <input placeholder="Email"  className="loginInput"/>
                        <input placeholder="Password"  className="loginInput"/>
                        <input placeholder="Confirm Password"  className="loginInput"/>
                        <button className="loginButton">Log In</button>
                        <button className="loginRegisterButton">Log in to your Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
