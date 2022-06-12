const a = "myniceandonlypassword";
const b = "encryptionkeythatnobodywilleverguess%$##";

let s = "";

// use the longer of the two words to calculate the length of the result
for (let i = 0; i < Math.max(a.length, b.length); i++) {
  // append the result of the char from the code-point that results from
  // XORing the char codes (or 0 if one string is too short)
  s += String.fromCharCode((a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0));
}
console.log(s);

let y = "";

// use the longer of the two words to calculate the length of the result
for (let i = 0; i < Math.max(y.length, a.length); i++) {
  // append the result of the char from the code-point that results from
  // XORing the char codes (or 0 if one string is too short)
  y += String.fromCharCode((y.charCodeAt(i) || 0) ^ (a.charCodeAt(i) || 0));
}
console.log(y);
