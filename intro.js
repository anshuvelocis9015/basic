// console.log("i am an external js file");

// // converting number into String
// var myNum = 10;
// console.log(typeof (myNum + ""));

// var a1 = "10" + 5 + 4;//number typeof 1054 niche wala ka output hai
// console.log(typeof (+(parseInt(a1) + "")));//parseInt convert number into whole number ignoring the decimal value

// console.log(parseFloat("cdf"));//output:NaN //parseFloat convert number into number with decimal value
// console.log(isNaN("xsz"));//output:true //isNaN is a function which tells the given is NaN or not.If NaN then it gives true otherwise false

// var numConcate = "5" + 5;
// console.log(numConcate);//55

// var sumConcate = 5 + "5";
// console.log(sumConcate);//55

// var diffConcate = "5" - 5;
// console.log(diffConcate);//0

// var diffConcate1 = 5 - "5";
// console.log(diffConcate1);//0

// var normalSum = 5 + 5;
// console.log(normalSum);//10

// var decimalSum = 0.1 + 0.2;
// console.log(decimalSum.toFixed(2));//gives the output of that sum but it is fixed up to two places after decimal

// // let a = 0.00011001100110011; NaN is not a number which does not exist anshu-kumar which does not exist we cannot subtract so that's why it is NaN.
// // let b = 0.00110;
// // console.log(a+b);

// var decimalDiff = 0.2 - 0.1;
// console.log(decimalDiff);

// var decimalSum1 = 0.2 + 0.2;
// console.log(decimalSum1);

// console.log(true + true); //output: 2//true is 1 and false is 0
// console.log(true - false);//output:1
// console.log(false - true);//output:-1
// console.log("anshu" - "kumar");//output:NaN

// const a2 = 5;
// console.log(a2);//5

// // const b;//const keyword can be declare and initialise in a single line
// // b = 6;
// // console.log(b);

// // console.log(c);
// // const c;
// // c= 90;

// // console.log(c);
// // const c=90;

// // var a = 7;
// // var a = 8;
// // console.log(a);//a variable name can be re-declare with same name in the same execution context,but only it occur in var case 

// // let a = 7;
// // let a = 8;
// // console.log(a); //a variable name cannot be re-declare with same name in the same execution context,but only it occur in let case 

// // const a = 8;
// // const a = 9;
// // console.log(a);

// function abc() {
//     for (var a = 0; a < 3; a++) {//var is function scope means a can be accessible inside the function 
//         console.log(a);//0 1 2
//     }
//     console.log(a);//3
// }

// abc();

// function abc() {
//     for (let a = 0; a < 3; a++) {//let is block scope means a can only be accessible inside the curly braces only
//         console.log(a);//0 1 2
//     }
//     console.log(a);//here a is not defined
// }

// abc();

// const a3 = 7;

// function variableUse() {
//     const a3 = 9;//here a can be defined with same name in the above const a but it does not gives error because it is defined in another function execution context.
//     console.log(a3);
//     return function def() {
//         const a3 = 10;
//         console.log(a3, "def");
//     }
// }

// variableUse()();




// function validDriver(age, validDriverLicense) {
//     (age >= 18 && validDriverLicense) ? console.log("valid driver") : console.log("not valid driver");//ternary operator
// }

// validDriver(21, 1);

// var a4 = "10" + 5 + 4;//1054
// console.log(typeof (+(parseInt(a4) + "")));//typeof number

// console.log(parseFloat("5.02"));//5.02
// console.log(parseInt("5.02"));//5


// var b1 = 4.5;
// console.log(parseInt(b1));//4

// //function currying example
// function abc(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// const sum = abc(1.2)(2.1)(4.6);
// console.log(sum.toFixed(3));//fixed 3 places after decimal if you pass 2 then 2 places after decimal
// // function currying example


