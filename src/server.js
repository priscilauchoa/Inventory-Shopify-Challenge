const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const api = require("./api/index");

const app = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());

app.use("/api", api);

app.listen(8080);
