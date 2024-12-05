const users = require("./db/data.json");
const express = require("express");

const app = express();
const PORT = 3001;
const path = require("path");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public/")));

app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "/public/login.html")));

app.get("/api/users", (req, res) => res.json(users) ) 
app.listen(PORT, () =>
  console.log(`Serving static asset routes at http://localhost:${PORT}`)
);