// //example of if-else
// function eligibleToVote(age, isCitizen, isRegister) {
//     if (age >= 18) {
//         if (isCitizen) {
//             if (isRegister) {
//                 console.log("You are eligible to give vote");
//             }
//             else {
//                 console.log("you are not eligible to give vote due to not registered");
//             }
//         }
//         else {
//             console.log("you are not eligible to give vote due to citizenship");
//         }
//     }
//     else {
//         console.log("you are not eligible due to age");
//     }
// }

// eligibleToVote(19, "India", "");


// //switch statement and use of break
// var a5 = 2;
// var b2 = 3;
// var result;
// var areaOfShape = "cube";

// switch (areaOfShape) {
//     case "square":
//         result = a5 * a5;
//         console.log(result);
//         break;

//     case "rectangle":
//         result = a5 * b2;
//         console.log(result);
//         break;

//     case "circle":
//         var r = 5;
//         result = 3.142 * (r * r);
//         console.log(result);
//         break;

//     default:
//         r = 9;
//         console.log("no shapes matches", r);//data types: 1.number/ 2.string/ 3.boolean/ 4.null/ 5.undefined/ 6.symbbol/ 7.object/
// }//no shapes matches 9

// let isPrime = true;
// function primeNumber(i) {
//     for (var num = 2; num < i; ++num) {
//         if (i % num === 0) {
//             isPrime = false;
//         }
//     }
//     if (isPrime) {
//         console.log("prime number");
//     }
//     else {
//         console.log("not prime number");
//     }

// }
// primeNumber(14);// which only cut by 1 and itself


// function leapYear(num) {//here num is parameter
//     if (((num % 4 === 0) && (num % 100 != 0)) || (num % 400 === 0)) {
//         console.log("leap year");
//     }
//     else {
//         console.log("not leap year");
//     }
// }
// leapYear(2024);//here 2024 is argument

// //immediately invoked function expression which is executed and called together IIFE
// (function abc() {
//     console.log("anshu");
// }());
// (function abc() {
//     console.log("anshu");
// })();
// //IIFE

// //TEMPLATE LITERALS
// let firstName = "anshu";
// let lastName = "kumar";
// console.log(`${firstName} ${lastName}`);//string interpolation means variable can be accessible inside string with the help of dollar sign with the help of bactick

// let text = `
// this is first line
// this is second line
// this is third line
// `;
// console.log(text);// it is also used for printing multiple line in separate line


// //arrow function if you have to write more than one line then you have to write the curly braces
// const arrowValue = (a, b) => console.log(`sum of arrowValues is ${a + b}`);//if you write single line then not have to write the curly braces
// arrowValue(5, 9);




// function xyz(a = 9, b = 10) {//default arguments
//     return a + b;
// }
// console.log(xyz(5));

// const arrowSquare = a => console.log(`Area of arrowSquare is ${a * a}`);//if there is single parameter then you dont have to write the bracket without use of bracket we can use it
// arrowSquare(5, 9);// but more than one parameter then you have to write the bracket


// function addWithOperator(a, b, c) {//a function with three arguments and performing operation based on the operator
//     // var result = `${a} ${c} ${b}`;
//     // return result;
//     let result;
//     switch (c) {
//         case "+":
//             result = a + b;
//             return result;

//         case "-":
//             result = a - b;
//             return result;

//         case "*":
//             result = a * b;
//             return result;

//         case "/":
//             if (b === 0) {
//                 return "0 is not allowed";
//             }
//             else {
//                 result = a / b;
//                 return result;
//             }

//         default:
//             return "no operator matches";
//     }
// }
// const addWithOperatorValue = addWithOperator(3, 4, '-');
// console.log(addWithOperatorValue);


// //anshu 
// //uhsna
// function reverseString(a) {
//     let result = "";
//     for (let i = a.length - 1; i >= 0; i--) {
//         result += a[i];
//     }
//     console.log(a);
//     return result;
// }
// const reversedString = reverseString("anshu kumar");
// // console.log(a);
// console.log(reversedString);


