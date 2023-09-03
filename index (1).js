const numbers = [1, 2, 3, 4, 5];

/*numbers.forEach(function(number, index) {
  console.log(`Element at index ${index} is ${number}`);
});

// Output:
// Element at index 0 is 1
// Element at index 1 is 2
// Element at index 2 is 3
// Element at index 3 is 4
// Element at index 4 is 5
*/
function print(numbers){
  console.log(numbers);
}
console.log(numbers.forEach(print));