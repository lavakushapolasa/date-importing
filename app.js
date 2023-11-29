const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const TodayDate = new Date();
  response.send(
    `${TodayDate.getDate()}-${
      TodayDate.getMonth() + 1
    }-${TodayDate.getFullYear()}`
  );
});

module.exports = app;
