import { useCallback, useEffect, useState, useMemo } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate, useLocation } from "react-router-dom";

// to get language from query
function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function QuizComponent() {
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState(1);
  const difficultyText = ["Easy", "Medium", "Hard"];
  const textColor = ["#34eb4f", "#fdce7f", "#c21919"];

  const query = useQuery();
  const language = query.get("language");
  // check if language is not define
  if (!language) {
    navigate("/");
  }

  const getQuestion = useCallback(async (result = -1) => {
    const response = await axios.get("/api/questions", {
      params: {
        language,
        result,
      },
    });
    if (response.status == 200) {
      setQuestion(response.data.question);
      setScore(response.data.score);
      setDifficulty(response.data.difficulty);
    } else {
      console.log("error getting questions");
    }
  }, []);

  useEffect(() => {
    // getting questions for the first time on component mount
    getQuestion();
  }, []);

  const nextQuestion = (result) => {
    setQuestion(null); // setting question null till we fetch next question from the backend
    // requesting next question
    getQuestion(result);
  };

  return (
    <div className="play-container">
      <div className="details">
        <div>Score: {score}</div>
        <div>
          Difficulty:{" "}
          <span style={{ color: textColor[difficulty - 1] }}>
            {difficultyText[difficulty - 1]}
          </span>
        </div>
      </div>
      {question ? (
        <Question data={question} nextQuestion={nextQuestion} />
      ) : (
        "loading"
      )}
      <div className="progress-container">
        <div>Level {Math.floor(score / 20) + 1}</div>
        <div className="progress-bar">
          <div style={{ width: `${score}%` }}></div>
        </div>
      </div>
    </div>
  );
}

function Question({ data, nextQuestion }) {
  const { description, options, answer } = data;
  const clickHandler = (e) => {
    const choice = e.target.id;
    if (choice === answer) {
      e.target.classList.add("correct");
      setTimeout(() => nextQuestion(1), 1000);
    } else {
      e.target.classList.add("wrong");
      document.getElementById(answer).classList.add("correct");
      setTimeout(() => nextQuestion(0), 1000);
    }
  };
  return (
    <div className="question-container">
      <div className="description">Q. {description}</div>
      <div className="options">
        {options.map((option, indx) => (
          <div key={option} id={option} onClick={clickHandler}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
