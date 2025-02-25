const express = require("express");
const client = require('./elasticSearch');
const dotenv = require("dotenv");
const app = express();
const elastic = require("./elasticSearch")
app.use(express.json());

dotenv.config();

app.use("/", elastic);

app.listen(5000, () => {
    console.log("Server Started on the port 5000");
});