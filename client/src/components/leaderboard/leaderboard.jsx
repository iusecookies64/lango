import { useState, useContext, useEffect } from "react";
import SelectLanguage from "../selectlanguage/selectlanguage";
import { AppContext } from "../../App";
import axios from "axios";
import "./style.css";

export default function Leaderboard() {
  const [language, setLanguage] = useState("");
  const [list, setList] = useState(null);

  function changeHandler(e) {
    setLanguage(e.value);
  }

  useEffect(() => {
    if (!language) return;
    axios
      .get("api/leaderboard", {
        params: {
          language,
        },
      })
      .then((response) => {
        response.data.sort((a, b) => a.score < b.score);
        setList(response.data);
      });
  }, [language]);

  return (
    <div className="leaderboard">
      <div style={{ textDecoration: "underline" }}>Leaderboard</div>
      <SelectLanguage changeHandler={changeHandler} />
      <div className="leaderboard-list">
        <div style={{ borderBottom: "1px solid black" }}>
          <div>Username</div>
          <div>Score</div>
        </div>
        {list && list.length
          ? list.map((item, indx) => (
              <div key={indx}>
                <div>{item.username}</div>
                <div>{item.score}</div>
              </div>
            ))
          : "Empty List"}
      </div>
    </div>
  );
}
