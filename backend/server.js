const express = require("express");
const app = express();
const port = 8081;
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("hello world endpoint hit");
  return res.status(200).send({
    data: "hello world",
  });
});

app.get("/getcountry", (req, res) => {
  console.log("getting one country endpoint got a hit");
  return res.status(200).send(countryList[5]);
});

app.listen(port, () => {
  console.log(`connected on port ${port}`);
});

module.exports = app;
