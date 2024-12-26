//Assignment 3

//User input & COnditional Statment

//Question1

// let cityName = prompt("Enter your city Name");
// if (cityName=="Karachi" || "karachi") {
//     document.write("<h1>Welcome to the city of Lights</h1>")
// }
// else{
//     document.write("<h1>Welcome to ", cityName,"</h1>")
// }


//Question2

// let gender = prompt("Enter your Gender");

// if (gender.toLowerCase() == "male") {
//     document.write("<h1>Good Morning Sir</h1>")
// }
// else if (gender.toLowerCase() == "female") {
//     document.write("<h1>Good Morning Ma'am</h1>")
// }

//Question3

// let signalColor = prompt("Enter Road Signal Color")
// if (signalColor.toLowerCase() == "red") {
//     document.write("<h1>Must Stop</h1>")
// }
// else if (signalColor.toLowerCase() == "yellow") {
//     document.write("<h1>Get Ready to Stop</h1>")
// }
// else if (signalColor.toLowerCase() == "green") {
//     document.write("<h1>Go</h1>")
// }


//Question 4

// let remainingFuel=prompt("Enter remaining fuel(in liters) in car")
// if (remainingFuel <0.25) {
//     document.write("<h1>Refuel the car</h1>")
    
// }


//QUestion 5
// {
// let subject1 = prompt("Enter subject 1 name");
// let subject2 = prompt("Enter subject 2 name");
// let subject3 = prompt("Enter subject 3 name");
// let totalMarks = 100;
// let marksObtained1 = parseInt(prompt("Enter obtained marks in subject 1"));
// let marksObtained2 = parseInt(prompt("Enter obtained marks in subject 2"));
// let marksObtained3 = parseInt(prompt("Enter obtained marks in subject 3"));

// document.write(
//   `<table><tr><th>Subjects</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr><tr><td>${subject1}</td><td>${totalMarks}</td><td>${marksObtained1}</td><td>${marksObtained1/totalMarks*100}</td></tr>
//   <tr><td>${subject2}</td><td>${totalMarks}</td><td>${marksObtained2}</td><td>${marksObtained2/totalMarks*100}</td></tr>
//   <tr><td>${subject3}</td><td>${totalMarks}</td><td>${marksObtained3}</td><td>${marksObtained3/totalMarks*100}</td></tr>
//   </table>`

// );

// let totalObtainedMarks = marksObtained1+marksObtained2+marksObtained3;
// let grandtotal = 300;
// let totalPercentage = (totalObtainedMarks/grandtotal)*100;

// if (totalPercentage >= 80) {
//     document.write("<h1>Mark Sheet</h1>")
//     document.write("</br>Total Marks", grandtotal)
//     document.write("</br>Marks Obtained", totalObtainedMarks)
//     document.write("</br>Percentage", totalPercentage)
//     document.write("</br>Grade: A-one")
//     document.write("</br>Excellent")
// }
// else if (totalPercentage >= 70) {
//     document.write("<h1>Mark Sheet</h1>")
//     document.write("</br>Total Marks", grandtotal)
//     document.write("</br>Marks Obtained", totalObtainedMarks)
//     document.write("</br>Percentage", totalPercentage)
//     document.write("</br>Grade: A")
//     document.write("</br>Very Good")
// }
// else if (totalPercentage >= 60) {
//     document.write("<h1>Mark Sheet</h1>")
//     document.write("</br>Total Marks", grandtotal)
//     document.write("</br>Marks Obtained", totalObtainedMarks)
//     document.write("</br>Percentage", totalPercentage)
//     document.write("</br>Grade: B")
//     document.write("</br>You need to improve")
// }
// else if (totalPercentage >= 50) {
//     document.write("<h1>Mark Sheet</h1>")
//     document.write("</br>Total Marks", grandtotal)
//     document.write("</br>Marks Obtained", totalObtainedMarks)
//     document.write("</br>Percentage", totalPercentage)
//     document.write("</br>Grade: Fail")
//     document.write("</br>Sorry")
// }

