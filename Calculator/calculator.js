//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
// body-parser를 하기 위해선 위의 코드가 필요하다.

app.listen(3000,function() {
  console.log("Server started on port 3000!!");
});

app.get("/",(req,res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res) {

  var num1 = Number(req.body.num1); // string 형태로 받기 때문에
  var num2 = Number(req.body.num2); // 숫자 변환이 필요하다.

  var result = num1 + num2;

  res.send("result is : " + result);
});

app.get("/bmiCalculator",(req,res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator",(req,res)=>{
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  checkBMI(weight,height);

  function checkBMI(weight,height) {

    var BMI = weight / Math.pow(height,2); // 제곱
    var BMI2 = Math.floor(BMI);

    if ( BMI2 < 18.5) {
    res.send("Your BMI is " + BMI2 + ", so you are underweight.");
    } else if ( BMI2 > 18.5 && BMI2 < 24.9) {
        res.send("Your BMI is " + BMI2 + ", so you have a normal weight.");
    } else {
        res.send("Your BMI is " + BMI2 + ", so you are overweight.");
    }
}

});
