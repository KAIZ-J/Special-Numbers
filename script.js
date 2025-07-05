    function palindrome() {
       const body = document.body;
        const isrt = document.getElementById("number").value;
        const mess = document.getElementById("message");
        if (isrt === "") {
          mess.innerHTML = "Input is empty";
          body.style.backgroundColor="";
          return;
        }

        let reversed = isrt.split("").reverse().join("");
        if (isrt === reversed) {
          mess.innerHTML = "It is a Palindrome number ✅";
          body.style.backgroundColor="#3CB371";
        } else {
          mess.innerHTML = "Not palindrome number ❌";
          body.style.backgroundColor="#9e1b32";
        }
      }
      function prime() {
        const body = document.body;
        const isrt = document.getElementById("number").value;
        const mess = document.getElementById("message");
        if (isrt === "") {
          mess.innerHTML = "Input is empty";
          body.style.backgroundColor="";
          return;
        }
        const inum = Number(isrt);
        if (inum === 0 || inum === 1 || inum<0) {
          mess.innerHTML =
            "not prime number";
             body.style.backgroundColor="";
          return;
        }
        for (i = 2; i < inum; i++) {
          if (inum % i === 0) {
            mess.innerHTML = "not prime number ❌";
            body.style.backgroundColor="#9e1b32";
            return;
          }
        }

        mess.innerHTML = "it is prime number✅";
        body.style.backgroundColor="#3CB371";
      }
      function armstrong() {
        const body = document.body;
        const isrt = document.getElementById("number").value;
        const mess = document.getElementById("message");
        if (isrt === "") {
          mess.innerHTML = "Input is empty";
          body.style.backgroundColor="";
          return;
        }
        let inum = Number(isrt);
        let inums = inum.toString();
        let inuml = inums.length;
        let array = inums.split("");
        let intArray = array.map(Number);
        let intArray4 = intArray.map((num) => num ** inuml);
        let sum = 0;
        for (let i = 0; i < inuml; i++) {
          let term = intArray4[i];
          sum += term;
        }
        if (inum === sum) {
          mess.innerHTML = "it is Armstrong Number ✅";
          body.style.backgroundColor="#3CB371";
        } else {
          mess.innerHTML = "not armstrong number❌";
          body.style.backgroundColor="#9e1b32";
        }
      }
      function perfect() {
        const body = document.body;
        const isrt = document.getElementById("number").value;
        const mess = document.getElementById("message");
        if (isrt === "") {
          mess.innerHTML = "Input is empty";
          body.style.backgroundColor="";
          return;
        }
        let inum = Number(isrt);
        if (inum === 0) {
          mess.innerHTML =
            "Zero has divisors, but it also has negative divisors, and the definition of a perfect number relies on positive divisors.";
            body.style.backgroundColor="";

            return;
        }
        let sum = 0;
        let terms = "";
        for (i = 1; i < inum; i++) {
          if (inum % i === 0) {
            sum += i;
            terms += `${i},`;
          }
        }
        terms = terms.slice(0, -1);
        if (inum === sum) {
          mess.innerHTML = `✅ it is perfect, if you need the numbers ${terms}`;
          body.style.backgroundColor="#3CB371";
        } else {
          mess.innerHTML = "not perfect number ❌ ";
          body.style.backgroundColor="#9e1b32";
        }
      }
      function harshad() {
        const body = document.body;
        const isrt = document.getElementById("number").value;
        const mess = document.getElementById("message");
        if (isrt === "") {
          mess.innerHTML = "Input is empty";
          body.style.backgroundColor="";
          return;
        }
        let inum =Number(isrt);
        if (inum === 0) {
          mess.innerHTML =
            "Undefined(for now...)";
            body.style.backgroundColor="";
            return;
        }
        let inums = inum.toString();
        let inuml = inums.length;
        let array = inums.split("");
        let intArray = array.map(Number);
        let sum = 0;
        for (let i = 0; i < inuml; i++) {
          let term = intArray[i];
          sum += term;
        }
        if (inum % sum === 0) {
          mess.innerHTML = "It is harshard number✅";
          body.style.backgroundColor="#3CB371";
        }  else {
          mess.innerHTML = "unfortunatly not harshard ❌";
          body.style.backgroundColor="#9e1b32";
        }
      }
      function fibonacii() {
        const body = document.body;
        const isrt = document.getElementById("number").value;
        const mess = document.getElementById("message");
        if (isrt === "") {
          mess.innerHTML = "Input is empty";
          body.style.backgroundColor="";
          return;
        }
        let inum=Number(isrt);
        if (inum === 0) {
          mess.innerHTML =
            "it is in the fibonacii series ✅";
            body.style.backgroundColor="#3CB371";
            return;
        }
        let myArray = [0, 1];
        for (let i = 2; ; i++) {
          let term = myArray[i - 1] + myArray[i - 2];
          myArray.push(term);
          if (term > inum) break;
          if (inum === term) {
            mess.innerHTML = "it is in the fibonacii series ✅";
            body.style.backgroundColor="#3CB371";
            return;
          }
        }
          mess.innerHTML = "not in the fibonacii series ❌";
          body.style.backgroundColor="#9e1b32";
        
      }
      function sqrt() {
        const body = document.body;
        const isrt = document.getElementById("number").value;
        const mess = document.getElementById("message");
        if (isrt === "") {
          mess.innerHTML = "Input is empty";
          body.style.backgroundColor="";
          return;
        }
        let inum=Number(isrt);
        if (inum === 0) {
          mess.innerHTML =
            "✅ it's perfect square (it fits this definition of a perfect square)";
            body.style.backgroundColor="#3CB371";
            return;
        }
        let sqrt = Math.sqrt(inum);
        if (inum % sqrt === 0) {
          mess.innerHTML = `✅ it's perfect square and it's sqrt is ${sqrt}`;
          body.style.backgroundColor="#3CB371";
        }
        else {
          mess.innerHTML = `not peferct square ❌`;
          body.style.backgroundColor="#9e1b32";
        }
      }
      function cube() {
        const body = document.body;
        const isrt = document.getElementById("number").value;
        const mess = document.getElementById("message");
        if (isrt === "") {
          mess.innerHTML = "Input is empty";
          body.style.backgroundColor="";
          return;
        }
        let inum=Number(isrt);
         if (inum<0) {
          mess.innerHTML =
            "not whole number";
            body.style.backgroundColor="";
            return;
        }
        let cbrt = Math.cbrt(inum);
        if (inum % cbrt === 0) {
          mess.innerHTML = `✅ it's perfect cube and cbrt is ${cbrt}`;
          body.style.backgroundColor="#3CB371";
        }else {
          mess.innerHTML = `not perfect cube ❌`;
          body.style.backgroundColor="#9e1b32";
        }
      }
      function neon() {
        const body = document.body;
        const istr = document.getElementById("number").value;
        const mess = document.getElementById("message");
        if (istr === "") {
          mess.innerHTML = "Input is empty";
          body.style.backgroundColor="";
          return;
        }
        let inum = Number(istr);
        let inumsqr = inum ** 2;
        let inums = inumsqr.toString();
        let inuml = inums.length;
        let array = inums.split("");
        let intArray = array.map(Number);
        let sum = 0;

        for (let i = 0; i < inuml; i++) {
          let term = intArray[i];
          sum += term;
        }
        if (inum === sum) {
          mess.innerHTML = "it is a neon number✅";
          body.style.backgroundColor="#3CB371";
        } else {
          mess.innerHTML = "not in neon number❌";
          body.style.backgroundColor="#9e1b32";
        }
      }
      function automorphic(){
        const body = document.body;
        const istr = document.getElementById("number").value;
        const mess = document.getElementById("message");
        if (istr === "") {
          mess.innerHTML = "Input is empty";
          body.style.backgroundColor="";
          return;
        } 
        // input number
        let inum = Number(istr);
        let inums = inum.toString();
        let inuml = -1 * inums.length;
        // sqaure of the input
        let inumsqr = inum ** 2;
        let inumsqrs = inumsqr.toString();
        let inumsqrl = inumsqrs.length;
        // changing to array 
        let array = inumsqrs.split("");
        let intArray = array.map(Number);
        let spliced = intArray.slice(inuml);
        let numspliced = Number(spliced.join(""));
        if(inum===numspliced){
          mess.innerHTML = "it is a automorphic number✅";
          body.style.backgroundColor="#3CB371";
        }
        else {
          mess.innerHTML = "not in automorphic number❌";
          body.style.backgroundColor="#9e1b32";
        }
      }
        function spy() {
        const body = document.body;
        const isrt = document.getElementById("number").value;
        const mess = document.getElementById("message");
        if (isrt === "") {
          mess.innerHTML = "Input is empty";
          body.style.backgroundColor="";
          return;
        }
        let inum =Number(isrt);
        let inums = inum.toString();
        let inuml = inums.length;
        let array = inums.split("");
        let intArray = array.map(Number);
        let sum = 0;
        for (let i = 0; i < inuml; i++) {
          let term = intArray[i];
          sum += term;
        };
        let mul = 1;
        for (let x = 0; x < inuml; x++) {
          let termx = intArray[x];
          mul *= termx;
        }
        if (sum===mul) {
          mess.innerHTML = "It is spy number✅";
          body.style.backgroundColor="#3CB371";
        }  else {
          mess.innerHTML = "unfortunatly not spy ❌";
          body.style.backgroundColor="#9e1b32";
        }
      }
       function abundant() {
        const body = document.body;
        const isrt = document.getElementById("number").value;
        const mess = document.getElementById("message");
        if (isrt === "") {
          mess.innerHTML = "Input is empty";
          body.style.backgroundColor="";
          return;
        }
        let inum = Number(isrt);
         if (inum<0) {
          mess.innerHTML =
            "not whole number";
             body.style.backgroundColor="";
          return;
        }
        let sum = 0;
        for (i = 1; i < inum; i++) {
          if (inum % i === 0) {
            sum += i;
          }
        }
        if (inum < sum) {
          mess.innerHTML = `✅ it is abundant and sum of divisors ${sum}`;
          body.style.backgroundColor="#3CB371";
        } else {
          mess.innerHTML = "not abundant number ❌ ";
          body.style.backgroundColor="#9e1b32";
        }
      }

      function work() {
        const selection = document.getElementById("select");
        const mess = document.getElementById("message");
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
        } 
        else if (selection.value === "automorphic") {
          automorphic();
        } 
        else if (selection.value === "spy") {
          spy();
        } 
        else if (selection.value === "abundant") {
          abundant();
        } 
        else {
          mess.innerHTML = "Choose your Number checker❌";
        }
        const defs = {
  prime: "A number greater than 1 with only two factors: 1 and itself.",
  sqrt: "A perfect square is a number whose square root is a whole number.",
  cube: "A perfect cube is a number whose cube root is a whole number.",
  palindrome: "A number that reads the same forward and backward.",
  perfect: "Sum of proper divisors equals the number.",
  harshad: "A number divisible by the sum of its digits.",
  armstrong: "Sum of each digit raised to power of total digits equals the number.",
  fibonacii: "Appears in the Fibonacci sequence (0, 1, 1, 2, 3...)",
  neon: "Sum of digits of square of the number equals the number.",
  automorphic: "A number whose square ends with the number itself.",
  spy: "Sum of digits equals product of digits.",
  abundant: "Sum of proper divisors is greater than the number."
};
document.getElementById("description").innerHTML = defs[selection.value] || "You can find descriptions here";

      }
      document.getElementById("select").addEventListener("change", work);
      document.getElementById("number").addEventListener("input", work);