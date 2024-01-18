import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./style.css";

export default function Main() {
  const { token, setToken } = useContext(AppContext);
  const linkStyle = {
    color: "#143109",
    textDecoration: "none",
  };

  function logout() {
    setToken("");
    window.localStorage.languageGameToken = "";
  }
  if (token) {
    return (
      <div className="main">
        <Link to={"/play"} style={linkStyle}>
          <div className="nav-button">Start Playing</div>
        </Link>
        <Link to={"/leaderboard"} style={linkStyle}>
          <div className="nav-button">Leaderboards</div>
        </Link>
        <div className="nav-button" onClick={logout}>
          Logout
        </div>
      </div>
    );
  } else {
    return (
      <div className="main">
        <div className="main-text">Learn, Compete, Get Better</div>
      </div>
    );
  }
  // return <div>{language ? <QuizComponent /> : <SelectLanguage />}</div>;
}
