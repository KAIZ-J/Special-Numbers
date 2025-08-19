const body = document.body;
const inputVal = document.getElementById("number");
const selection = document.getElementById("select");
const message = document.getElementById("message");
const defs = {
    prime: "A number greater than 1 with only two factors: 1 and itself.",
    sqrt: "A perfect square is a number whose square root is a whole number.",
    cube: "A perfect cube is a number whose cube root is a whole number.",
    palindrome: "A number that reads the same forward and backward.",
    perfect: "Sum of proper divisors equals the number.",
    harshad: "A number divisible by the sum of its digits.",
    armstrong:
      "Sum of each digit raised to power of total digits equals the number.",
    fibonacii: "Appears in the Fibonacci sequence (0, 1, 1, 2, 3...)",
    neon: "Sum of digits of square of the number equals the number.",
    automorphic: "A number whose square ends with the number itself.",
    spy: "Sum of digits equals product of digits.",
    abundant: "Sum of proper divisors is greater than the number.",
  };
  let currentSelected = localStorage.getItem("currentSelected") || "prime"; 
  function definition(given){
document.getElementById("description").innerHTML =
    defs[given] || "You can find descriptions here";
   let options = [...document.querySelectorAll("option")];
  let index =  options.findIndex(el=>el.value===given)
   options[index].setAttribute("selected",true)
  }
  definition(currentSelected)
  
function resultMessage(msg,val){
  if (val===true) {
    message.innerHTML = `It is ${msg} Number ✅`;
    body.style.backgroundColor = "#3CB371";
  } else {
    message.innerHTML = `Not ${msg} Number ❌`;
    body.style.backgroundColor = "#9e1b32";
  }
}
function palindrome() {
  const reversed = inputVal.value.split("").reverse().join("");
  if (inputVal.value === reversed) {
    resultMessage("Palindrome",true)
  } else {
    resultMessage("Palindrome",false)
  }
}
function prime() {
  const num = Number(inputVal.value);
  if(num<2){
    resultMessage("Prime",false)
      return;
  }
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      resultMessage("Prime",false)
      return;
    }
  }
  resultMessage("Prime",true)
}
function armstrong() {
  const num = inputVal.value
    .split("")
    .map((item) => Number(item) ** inputVal.value.length)
    .reduce((acc, el) => acc + el, 0);
  if (num === Number(inputVal.value)) {
    resultMessage("Armstong",true)
  } else {
   resultMessage("Armstong",false)
  }
}
function perfect() {
const num = Number(inputVal.value);
  if (num === 0) {
    message.innerHTML =
      "Zero has divisors, but it also has negative divisors, and the definition of a perfect number relies on positive divisors.";
    body.style.backgroundColor = "";
    return;
  }
  let sum = 0;
  for (i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  if (num === sum) {
    resultMessage("Perfect",true)
  } else {
    resultMessage("Perfect",false)
  }
}
function harshad() {
  const num = Number(inputVal.value);
  if (num === 0) {
    message.innerHTML = "Undefined(for now...)";
    body.style.backgroundColor = "";
    return;
  }
 const digitsSum = inputVal.value
    .split("")
    .map(Number)
    .reduce((acc, el) => acc + el, 0)
  if (num % digitsSum === 0) {
  resultMessage("Harshard",true)
  } else {
    resultMessage("Harshard",false)
  }
}
function fibonacii() {
  const num = Number(inputVal.value);
  if (num === 0) {
    resultMessage("Fibonacii",true)
    return;
  }
  let myArray = [0, 1];
  for (let i = 2; ; i++) {
    let term = myArray[i - 1] + myArray[i - 2];
    if (term > num) break;
    if (num === term) {
      resultMessage("Fibonacii",true);
      break;
      return;
    }
  }
  resultMessage("Fibonacii",false)
}
function sqrt() {
  const num = Number(inputVal.value)
  let sqrt = Math.sqrt(num);
   num % sqrt === 0?resultMessage("Perfect square",true):resultMessage("Pefect square",false)
}
function cube() {
  const num = Number(inputVal.value)
  let cube = Math.cbrt(num);
   num % cube === 0?resultMessage("Perfect cube",true):resultMessage("Pefect cube",false)
}
function neon() {
  const num = Number(inputVal.value)
  const val = (num**2).toString().split("").map(Number).reduce((acc,el)=>acc+el,0)
  num === val?resultMessage("Neon",true):resultMessage("Neon",false)
}
function automorphic() {
  const num = Number(inputVal.value)
  const sliceFrom = -1 * inputVal.value.length;
 const numSqrLastDigits = Number((num**2).toString().slice(sliceFrom))
   num === numSqrLastDigits?resultMessage("Automorphic",true): resultMessage("Automorphic",false)
}
function spy() {
 const digitsSum = inputVal.value
    .split("")
    .map(Number)
    .reduce((acc, el) => acc + el, 0)
 const digitsProduct = inputVal.value
    .split("")
    .map(Number)
    .reduce((acc, el) => acc * el, 1)
digitsSum === digitsProduct?resultMessage("Spy",true): resultMessage("Spy",false)
}
function abundant() {
 const num = Number(inputVal.value);
  let sum = 0;
  for (i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  num < sum?resultMessage("Abundant",true): resultMessage("Abundant",false)
}

function work() {
  if (selection.value === "cube") {
    cube();
  } else if (selection.value === "sqrt") {
    sqrt();
  } else if (selection.value === "prime") {
    prime();
  } else if (selection.value === "palindrome") {
    palindrome();
  } else if (selection.value === "armstrong") {
    armstrong();
  } else if (selection.value === "perfect") {
    perfect();
  } else if (selection.value === "fibonacii") {
    fibonacii();
  } else if (selection.value === "harshad") {
    harshad();
  } else if (selection.value === "neon") {
    neon();
  } else if (selection.value === "automorphic") {
    automorphic();
  } else if (selection.value === "spy") {
    spy();
  } else if (selection.value === "abundant") {
    abundant();
  } else {
    message.innerHTML = "Choose your Number checker❌";
  }
  
}
function eventCI(){
  currentSelected=selection.value;
  localStorage.setItem("currentSelected",currentSelected)
 definition(currentSelected)
if (inputVal.value === "") {
    message.innerHTML = "Input is empty";
    body.style.backgroundColor = "";
    return;
  }
  work();}
selection.addEventListener("change", eventCI);
inputVal.addEventListener("input", eventCI);
