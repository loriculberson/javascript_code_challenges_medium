// write code that manipulates the data in the 'numbers' array in such a way
// that the resulting data structure takes up significantly less memory

function cleanPhoneNumbers(numbers){
  let reg = /\D+/g;
  return numbers.map(function(num) {
    return Number(num.replace(reg, ''));
  })
}

module.exports = { cleanPhoneNumbers };

