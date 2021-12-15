require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/router.js");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
