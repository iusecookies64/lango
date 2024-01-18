import { useContext, useState } from "react";
import "./style.css";
import axios from "axios";
import { AppContext } from "../../App";

const RegistrationForm = () => {
  const [authState, setAuthState] = useState(true); // true means signin and false for signup
  const { setToken, setUsername } = useContext(AppContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateField = (name, value) => {
    switch (name) {
      case "username":
        if (value.length < 2) {
          setValidationErrors({
            ...validationErrors,
            username: "Username must be at least 2 characters long.",
          });
        } else {
          setValidationErrors({
            ...validationErrors,
            username: "",
          });
        }
        break;
      case "password":
        const passwordRegex = new RegExp(/^(?=.*[A-Z])(?=.*\d).{6,}$/);
        if (!passwordRegex.test(value)) {
          setValidationErrors({
            ...validationErrors,
            password:
              "Password must be at least 6 characters long and contain at least 1 uppercase letter and 1 number.",
          });
        } else {
          setValidationErrors({
            ...validationErrors,
            password: "",
          });
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (authState === false) {
      // signup handling
      const res = await axios.post("/api/user/signup", formData);
      if (res.status === 200) {
        setAuthState(true);
      }
    } else {
      // signin handling
      const res = await axios.post("/api/user/signin", formData);
      window.localStorage.languageGameToken = res.data.token;
      setToken(res.data.token);
      setUsername(res.data.username);
    }
  };

  const switchAuthState = () => setAuthState(!authState);

  return (
    <div>
      {authState ? (
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
          <div>Log In</div>
          <div>
            <label htmlFor="username">username: </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button className="button" type="submit" onClick={handleSubmit}>
            Sign In
          </button>
          <p>
            Don`t have an account?{" "}
            <button className="button" type="button" onClick={switchAuthState}>
              Sign Up
            </button>
          </p>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="form" autoComplete="off">
          <div>Create New Account</div>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {validationErrors.username && (
            <div className="error">{validationErrors.username}</div>
          )}
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {validationErrors.password && (
            <div className="error">{validationErrors.password}</div>
          )}
          <button className="button" type="submit">
            Submit
          </button>
          <p>
            Have an account?{" "}
            <button className="button" type="button" onClick={switchAuthState}>
              Sign In
            </button>
          </p>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
