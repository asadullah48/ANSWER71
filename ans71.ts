// Q 71
// Using `let` for a variable that can be reassigned
// Using `let` for a variable that can be reassigned
let age = 49;
age = 48; // Works fine because `let` allows reassignment
console.log(age); // Shows 26
// Trying to reassign a `const`-declared variable
let naming = "Asadullah";
try {
  naming = "shafiqueson"; 
} catch (error) {
  console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}
// This example illustrates that `const` prevents changing the variable once it's set.

// Trying to reassign a `const`-declared variable

//const calling = "Asadullah";
//try {
 // calling = "Shafiquesons"; // This line will cause an error
//} catch (error) {
//  console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
//}
// This example illustrates that `const` prevents changing the variable once it's set.