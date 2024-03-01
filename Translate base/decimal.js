let number = document.getElementById('number')
let base = document.getElementById('base')

function decimalToBase(decimalNumber, base) {
  const digitLookup = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  while (decimalNumber > 0) {
    let digit = decimalNumber % base;
    result = digitLookup[digit] + result;
    decimalNumber = Math.floor(decimalNumber / base);
  }
  return result;
}

document.querySelector("submit").addEventListener('click', (event) =>{
  event.preventDefault;
 console.log(decimalToBase(number.value, base.value));
})

