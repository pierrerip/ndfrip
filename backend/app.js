const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const router = require("./routes/router");

const app = express();

const port = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use("/", router);

app.listen(port);
