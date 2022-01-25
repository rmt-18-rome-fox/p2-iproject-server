const express = require("express");
const app = express();
const port = process.env.PORT || 5050;
const cors = require("cors");
const router = require("./routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
