import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";
import SelectLanguage from "../selectlanguage/selectlanguage";

export default function Playground() {
  const [language, setLanguage] = useState("");
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  function changeHandler(e) {
    setLanguage(e.value);
  }
  function resetProgress() {
    axios
      .get("/api/user/details/reset", {
        params: {
          language,
        },
      })
      .then((response) => {
        setDetails(response.data);
      });
  }
  useEffect(() => {
    if (!language) return;
    axios
      .get("/api/user/details", {
        params: {
          language,
        },
      })
      .then((response) => {
        setDetails(response.data);
      })
      .catch(() => {
        console.log("cannot fetch language details");
      });
  }, [language]);
  return (
    <div className="playground">
      <SelectLanguage changeHandler={changeHandler} />
      {details ? (
        <div className="progress-details">
          <div>Score: {details.score}</div>
          <div>Level: {Math.floor(details.score / 20) + 1}</div>
          <div>
            Questions Solved:{" "}
            {details.progress[0] + details.progress[1] + details.progress[2]}{" "}
          </div>
          <div>Win Streak: {details.winStreak}</div>
          <div>Loss Streak: {details.loseStreak}</div>
          <div className="controls">
            <div
              className="play-button"
              onClick={() => {
                if (!language) return;
                navigate(`/play/quiz?language=${language}`);
              }}
            >
              Start Playing
            </div>{" "}
            <div className="play-button" onClick={resetProgress}>
              Reset
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
