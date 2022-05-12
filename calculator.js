const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request,response){
  response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(request, response){
  var num1 = Number(request.body.weight);
  var num2 = Number(request.body.height);
  var result = (num1 / Math.pow(num2, 2)).toFixed(1);

  if(result <= 18.5){
    response.write("<h1>"+"Your result is: "+ result+ "</h1>");
    response.write("<h2>Underweight</h2>");
    response.send();
  }
  else if(result >= 18.5 && result <= 24.9){
    response.write("<h1>"+"Your result is: "+ result+ "</h1>");
    response.write("<h2>Healthy</h2>");;
    response.send();

  }
  else if(result > 24.9 && result <= 29.9){
    response.write("<h1>"+"Your result is: "+ result+ "</h1>");
  response.write("<h2>Overweight</h2>");
    response.write("<h3>You need to visit the gym!</h3>");
    response.send();
  }
  else{
    response.write("<h1>"+"Your result is: "+ result+ "</h1>");
    response.write("<h2>Obese</h2>");
    response.write("<h3>You need to visit the clinic immediately!</h3>");
    response.send();
  }

});





app.listen(3000, function (){
  console.log("Server started at port 3000!");
});
