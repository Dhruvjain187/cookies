const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
const port = 3000;

app.use(cookieParser("thisismysecret"));

app.get("/greet", (req, res) => {
    const { name = "anonymous" } = req.cookies;
    res.send(`HEY THERE, ${name}`);
})

app.get("/setname", (req, res) => {
    res.cookie("name", "jacob");
    res.cookie("character", "voldermote")
    res.send("OK SENT YOU A COOKIE")
})

app.get("/getsignedcookie", (req, res) => {
    res.cookie("fruit", "algorithm", { signed: true })
    res.send("OK SIGNED YOUR FRUIT COOKIE")
})

app.get("/verifyfruit", (req, res) => {
    // console.log(req.cookies);
    // res.send(req.cookies)
    console.log(req.signedCookies);
    res.send(req.signedCookies)
})

app.listen(port, () => {
    console.log(`listening at port:${port}`);
})