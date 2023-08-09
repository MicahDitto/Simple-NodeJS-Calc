const express = require("express");
const bodyParser = require("body-parser") // Body Parser - Allows you to go into request body

const app = express();

app.get("/", function(req, res) {
    // res.send("Hello, World!");
    console.log(__dirname)
    res.sendFile(__dirname + "/index.html")
})
app.use(bodyParser.urlencoded({extended: true})); //bodyParser.json . text

app.post("/", function(req, res) {
    console.log(req.body);
    console.log(req.headers);
    let num1Str = req.body.num1 //passed as text
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)

    let result = num1 + num2;

    res.send("The result of the calculation "+ result)
})


app.listen(4000, function() {
    console.log("Server started on PORT: 4000")
});