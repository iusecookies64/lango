import { useContext, useState } from "react";
import { AppContext } from "../../App";
import RegistrationForm from "../registerform/registerform";
import "./style.css";

export default function Profile() {
  const { token, username } = useContext(AppContext);
  const [showForm, setShowForm] = useState(false);
  function clickHandler() {
    setShowForm(!showForm);
  }
  return (
    <div>
      {token ? (
        <div>Welcome, {username}</div>
      ) : (
        <>
          <div className="login-button" onClick={clickHandler}>
            Log In
          </div>
          {showForm ? (
            <div className="form-container">
              <div className="overlay" onClick={clickHandler}></div>
              <RegistrationForm />
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
