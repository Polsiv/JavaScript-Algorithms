function convertir(event) {
    event.preventDefault();
    const num = document.getElementById("number").value;
    const base1 = document.getElementById("base1").value;
    const base2 = document.getElementById("base2").value;
    
    if (base1 === "10") {
      // Convert from decimal to n base
      const result = decimalToBase(num, base2);
      document.getElementById("result").textContent = `Here's the result: ${result}`;
    } else if (base2 === "10") {
      // Converto from n base to desimal
      const result = baseToDecimal(num, base1);
      document.getElementById("result").textContent = `Here's de result: ${result}`;
    } else {
      // switch between diferent bases
      const decimal = baseToDecimal(num, base1);
      const result = decimalToBase(decimal, base2);
      document.getElementById("result").textContent = `Here's the result: ${result}`;
    }
  }
  
  function decimalToBase(num, base) {
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    while (num > 0) {
      const remainder = num % base;
      result = digits[remainder] + result;
      num = Math.floor(num / base);
    }
    return result;
  }
  
  function baseToDecimal(num, base) {
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = 0;
    const numDigits = num.toString().toUpperCase().split("").reverse();
    for (let i = 0; i < numDigits.length; i++) {
      const digitValue = digits.indexOf(numDigits[i]);
      result += digitValue * Math.pow(base, i);
    }
    return result;
  }