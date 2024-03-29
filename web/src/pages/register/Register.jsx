import { useRef, useState } from "react";
import "./register.scss";

const Register = () => {
  const [isEmail, setIsEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setIsEmail(emailRef.current.value);
  };

  const handleFinsh = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!isEmail ? (
          <div className="input">
            <input
              value={isEmail}
              type="email"
              name="email"
              id="email"
              placeholder="email address"
              ref={emailRef}
            />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              value={password}
              type="password"
              name="password"
              id="password"
              placeholder="password"
              ref={passwordRef}
            />
            <button className="registerButton" onClick={handleFinsh}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