// //pallindrome check
// function isPallindrome(a) {
//     var result = "";
//     for (let i = a.length - 1; i >= 0; i--) {
//         result += a[i];
//     }
//     if (result === a) {
//         console.log("pallindrome")
//     }
//     else {
//         console.log("not pallindrome");
//     }
// }
// isPallindrome("xyx");

// const value8 = [1, 2, 3, 4, 5];//slice method accept two arguments first one from where i have to take the value and the second argument is not included before that value all are included and stored in an array
// console.log(value8.slice(1, 3));//[2,3]
// console.log(value8.at(-1));//last index 5
// console.log(value8.at(-2));//4
// console.log(value8.at(-5));//1

// const valueArray = new Array("apple", "banana", "orange", "pineapple");
// console.log(valueArray);//["apple","banana","orange","pineapple"]

// const fruit1 = [1, 2, 3, 4];
// fruit1.forEach((item, index, array) => {
//     array[index] = item ** 2;
// });
// console.log(fruit1);//forEach loop which changes directly in the array output 


// const fruit2 = [1, 2, 3, 4];
// fruit2.forEach((item, index, array) => {
//     array[index] = item ** 2;
// });
// console.log(fruit2);
// // console.log(fruit);

// const fruit3 = [1, 2, 3, 4];

// const valueMap = fruit3.map((currentItem) => {
//     return currentItem ** 3;
// });
// console.log(valueMap);//1 8 27 64

// const valueReduce = fruit3.reduce((prev, curr) => prev + curr, 0);
// console.log(valueReduce);//10

// const valueFilter = fruit3.filter((filter) => filter % 2 === 0);
// console.log(valueFilter);//2 4
// const valueFilter1 = fruit3.filter((filter) => { return filter % 2 === 0 });
// console.log(valueFilter1);//2 4
// const number = [1, 2, 3, 4, 5];
// console.log(number.length);//5
// number.push(6);//[1,2,3,4,5,6]
// number.pop();//[1,2,3,4,5]
// number.unshift(6);//[6,1,2,3,4,5]
// number.shift();//[1,2,3,4,5]
// number.splice(5, 0, 9);//[1,2,3,4,5,9]
// const newArray = number.slice(3, number.length - 1);
// console.log(number);//[1,2,3,4,5,9]

// console.log(newArray);//[4,5]
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const concatArray = arr1.concat(arr2);
// console.log(concatArray);//[1,2,3,4,5,6]

// const arr = [];
// for (var i = 0; i < 10; ++i) {
//     arr.push(i);
// }
// console.log(arr);//[0,1,2,3,4,5,6,7,8,9]

// const arr3 = [[7, 8, 9], [10, 11, 12], [13, 14, 15]];
// console.log(arr3.flat());//flat method convert a multidimensional array into one dimensional array and return a new array [7,8,9,10,11,12,13,14,15]


// console.log(number.indexOf(2, 3));//indexOf(searchElement,fromIndex) searchelement what element you want to search and from index means from that index in the array output = -1
// console.log(number.includes(3, 4));//include(searchElement,fromIndex) what you want to search , from that index output=false
// console.log(number.lastIndexOf(2, 5));//lastIndexOf(searchElement,fromIndex) always search the element from that index to the right side but in this lastindexof element will search from that index to the left side output:=1



// let number5 = 21;
// console.log(number5.toString());
// const value = number5.toString();
// console.log(typeof (value));
// const value2 = number5.toString(2);
// console.log(value2);
// const value3 = number5.toString(4);
// console.log(value3);
// const value4 = number5.toString(6);
// console.log(value4);
// const value5 = number5.toString(8);
// console.log(value5);
// const value6 = number5.toString(10);
// console.log(value6);
// const value7 = number5.toString(16);
// console.log(value7);

// console.log((10 ** 21.5).toString());
// console.log((10 ** 21.5).toString(8));

