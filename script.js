// 1.Implement a function that takes an array of numbers as input and returns the sum of all the numbers.

// let numberArray=[1,2,3,4,5]
// let add=0
// function sum(number){
//     for(let i=0;i<number.length;i++){
//      add = number[i] + add
//     }
//     console.log(add);

// }
// sum(numberArray);
/////********************************************************* */////////////

// 2.Write a function that takes an array of strings as input and returns a new array with all the strings capitalized.

// let letters=['a', 'b', 'c', 'd', 'e'];
// let capitalizeArray=[];

// function capitalizeLetters(letter){
//     for(let i=0;i<letter.length;i++){
//     capitalizeArray.push(letter[i].toUpperCase());
//     }
//     console.log(capitalizeArray);
// }
// capitalizeLetters(letters)

////************************************************************************************** */

// 3.Implement a function that takes a string as input and returns the number of vowels in the string.
// let stringName = 'amit';
// let vowelsArray = ['a','i','o','u','e'];
// let count=0
//  function vowelsCount(letters){
//     for(let str of letters.toLowerCase()){
//         if(vowelsArray.includes(str)){
//             count++;
//         }
//     }
//     console.log(count);
//     };
//     vowelsCount(stringName);

////////************************************************************************************ */
//  4.Write a function that takes two arrays as input and returns a new array with all the elements that are common to both arrays.
//  let array1= ['a', 'b', 'c','j'];
//  let array2 =['a', 'b', 'd','g','j'];

//  function newArray(x,y){
//     let commonArray = [];
//     for (let i=0;i<x.length;i++){
//         for(let j=i;j<y.length;j++){
//         if(x[i]==y[j]){
//             commonArray.push(x[i]);
//         }
//         }
//     }
//     console.log(commonArray);

//  }
//  newArray(array1,array2);

/////////////////////********************************************************************************************* */
// 5.Implement a function that takes an array of objects and sorts the objects by a specific property.

// let obj=[
//     {name:'amit',age:"25"},
//     {name:'sonu',age:"30"},
//     {name:'anit',age:"20"},
//     {name:'priya',age:"23"},

 
// ];
//  function sortobject(x,property){

// let sortedObject=x.sort((a,b)=> a[property]-b[property])
// console.log(sortedObject);

//  }
//  sortobject(obj,"age")

// 6.Write a function that takes a number as input and returns a boolean indicating whether the number is prime.

// let number = 10;
// let secondnumber =2;
// function primeNumber(x){
//   if (x<2){
//     console.log(false);
//   }
// else if(x % secondnumber == 0 ){
//     console.log(false);
// } else{
//     console.log(true);

// }
// }
// primeNumber(number);

// 7.Implement a function that takes a string as input and returns the reverse of the string.

// let str="amit";
//  function reverseStr(x){
//     let newstr=x.split('').reverse().join('')
//     console.log(newstr);
//  }
//  reverseStr(str);

//////////////*************************************************************************************************** */

// 8.Write a function that takes an array of numbers as input and returns the largest and smallest numbers in the array.
// let numberArray =[1,22,73,4,5];
//  let smallestNumber;
//  let largestNumber;
//  function numbersArray(x){
//   let sortedArray=  x.slice().sort((a,b)=>{
//         return a-b;
//     });
//     smallestNumber=sortedArray[0];
//     largestNumber=sortedArray[sortedArray.length-1];
//     console.log(largestNumber)
//     console.log(smallestNumber)
//  }
//  numbersArray(numberArray);
/////////**************************************************************//////////////// */
// 9.Implement a function that takes a string as input and returns the number of words in the string.

// let str = "amit";
// let count = 0;
// function getStrCount(x){
//  count =x.length;
//  console.log(count);
// }
// getStrCount(str);
// 10.Write a function that takes an array of numbers as input and returns a new array with only the even numbers.

// let number = [1,5,6,3,8,9,10,12];
// let evennumber = number.filter((num)=>{
//     num % 2 ===0;
// })
// console.log(evennumber);


//another apporrach 
// let number = [1,5,6,3,8,9,10,14,20,12];
//  let newArray = [];
//  function getEvenNumbers(x){
//     for(let i=1; i<x.length; i++){
//         if(x[i]%2===0){
//             newArray.push(x[i]);
//         }
//     }
//         console.log(newArray)
   
//  };
//  getEvenNumbers(number);
//////////////************************************************************* */
// 11.Implement a function that takes two strings as input and returns a boolean indicating whether the two strings are anagrams.
// let str1="slient";
// let str2='listen';

// function checkAnagrams(a,b){
//   if(a.length!==b.length){
//     console.log('false');
    
//   }
// let sorta= a.split('').sort().join('');
// let sortb= b.split('').sort().join('');
//   if(sorta==sortb){
//     console.log('true');
//   }

 
  
// };
// checkAnagrams(str1,str2);

////////////*********************************************************************************************************************************8 */
// 12.Write a function that takes an array of objects and returns a new array with only the objects that have a specific property.
// let obj=[
//     {name:'amit',age:'25'},
//     {name:'ankit',age:'25',pancard:'KHY3456'},
//     {name:'sonu',age:'25',pancard:'KHY3456'},
//     {name:'anit',age:'25'},
//     {name:'amit',age:'25',mobile:'889097878'},
//     {name:'priya',age:'22'}
// ]
// function filterObject(objects, property) {
//   return objects.filter(obj => obj.hasOwnProperty(property));
  
// }
// let newarray= filterObject(obj,'mobile');
// console.log(newarray);
//////**************************************************************************************************************************************** */
// 13.Implement a function that takes a string as input and returns a boolean indicating whether the string is a palindrome.

// let str = "noon";
//  function palindrome(str) {
//     return str=== str.split("").reverse().join("");
//  }
//  console.log(palindrome(str));
//////************************************************************************************************************************************///////
// 14.Write a function that takes an array of numbers as input and returns the median value of the array.

// let numberArray=[2,4,5,9,18,32];

// function getMedian(x){
// let sortedArray = x.slice().sort((a,b) => a-b);
// let lenght = sortedArray.length;
// let middleIndex = Math.floor(lenght / 2);
// if(lenght%2===0){
//     return (sortedArray[middleIndex-1] + sortedArray[middleIndex]) / 2;

// }else{
//     return (sortedArray[middleIndex] );
// }

// }
//   console.log(getMedian(numberArray));
//************************************************************************************************************* */
// 15.Implement a function that takes a string as input and returns a new string with all the vowels removed.
// let str ="amit";
// let vowelsArray =['a','i','o','u','e'];
//  function vowlesRemoved(x){
// let newstr='';
// for (let i=0; i<x.length; i++){
//     if(!vowelsArray.includes(x[i])){
//         newstr +=x[i];
//     }
// }
//    return newstr
//  }

//  console.log(vowlesRemoved(str));
 //////////////////////*********************************************************************************************** */