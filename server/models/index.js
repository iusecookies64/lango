const mongoose = require("mongoose");
const fs = require("fs");

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL);

// user information
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: { type: String, unique: true },
  password: String,
  data: [
    {
      language: String,
      difficulty: Number,
      score: Number,
      progress: [{ type: Number }],
      winStreak: Number,
      loseStreak: Number,
    },
  ],
});

const scoreSchema = new mongoose.Schema({
  score: Number,
  language: String,
  username: String,
});

// indexing questions to not show repeated questions
const languageSchema = new mongoose.Schema({
  name: String,
  questions: [
    {
      description: String,
      options: [{ type: String }],
      answer: String,
    },
  ],
  difficulty: Number,
});

const Language = mongoose.model("Language", languageSchema);
const User = mongoose.model("User", userSchema);
const Score = mongoose.model("Score", scoreSchema);

module.exports = {
  Language,
  User,
  Score,
};