// const value9 = [1, 2, 3, 4, 5];
// console.log(value9.slice(1, 3));//[2,3]
// console.log(value9.at(-5));//1 .at(-1) always gives the last element of the array

// const months = ['jan', 'march', 'April', 'June', 'July'];

// months.push("Dec");
// console.log(months);
// const indexMarch = months.indexOf('march');
// console.log(indexMarch);


// months.splice(1, 1, "March");
// console.log(months);

// months.pop();
// console.log(months);

// const products = [
//     { name: "laptop", price: 1200 },
//     { name: "phone", price: 800 },
//     { name: "tablet", price: 300 },//output
//     { name: "smartwatch", price: 150 },//output
// ];
// const filteredPrice = products.filter((item) => item.price <= 500);
// console.log(filteredPrice);

// console.log(number.find((item) => {//find accepts argument as callback function which always gives the first value which satisfy the condition
//     return item % 2 === 0;
// }));
// console.log(number.findIndex((item) => {//findIndex accepts argument as callback function which always gives the index of that value which satisfy the given condition
//     return item % 2 === 0;
// }));


// const union = [1, 2, 3, 4, 1, 2, 6, 8, 4, 9, 3];// find the unique element and store in an array
// for (let item of union) {
//     console.log(item);//1,2,3,4,1,2,6,8,4,9,3
// }
// for (let item in union) {
//     console.log(item);//0 1 2 3 4 5 6 7 8 9 10
// }
// function uniqueArray() {
//     let uniqueArray1 = [];
//     for (let i = 0; i < union.length; ++i) {
//         let isUnique = true;
//         for (let j = 0; j < uniqueArray1.length; ++j) {
//             if (union[i] === uniqueArray1[j]) {
//                 isUnique = false;
//                 break;
//             }
//         }
//         if (isUnique) {
//             uniqueArray1.push(union[i]);
//         }


//     }
//     return uniqueArray1;
// }
// const finalValue = uniqueArray();
// console.log(finalValue);

// const valueUnique = union.filter((currItem, index, arr) => {
//     console.log(arr.indexOf(currItem), "<------>", index);
//     // console.log(arr.indexOf(currItem));
//     return arr.indexOf(currItem) === index;
// })
// console.log(valueUnique);
// console.log(new Set(union));

// const union1 = [1, 2, 3, 4, 1, 2, 6, 8, 4, 9, 3];
// union1.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     }
//     if (b > a) {
//         return 1;
//     }
// })
// console.log(union1);//descending order if a>b return 1 then it is in ascending order
// //1<2
// //2<3
// //3<4
// //4<1 return 1 means interchange their position and again repeat the same process again from starting so it is time consuming


// const string = "i am \"anshu kumar\"";
// console.log(string);//escape method  if you want to add double quotes inside the string when we write the string inside the double quotes then we use "\"method before as in above.

// const string1 = "i am 'developer'";
// console.log(string1);

// const string2 = "i am developer \n coder";
// console.log(string2);

// const string3 = "anshu kumar";
// console.log(string3.indexOf("Kumar"));//-1
// console.log(string3.indexOf("kumar"));//it only checks the first letter of the word it does not bother about the word how long the word output:- 6


// let str = "i am \"anshu\" kumar , anshu is a good developer";
// console.log(Array.from(str));
// // console.log(str);
// console.log(str.search(/Anshu/i));//6
// //search returns the index number where the first match is found . Returns -1 if no match is found case sensitive
// //match returns an array of the matched values or null if no match is found.
// //matchAll returns an iterator(we can get the data by using for loop) of all the matches ,providing detailed information about each match. returns empty iterator if no match found.
// console.log(str.match("anshu"));//here the js convert the normal text into regular expression str.match(/anshu/); without the g flag means global
// console.log(str.match(/Anshu/i));//here it means it does not mean whether the word is in lowercase or uppercase
// // [
// //   'anshu',
// //   index: 6,
// //   input: 'i am "anshu" kumar , anshu is a good developer',
// //   groups: undefined
// // ] this is the output of match wala


