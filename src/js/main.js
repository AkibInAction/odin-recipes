
const input = require('prompt-sync')();
let cuppon_code = "FREEFOOD";
let tarbooj = 100;

let intercupon = input("Enter your cuppon code: ");

if (intercupon == cuppon_code) {
  // Option 1: tarbooj = tarbooj / 2; (Value ko update kiya)
  // Option 2 (Short-cut): tarbooj /= 2; 
  tarbooj = tarbooj / 2; 
  
  console.log("Discount mila! New price: " + tarbooj);
} 
else {
  console.log("No discount. Price: " + tarbooj);
}
