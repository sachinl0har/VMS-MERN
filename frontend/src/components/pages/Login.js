import { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEye, faEyeSlash);


function Login() {

  const mystyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh"
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    // Call the login API with email and password
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    // If the login is successful, redirect to dashboard
    if (data.success) {
      window.location.href = "/dashboard";
    } else {
      // If there's an error, display the error message
      setErrorMessage(data.error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container" style={mystyle}>
      <div className="login-box">
        <div className="login-logo">
          <a href="/login"><b>VM</b> System</a>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
    <div>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
          className="form-control"
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="input-group">
            <input
              className="form-control"
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <button className="btn btn-outline-success btn-block btn-sm w-25" type="submit">Login</button>
      </form>
    </div>
    </div>
      </div>
    </div>

  );
}

export default Login;
