const compression = require("compression");
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

const public = path.join(__dirname, "..", "www", "public");

app.use(compression());