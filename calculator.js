//jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
});

app.post("/",function(req,res){
  var num1=Number(req.body.n1);
  var num2=Number(req.body.n2);
  var result=num1+num2;
  res.send("Result of calculation in "+result);
});

app.get("/bmi",function(req,res){
  res.sendFile(__dirname+"/bmi.html");
});
app.post("/bmi",function(req,res){
  var weight=parseFloat(req.body.kg);
  var height=parseFloat(req.body.meter);
  var result=weight/(height*height);
  res.send("BMI is "+result);
})
app.listen(3000,function(){
console.log("SERVER STARTED ON PORT 3000")
});