// }
//Question 7
// let secretNumber = 10;
// let userInput = prompt("Enter a number")
//     if (userInput == secretNumber) {
//         alert("You guessed it!");
//     }
//     else if (userInput < secretNumber) {
//         alert("Too low!");
//     }
//     else if (userInput > secretNumber) {
//         alert("Too high!");
//     }


//Question 8

// let number = prompt("Enter a number")

// if (number%3==0) {
//     document.write("<h1>The number is divisble by 3</h1>")
// }
// else {
//     document.write("<h1>Number can not be divisble by 3</h1>")
// }

//Question 9

// let number = prompt("Enter a number")

// if(number%2==0){
//     document.write("<h1>Number is even</h1>")
// }
// else{
//     document.write("<h1>It an odd number</h1>")
// }

//QUestion10

// let temp = prompt("Enter Outside Temperature")

// if (temp>40) {
//     document.write("<h1>Its too Outside</h1>")
// }
// else if (temp>30) {
//     document.write("<h1>The weather today is Normal</h1>")
// }
// else if (temp>20) {
//     document.write("<h1>Its a good day to go out</h1>")
// }
// else {
//     document.write("<h1>Its too cold outside</h1>")
// }


//Question 11

// let num1 = parseInt(prompt("Enter number 1"))
// let num2 = parseInt(prompt("Enter number 2"))
// let operation = prompt("Enter operation +, *, /, -")

// if (operation=="+") {
//     document.write("<h1>The sum of ", num1, " and ", num2, " is ", num1+num2)
// }
// else if (operation== "*") {
//     document.write("<h1>The multiplication of ", num1, " and ", num2, " is ", num1*num2)
// }
// else if (operation=="/") {
//     document.write("<h1>The division of ", num1, " and ", num2, " is ", num1/num2)
// }
// else if (operation=="-") {
//     document.write("<h1>The subtraction of ", num1, " and ", num2, " is ", num1-num2)
// }


// Chapter 12

//Question 1

// let number = prompt("Enter any number or letter");
// let asscivalue = number.charCodeAt(0);
// if (asscivalue >= 65 && asscivalue<=90) {
//     document.write("<h1>You have entered Capital Alphabet</h1>")
// }
// else if (asscivalue>=97 && asscivalue<=122) {
//     document.write("<h1>You have enterred small alphabet</h1>")
// }
// else{
//     document.write("<h1>You have entered number</h1>")
// }

//Question2

// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter second number");

// if (num1>num2) {
//     document.write(num1, " is greater than ", num2)
// }
// else{
//     document.write(num2, " is greater than ", num1)
// }

//Question3

// let number = prompt("Enter your number");

// if (number>0) {
//     document.write("You have entered positive integer")
// }
// else if (number<0) {
//     document.write("You have entered negative integer")
// }
// else{
//     document.write("You have entered zero")
// }

//Question 4

// let alpha = prompt("Enter an alphabet")

// if (alpha=="a" || alpha=="e" || alpha=="i" || alpha=="o" || alpha=="u") {
//     document.write("<h1>You have entered vowel</h1>")   
// }
// else{
//     document.write("<h1>You have entered consonant</h1>")
// }


//Question 5

// let password = prompt("Please enter your password")

// let correctPassword = "Pakistan123"

// if (password==correctPassword) {
//     document.write("<h1>You have entered Correct Password</h1>")
// }
// else{
//     document.write("<h1>You have entered Incorrect Password</h1>")
// }


//Question 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }

//Question 7

// let time = parseInt(prompt("Enter your time in 24 hours format"))

// if (time>=1200 && time<=2359) {
//     document.write("<h1>Good Morning")
// }
// else if (time>=0 && time<1200) {
//     document.write("<h1>Good Night")
// }
// else if (time>=600 && time<1200) {
//     document.write("<h1>Good Morning")
// }
// else if (time>=1200 && time<1800) {
//     document.write("<h1>Good Afternoon")
// }
// else if (time>=1800 && time<2359) {
//     document.write("<h1>Good Evening")
// }
// else{

