// chapter 31 to 34
// Q1

// var currentDate = new Date();
// document.write(currentDate);

// Q2

// var currentMonth = new Date();
// currentMonth = currentMonth.toString();

// currentMonth = currentMonth.slice(4,8);

// alert("Current Month:"+" "+ currentMonth);

// Q3

// var currentDay = new Date();
// currentDay = currentDay.toString();

// currentDay = currentDay.slice(0,3);

// alert("Today is " + currentDay);


// Q4

// var currentDate = new Date(); 
//  currentDate.toString;
// var a = currentDate.toString();
// var b = a.slice(0, 3);

// console.log(b)
// if (b === "Sat") {
//     document.write("It's Fun Day")
// } else if (b === "Sun") {
//     document.write("It's Fun Day")
// } else if (b === "Mon") {
//     document.write()
// } else if (b === "Tue") {
//     document.write()
// } else if (b === "Wed") {
//     document.write()
// } else if (b === "Thr") {
//     document.write()
// } else if (b === "Fri") {
//     document.write()
// }

// Q5

// var date = new Date();
// date.toString()
// var a = date.toString();
// var b = a.slice(8,11)

// if(b < 16){
//     document.write("First fifteen days of the month")
// }else if(b > 16){
//     document.write("Last days of the month")
// }


// Q6

// var today = new Date();
// mili = today.getTime();
// mintues = mili/(1000*60*60)

// document.write("Current Date:"+today+"<br>")
// document.write("Elapsed miliseconds since january 1, 1970:"+" "+mili +"<br>")
// document.write("Elapsed mintues since january 1, 1970 : " + " " + mintues)


// Q7

// var time = new Date();

// time.toString();
// var a = time.toString()
// var b = a.slice(16,19)
// if(b === "12:"){
//     alert("It's pm")
// }else if(b === "13:"){
//     alert("It's pm")
// }else if(b === "14:"){
//     alert("It's pm")
// }else if(b === "15:"){
//     alert("It's pm")
// }else if(b === "16:"){
//     alert("It's pm")
// }else if(b === "17:"){
//     alert("It's pm")
// }else if(b === "18:"){
//     alert("It's pm")
// }else if(b === "19:"){
//     alert("It's pm")
// }else if(b === "20:"){
//     alert("It's pm")
// }else if(b === "21:"){
//     alert("It's pm")
// }else if(b === "22:"){
//     alert("It's pm")
// }else if(b === "23:"){
//     alert("It's pm")
// }else if(b === "24:"){
//     alert("It's pm")
// }else if(b === "1:"){
//     alert("It's Am")
// }else if(b === "2:"){
//     alert("It's Am")
// }else if(b === "3:"){
//     alert("It's Am")
// }else if(b === "4:"){
//     alert("It's Am")
// }else if(b === "5:"){
//     alert("It's Am")
// }else if(b === "6:"){
//     alert("It's Am")
// }else if(b === "7:"){
//     alert("It's Am")
// }else if(b === "8:"){
//     alert("It's Am")
// }else if(b === "9:"){
//     alert("It's Am")
// }else if(b === "10:"){
//     alert("It's Am")
// }else if(b === "11:"){
//     alert("It's Am")
// }

// Q8

// var LaterDate = new Date("31,dec ,2020");

// document.write("Later Date :" + " " + LaterDate);




// Q10

// var startTime = new Date("1 jan , 2015");
// var a = startTime.getTime()
// var endTime = new Date("5 dec , 2015");
// var b = endTime.getTime();
//  var diff = b - a;
//  result = diff/(1000*60)
//  document.write(result + " " + "Seconds had passed since beginning of 2015");









// Q11

// var currentTime = new Date()

// document.write("current date : "+ currentTime);

// var now = new Date();
//  now .setHours()
// console.log(now);





// Q12


// var currentTime = new Date()

// alert("current date : "+ currentTime);

// var oldTime = new Date("1921")

//  alert("100 years back,it was " + oldTime);


// Q13

// var db = new Date("17 sep ,1994")
// var birthyear = db.getFullYear();

// var dbmili = db.getTime();

// var newdate = new Date();

// var newdatemili = newdate.getTime();

// var diff = newdatemili - dbmili;

// diff = diff/(1000*60*60*24*30*12)

// accuage = Math.floor(diff);


// console.log("Your age is"+" "+ accuage);
// console.log("Your birth year is " +  birthyear  );










// chapter # 35 to 38

// Q1

// function date(){
//     var now = new Date()
//     document.write(now);
// }

// date();

// Q2

// function greet(fname,lname){
//     document.write(fname +lname)
// }
// greet("Fazee","Ahmed")


// Q3

// function addnumber(num1,num2){
//       var z = num1 + num2
//         return z;
// }

// var y = addnumber(25,30)
// document.write(y)


// Q4

// function cal(num1 , num2){
//         return num1 * num2
// }
// var b = cal(2, 2);


// document.write(b)


// Q6


// var numstart = prompt("Enter first number")
// var lastend = prompt("Enter Last number")

// function counting(){
//   for(i = numstart; i <= lastend; i++){
//        console.log(i); 
//   }
// }
// counting();


// Q10

// function checkpalindrome(){


// var string = prompt("Enter the word");

// var wordvalue = string.split('');
// var wordreverse = wordvalue.reverse();

// var wordstring = wordreverse.join('');

// if (string === wordstring) {
//   document.write('It is a palindrome');
// }
// else {
//   document.write('It is not a palindrome');
// }

// }
// checkpalindrome()