// console.log(str.match(/Anshu/gi));//globally jitna bhi anshu hoga text me sara aa jayega [ 'anshu', 'anshu' ]

// console.log(str.matchAll("anshu"));//here the js code convert the normal text into regular expression str.match(/anshu/g); also add the g flag at the end 
// //output:= Object [RegExp String Iterator] {}
// const values = str.matchAll("anshu");
// for (let item of values) {
//     console.log(item[0]);
// }
// //startsWith
// console.log(str.startsWith("i"));//it  gives true when the specified text starts with that word otherwise false
// console.log(str.endsWith("developer"));//it gives true when the specified text ends with that word otherwise false 

// let str1 = "this is string and now we implement some string methods     ";

// console.log(str1.substring(3, 20));//2nd argument is excluded

// console.log(str1.slice(0));//2nd argument is excluded 

// console.log(str1.replace(/i/g, "w"));//replace accepts two arguments 1st one is what you want to change and the 2nd argument is what you want to add at that place

// console.log(str1.replaceAll("s", "anshu"));//it replace all the word or letter wich matches
// console.log(str1.length);

// console.log(str1.trim().length);// trim method ignores the whitespace from both the end

// let str2 = "apple,banana,orange";
// console.log(str2);//"apple,banana,orange"
// console.log(str2.charAt(8));//n is the output----position 8 in the string it accepts argument as index
// console.log(str2.charCodeAt(0))//65 ASCCII CODE it accepts argument as index
// console.log(str2.split(","));//["apple","banana","orange"]
// console.log(str2.split(",").reverse());//["orange","banana","apple"]
// console.log(str2.split(",").reverse().join());//"orange,banana,apple"
// function atoz() {
//     for (let i = 97; i <= 122; ++i) {
//         console.log(String.fromCharCode(i));
//     }
//     //  for(let i = 65;i<=91;++i){
//     //     console.log(String.fromCharCode(i));
//     // }
// }
// atoz();
// for (let i = 65; i <= 90; ++i) {
//     console.log(String.fromCharCode(i));
// }

// let stringi = "my name is ding dong jingaa lalaa hoo";

// //a e i o u

// function countVowels() {
//     stringi = stringi.toLowerCase();
//     let count = 0;
//     for (let i = 0; i < stringi.length; ++i) {
//         if (stringi[i] === "a" || stringi[i] === "e" || stringi[i] === "i" || stringi[i] === "o" || stringi[i] === "u") {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels());

// function checkAllVowelPresentOrNot1() {
//     const vowels = "aeiou";
//     let sum = 0;
//     for (let i = 0; i < stringi.length; ++i) {
//         // console.log(vowels[i]);
//         // console.log(string1.includes(vowels[i]));
//         if (vowels.includes(stringi[i])) {
//             sum++;
//         }
//     }
//     return sum;
// }
// const allVowelCount = checkAllVowelPresentOrNot1();
// console.log(allVowelCount);

// function checkAllVowelPresentOrNot() {
//     const vowels = "aeiou";
//     for (let i = 0; i < vowels.length; ++i) {
//         // console.log(vowels[i]);
//         // console.log(stringi.includes(vowels[i]));
//         if (!stringi.includes(vowels[i])) {
//             return false;
//         }
//     }
//     return true;
// }
// const allVowel = checkAllVowelPresentOrNot();
// if (allVowel) {
//     console.log("all vowel is present");
// } else {
//     console.log("all vowel is not present");
// }
// // console.log(checkAllVowelPresentOrNot());


// const stringu = "this is baalal a smkfjfrutrieewowpdspe gtrhu abcdefghijklmnopqrstuvwxyz";

