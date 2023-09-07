require("dotenv").config();
const express = require("express");
const useRouter = require("./server/api/users/user.router");
const pool = require("./server/config/database");
const questionRouter = require("./server/api/question/question.router");
const answerRouter = require("./server/api/answer/answer.router");

const cors = require("cors");

const port = process.env.PORT;

const app = express();
//middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", useRouter);
app.use("/api/question", questionRouter);
app.use("/api/answer", answerRouter);
app.listen(port, () =>
  console.log(` listening on port http://localhost:${port}`),
);
