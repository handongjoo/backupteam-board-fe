const express = require("express");
// const cors = require("cors")


const app = express();
app.use(express.json());

app.get("/article", (req, res) => {
    res.sendFile(__dirname + "/html/article.html")
})

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/html/home.html")
})

app.get("/profile", (req, res) => {
    res.sendFile(__dirname + "/html/profile.html")
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/html/login.html")
})

app.listen(9000, () => {
    console.log("프론트 시작")
})