// function isPangram() {//all 26 alphabets are present or not
//     var allAlphabet = "";
//     for (let i = 97; i <= 122; ++i) {
//         allAlphabet = allAlphabet + String.fromCharCode(i);
//     }
//     // console.log(allAlphabet);
//     for (let char of allAlphabet) {
//         // console.log(stringu.includes(char));
//         if (!stringu.includes(char)) {
//             return false;
//         }
//     }
//     return true;
// }
// if (isPangram()) {
//     console.log("pangram")
// }
// else {
//     console.log("not pangram");
// }

// let s = "a";
// let bool = !!s;//bang bang operator
// console.log(bool);

// let piValue = Math.PI;
// console.log(piValue);

// let absoluteValue = Math.abs(-14);
// console.log(absoluteValue);

// let ceilValue = Math.ceil(4.67);
// console.log(ceilValue);

// let floorValue = Math.floor(3.89);
// console.log(floorValue);

// let roundValue = Math.round(6.4);
// console.log(roundValue);


// //Math.random() returns a random number between 0(nclusive) and 1(exclusive)
// console.log(Math.round(Math.random() * 100));


// //DOM Navigation
// console.log(document.body.childNodes);//dom tree ka data kaise tree like structure ban raha hai "enter marte hai wo text me include hota hai"
// console.log(document.body.children);//html collection hai h1 p script
// console.log(document.body.firstChild); //#text
// console.log(document.body.firstElementChild);//<h1>ReactJs Developer</h1>
// console.log(document.body.firstElementChild.nextElementSibling);//button wala ayega
// console.log(document.body.lastChild);//<script></script>
// console.log(document.body.lastElementChild);//<script></script>
// console.log(document.body.firstChild.nextSibling);//<h1>ReactJs Developer</h1>
// console.log(document.body.firstChild.nextElementSibling);//<h1>ReactJs Developer</h1>
// console.log(document.body.firstChild.nextElementSibling.previousSibling);//#text
// console.log(document.body.firstElementChild.nextElementSibling.previousElementSibling);//<h1>ReactJs Developer</h1>
// console.log(document.body.firstElementChild.nextElementSibling.previousSibling.previousSibling);//<h1>ReactJs Developer</h1>
// console.log(document.body.firstElementChild.nextElementSibling.previousSibling.previousSibling.parentElement);//<body>...</body>

// //DOM Searching
// console.log(document.getElementById("heading"));//get the element by id
// console.log(document.getElementsByClassName("list-of-nodes"));//get the element by classname HTMLCollection [ul.list-of-nodes]
// const findElementByClassName = document.getElementsByClassName("list-of-nodes");//get the iterable list-of-nodes  now we can iterate and get the data one by one
// console.log(...findElementByClassName);// output:
// //<ul class="list-of-nodes">
// //<li>1 node</li>
// //<li>2 node</li>
// //<li>3 node</li>
// //<li>4 node</li>
// // // <li>5 node</li>
// //<li style="display: none">6 node</li>
// // </ul>
// for (item of findElementByClassName) {
//     console.log(item);
//     console.log(item.innerHTML);//output:
//     // <li>1 node</li>
//     // <li>2 node</li>
//     // <li>3 node</li>
//     // <li>4 node</li>
//     // <!-- <li>5 node</li> -->
//     // <li style="display: none">6 node</li>
//     console.log(item.innerText);
//     // 1 node
//     // 2 node
//     // 3 node
//     // 4 node

//     console.log(item.textContent);
//     // 1 node
//     // 2 node
//     // 3 node
//     // 4 node
    
//     // 6 node
// }
// console.log(document.querySelector("#heading"));//get element by query
// console.log(document.querySelector(".list-of-nodes"));//get element by query class
// const findQuerySelector = document.querySelectorAll("li");//get element by all query selector
// console.log(findQuerySelector);
// for (query of findQuerySelector) {
//     console.log(query);//sara list ka data aa raha hai
// }

//createElement(tagName) create a new html element
//appendChild(node) append a node as the last child of a parent node
//removeChild(node) remove a child node from its parent
//addEventListener(event,function) create an event listener to handle events
