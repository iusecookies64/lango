// adding environment variables
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const jwtPassword = process.env.JWT_SECRET;
const authorization = require("./middlewares/authorize.js");

// importing models
const { Language, User, Score } = require("./models/index.js");

// setting up express app
const app = express();
const port = 3002;
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("./public"));

app.use((req, res, next) => {
  next();
});

// handling routes
app.post("/api/user/signin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDocument = await User.findOne({ username, password });
    if (!userDocument) throw Error();

    const token = jwt.sign({ username }, jwtPassword);
    res.json({
      success: true,
      message: "Logged in Successfully",
      token,
      username: userDocument.username,
    });
    // signing user in
  } catch (err) {
    console.log(err);
    res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }
});

app.post("/api/user/signup", async (req, res) => {
  const { firstName, lastName, username, password } = req.body;

  try {
    const newUser = new User({ firstName, lastName, username, password });
    newUser.save();
    res.json({
      success: true,
      message: "Account Created Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.get("/api/user/details/reset", authorization, async (req, res) => {
  const { language } = req.query;
  const { userDocument } = res.locals;
  const details = userDocument.data.find(
    (document) => document.language === language
  );

  if (details === undefined) {
    res.json();
    return;
  }

  details.difficulty = 1;
  details.winStreak = 0;
  details.loseStreak = 0;
  details.progress = [0, 0, 0];
  details.score = 0;
  userDocument.save();
  res.json(details);
});

app.get("/api/user/details", authorization, async (req, res) => {
  const { userDocument } = res.locals;
  const { language } = req.query;

  let details = userDocument.data.find(
    (document) => document.language == language
  );

  if (details === undefined) {
    // if document not found then we create one
    details = {
      language,
      difficulty: 1,
      progress: [0, 0, 0],
      winStreak: 0,
      loseStreak: 0,
      score: 0,
    };

    userDocument.data.push(details);
    userDocument.save();
  }

  res.json(details);
});

app.get("/api/users/verifyToken", authorization, (req, res) => {
  // if we reach here, token is verified
  const { userDocument } = res.locals;
  res.json({
    username: userDocument.username,
  });
});

app.get("/api/leaderboard", async (req, res) => {
  const { language } = req.query;
  const list = await Score.find({ language });
  res.json(list);
});

app.get("/api/questions", authorization, async (req, res) => {
  let { language, result } = req.query;
  result = parseInt(result);
  const { userDocument } = res.locals;
  try {
    // finding document for progress in this language
    let progressDocument = userDocument.data.find(
      (document) => document.language === language
    );

    if (progressDocument === undefined) {
      progressDocument = {
        language,
        score: 0,
        difficulty: 1,
        progress: [0, 0, 0], // progress in each difficulty is 0
        winStreak: 0,
        loseStreak: 0,
      };
      userDocument.data.push(progressDocument);
    }

    let { difficulty, score, winStreak, loseStreak } = progressDocument;
    // if we recieved result
    if (result !== -1) {
      // question answered correctly
      if (result === 1) {
        // updating the score
        if (difficulty === 1) {
          score += 1;
        } else if (difficulty === 2) {
          score += 3;
        } else {
          score += 5;
        }

        // updating the winStreak
        winStreak++;
        loseStreak = 0;
      } else {
        // question was wrongly answered
        loseStreak++;
        winStreak = 0;
      }

      // increasing the progress in this difficulty
      progressDocument.progress[difficulty - 1]++;

      // checking if we need to increase/decrease/nochange the difficulty
      if (winStreak >= 5) {
        // winning a lot, increasing the difficulty by 1
        difficulty = Math.min(difficulty + 1, 3);
        winStreak = 0;
      } else if (loseStreak >= 5) {
        // losing a lot, decreasing the difficulty by 1
        difficulty = Math.max(difficulty - 1, 1);
        loseStreak = 0;
      }
    }

    // we have to send a question starting from index
    let nextQuestionIndex = progressDocument.progress[difficulty - 1]; // progress in this difficulty

    // getting the next question
    const languageDocument = await Language.findOne({
      name: language,
      difficulty,
    });
    if (!languageDocument) throw Error();

    res.json({
      success: true,
      question: languageDocument.questions[nextQuestionIndex],
      difficulty,
      score,
    });

    // updating the progress document;
    progressDocument.difficulty = difficulty;
    progressDocument.winStreak = winStreak;
    progressDocument.loseStreak = loseStreak;
    progressDocument.score = score;
    userDocument.save();

    // updating the score in the score collection
    let scoreDocument = await Score.findOne({
      username: userDocument.username,
    });
    if (!scoreDocument) {
      scoreDocument = new Score({
        score,
        language,
        username: userDocument.username,
      });
    }

    scoreDocument.score = score;
    scoreDocument.save();
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "cannot fetch questions",
    });
  }
});

User.deleteMany({});

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
