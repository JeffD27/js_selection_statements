
 /*Exercise 1*/
let i = Math.round(Math.random()*10)
let fav_num = prompt(`What is favorite number (0-10)? (Hint: the answer is ${i}`)
while (true){
  if (fav_num > i){fav_num= prompt("Too high")}
  else if (fav_num < i){fav_num= prompt("Too low")}
  else {prompt("Congratulations!!! Click ok to continue to exercise 2"); break}
}

 /*Exercise 2*/
console.log("ex 2")
let birthMonth = prompt("What is your birth month?")
switch(birthMonth){
  case 'December':
  case 'January':
  case 'February':
    console.log("You were born in Winter")
    break;
  
  case 'March':
  case 'April':
  case 'May':
    console.log("You were born in Spring")
    break;
  case'August':
  case 'July':
  case 'June':
    console.log("You were born in Summer")
    break;
  case 'September':
  case 'October':
  case 'November':
    console.log("You were born in Fall")
    break;
  default: birthMonth = prompt("Please enter a valid month")
}

/* Escercise 3 */


let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
     type = "Tank top"
     break;
  case "02":
     type = "T-Shirt";
     break;
  case "03":
     type = "Long Sleeve";
     break;
  case "04":
      type = "Sweat Shirt";
      break;
 default:
      type = "Other";
      break;}


switch(colorId){
case "BL":
  color = "Black"
  break;
case "BLU":
  color = "Blue"
  break;
case "PU":
  color = "Purple";
  break;
default:
  color = "White";
  break;
}

switch(sizeId){
  case "S": 
     size = "Small";
     break;
  case "M":
     size = "Medium";
     break;
  case "L":
      size = "Large";
      break;
  case "XL":
      size = "Extra Large";
      break;
  default:
      size = "One Size Fits All";
      break;
}

console.log(`Product: ${size} ${color} ${type}`);
