// // Q1
// var num=prompt("Enter a number");
// console.log(num);

// // Q2
// var num = prompt("Enter a number");
// if (num % 3 == 0 && num % 4 == 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// // Q3
// var num1 = prompt("Enter the first number");
// var num2 = prompt("Enter the second number");
// if (num1 > num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }

// // Q4
// var num = prompt("Enter the number");
// if (num > 0) {
//   console.log("Positive");
// } else if (num == 0) {
//   console.log("Number=0");
// } else {
//   console.log("Negative");
// }

// // Q5
// var num1 = prompt("Enter the first value");
// var num2 = prompt("Enter the second value");
// var num3 = prompt("Enter the third value");
// if (num1 > num2 && num1 > num3) {
//   console.log("Num1 is the max");
// } else if (num2 > num1 && num2 > num3) {
//   console.log("Num2 is the max");
// } else {
//   console.log("Num3 is the max");
// }

// // Q6
// var num = prompt("Enter the number");
// if (num == 0) {
//   console.log("num is zero");
// } else if (num % 2 == 0) {
//   console.log("num is even");
// } else {
//   console.log("num is odd");
// }

// // Q8
// var character = prompt("Enter the character");
// if (
//   character == "a" ||
//   character == "e" ||
//   character == "i" ||
//   character == "o" ||
//   character == "u" ||
//   character == "A" ||
//   character == "E" ||
//   character == "I" ||
//   character == "O" ||
//   character == "u"
// ) {
//   console.log("character is vowel");
// } else {
//   console.log("character is consonant");
// }

// // Q9
// var num = Number(prompt("enter the number"));
// var blackBox = " ";
// for (var i = 0; i < num; i++) {
//   blackBox += i + 1 + " ";
// }
// console.log(blackBox);

// // Q10
// var num = Number(prompt("enter the number"));
// var blackBox = "";
// for (var i = 0; i < 12; i++) {
//   blackBox += num * (i + 1) + " ";
// }
// console.log(blackBox);

// // Q11
// var num = Number(prompt("enter the number"));
// var blackBox = " ";
// for (var i = 0; i < num; i++) {
//   if (i == 0) {
//     console.log("");
//   } else if (i % 2 == 0) {
//     blackBox += i + " ";
//   }
// }
// console.log(blackBox);

// // Q12
// var num = prompt("Enter the number");
// var power = prompt("Enter the power");
// var res = 1;
// for (var i = 0; i < power; i++) {
//   res *= num;
// }
// console.log(res);

// // Q12
// var num1 = Number(prompt("Enter the first number"));
// var num2 = Number(prompt("Enter the second number"));
// var num3 = Number(prompt("Enter the third number"));
// var num4 = Number(prompt("Enter the fourth number"));
// var num5 = Number(prompt("Enter the fifth number"));
// console.log("Total marks = " + Number(num1 + num2 + num3 + num4 + num5));
// console.log(
//   "Average marks = " + Number((num1 + num2 + num3 + num4 + num5) / 5)
// );
// console.log("Percentage = " + Number((num1 + num2 + num3 + num4 + num5) / 5));

// // Q13
// var month = Number(prompt("Enter the month"));
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("Days in Month: 31 days");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("Days in Month: 30 days");
//     break;
//   case 2:
//     console.log("Days in Month: 28 days");
//     break;
//   default:
//     console.log("Invalid month");
// }

// // Q14
// var Physics = +prompt("Enter Physics grade");
// var Chemistry = +prompt("Enter Chemistry grade");
// var Biology = +prompt("Enter Biology grade");
// var Mathematics = +prompt("Enter Mathematics grade");
// var Computer = +prompt("Enter Computer grade");
// var percentage = (Physics + Chemistry + Biology + Mathematics + Computer) / 5;
// if (percentage > 100 || percentage < 0) {
//   console.log("Enter a valid percentage");
// } else if (percentage >= 90 && percentage <= 100) {
//   console.log("Grad A");
// } else if (percentage >= 80) {
//   console.log("Grad B");
// } else if (percentage >= 70) {
//   console.log("Grad C");
// } else if (percentage >= 60) {
//   console.log("Grad D");
// } else if (percentage >= 40) {
//   console.log("Grad E");
// } else {
//   console.log("Grad F");
// }

// ====================== Switch Case ====================
// Q15
// var month = Number(prompt("Enter the month"));
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("Days in Month: 31 days");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("Days in Month: 30 days");
//     break;
//   case 2:
//     console.log("Days in Month: 28 days");
//     break;
//   default:
//     console.log("Invalid month");
// }

// Q16
// var character=prompt("Enter the character");
// switch(character){
//     case("a"):
//     case('e'):
//     case('o'):
//     case('u'):
//     case('i'):
//     console.log("Vowel");
//     break;
//     default:
//     console.log("consonant");
// }

// // Q17
// var num1=prompt("Enter the first number");
// var num2=prompt("Enter the second number");
// switch(true){
// case num1>num2:
//     console.log("Num1 is the max");
//     break;
// case num1<num2:
//     console.log("Num2 is the max");
//     break;
// default:
//     console.log("Num1=Num2");
// }

// // Q18
// var num=prompt("Enter the first number");
// switch(true){
// case (num%2==0):
//     console.log("Number is even");
//     break;
//     case(num%2!=0):
//     console.log("Number is Odd");
//     break;
//         }

// // Q19
// var num=prompt("Enter the number");
// switch(true){
// case num>0:
// console.log("Positive");
// break;   
// case num<0:
//     console.log("Negative");
//     break;
//     default:
//         console.log("Number is zero") 
// }

// // Q20
// var num1=+prompt("Enter the first number");
// var num2=+prompt("Enter the second number");
// var required=prompt("Enter the required operation")
// switch(required){
//     case '+':
//         console.log(num1+num2);
//         break;
//     case '-':
//         console.log(num1-num2);
//         break;
//     case '*':
//         console.log(num1*num2);
//         break;
//     case '/':
//         console.log(num1/num2);
//         break;
//         default:
//             console.log("Enter a valid operation");
// }