const express = require("express");
const app = express();

const cors = require("cors");

const bodyParser = require("body-parser");

const api = require("./api/index");

app.use(cors());

app.use(bodyParser.json());

app.use("/api", api);

app.listen(8080);
