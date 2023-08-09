const express = require("express");
const app = express();
const bodyParser = require("body-parser")


app.get("/", function(req, res) {
  console.log(req);
  res.sendFile(__dirname+"/bmiCalculator");
}); //param #1: Location, #2:

app.use(bodyParser.urlencoded({extended: true}));

app.get("/about", function(req, res) {
    res.send("<h1>Micah Ditttmar is a rockstar Programmer!</>");
  }); //param #1: Location, #2:

app.get("/hobbies", function(req, res) {
    res.send("Blooop")
})

app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname+"/bmiCalculator.html")
});
app.post("/bmicalculator", (req, res) => {
    let height = Number(req.body.height)
    let weight = Number(req.body.weight)
    let result = weight / (height * height) * 703
    
    res.send("BMI: "+ result)
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
}); // Basically tune into a channel
