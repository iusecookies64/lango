import { createContext, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Main from "./components/main/Main";
import Header from "./components/header/header";
import { Routes, Route, useNavigate } from "react-router-dom";
import QuizComponent from "./components/quiz/QuizComponent";
import Leaderboard from "./components/leaderboard/leaderboard";
import Playground from "./components/playground/plaground";

export const AppContext = createContext();

const App = () => {
  const [AUTH_TOKEN, setToken] = useState(
    window.localStorage.languageGameToken
  );
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  // setting up axios defaults
  axios.defaults.baseURL = "http://localhost:3000";
  axios.defaults.headers.common["authorization"] = AUTH_TOKEN;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.headers.get["Content-Type"] =
    "application/x-www-form-urlencoded";

  useEffect(() => {
    if (AUTH_TOKEN) {
      // is we have a token then checking if this is valid token or not
      axios
        .get("/api/users/verifyToken")
        .then((response) => {
          setUsername(response.data.username);
        })
        .catch(() => {
          // if we reach here this means token was invalid
          window.localStorage.languageGameToken = "";
          setToken("");
          navigate("/");
        });
    } else {
      navigate("/");
    }
  }, []);
  return (
    <AppContext.Provider
      value={{
        token: AUTH_TOKEN,
        setToken,
        username,
        setUsername,
      }}
    >
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/play" element={<Playground />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/play/quiz" element={<QuizComponent />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;
