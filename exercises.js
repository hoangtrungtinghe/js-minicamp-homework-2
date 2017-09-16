// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  var result;
  x>=y?result=x: result=y;
  return result;
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  var result;
  switch(language){
    case 'German': result='Guten Tag!';break;
    case 'English': result='Hello!';break;
    case 'Spanish': result='Hola!';break;
    default: result='Hello!';
  }
  return result;
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  var result=false;
  if(num===10 || num===5){
    result=true;
  }
  return result;
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  var result=false;
  if(num>20 && num<50){
    result=true;
  }
  return result;
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  var result=false;
  if(Number(num.toFixed(4))*1000%1000===0){
    result=true;
  }
  return result;
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  var result;
  num%3===0?num%5===0?result='fizzbuzz':result='fizz':(num%5===0?result='buzz':result=num);
  return result;
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  var result=true;
  if(num===0 || num===1){
    result=false;
  }
  for(var i=2;i<num-1;i++){
    if(num%i===0){
      result=false;
    }
  }
  return result;
}

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for(var i=0;i<arr.length;i++){
    arr[i]++;
  }
  return arr;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  var result='';
  for(var i=0;i<words.length;i++){
    i===words.length-1?result+=words[i]:result+=words[i]+' ';
  }
  return result;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  var result=false;
  for(var i=0;i<arr.length;i++){
    if(item===arr[i]){
      result=true;
    }
  }
  return result;
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  var result=0;
  for(var i=0;i<numbers.length;i++){
    result+=numbers[i];
  }
  return result;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  var result=0;
  for(var i=0;i<testScores.length;i++){
    result+=testScores[i];
  }
  result/=testScores.length;
  return result;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  var result=numbers[0];
  for(var i=1;i<numbers.length;i++){
    if(result<numbers[i]){
      result=numbers[i];
    }
  }
  return result;

}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
