const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 3001;

app.listen(3001, () => console.log(`I am listening on port: ${port}.`));
