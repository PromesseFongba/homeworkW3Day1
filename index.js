
  // WEEK3 DAY 1 HOMEWORK
  
 /* function maxOfThree (y1, y2, y3) {
   if (y1 >= y2 && y1 >= y3) {
     return y1;
   } else if (y2 >= y1 && y2 >= y3) {
     return y2;
   } else {
     return y3;
   }
 };
 console.log(maxOfThree(4, 6, 3)); 
 console.log(maxOfThree(9, 3, 10)); 
 console.log(maxOfThree(4, 4, 4)); */


 /*function isCharAVowel (char){
   const vowels = ['a', 'e', 'i', 'o', 'u'];
   
   if (vowels.includes(char.toLowerCase())) {
     return true;
   } else {
     return false;
   }
 }
 console.log(isCharAVowel('a')); 
 console.log(isCharAVowel('B')); 
 console.log(isCharAVowel('e')); 
 console.log(isCharAVowel('x')); */
 
 /*const sumArray = function(numbers) {
   let sum = 0;
   
   for (let number of numbers) {
     sum += number;
   }
   
   return sum;
 };
 
 console.log(sumArray([2, 4, 5])); 
 console.log(sumArray([10, 20, 30, 40])); 
 console.log(sumArray([-1, 0, 1])); */

 /*function multiplyArray(numbers) {
   let product = 1;
 
   for (let number of numbers) {
     product *= number;
   }
 
   return product;
 }
 
 console.log(multiplyArray([2, 4, 5])); 
 console.log(multiplyArray([3, -2, 6])); 
 console.log(multiplyArray([1, 2, 3, 4, 5])); */


 /*const numArgs = function(...args) {
   return args.length;
 };
 
 console.log(numArgs()); 
 console.log(numArgs(1)); 
 console.log(numArgs(1, 2, 3)); 
 console.log(numArgs('a', 'b', 'c', 'd'));*/ 
 
 
 /*function reverseString(string) {
   let reversed = '';
 
   for (let i = string.length - 1; i >= 0; i--) {
     reversed += string[i];
   }
 
   return reversed;
 }
 
 console.log(reverseString('rockstar')); 
 console.log(reverseString('hello')); 
 console.log(reverseString('12345')); */


 function stringsLongerThan(strings, length) {
    const longerStrings = [];
  
    for (let string of strings) {
      if (string.length > length) {
        longerStrings.push(string);
      }
    }
  
    return longerStrings;
  }
  
  console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
  
  console.log(stringsLongerThan(['cat', 'dog', 'elephant', 'lion'], 4));
  
  console.log(stringsLongerThan(['apple', 'banana', 'pear'], 5));
 