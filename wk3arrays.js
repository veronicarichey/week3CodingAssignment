// question 1a 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// 1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// •	Do not use numbers to reference the last element, find it programmatically, 
// •	ages[7] – ages[0] is not allowed!

var ages = [3, 9, 23, 64, 2, 8, 28, 93];

first = ages[0];
last = ages[ages.length - 1];
answer = (last - first);
console.log(answer);

// questions 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(35);
console.log(ages);
last = ages[ages.length - 1];
answer = (last - first);
console.log(answer);


// question 1c.	Use a loop to iterate through the array and calculate the average age. 
sum = 0
for(let i=0; i < ages.length; i++){
    sum += ages[i];
    console.log(sum);
}
answer = sum / ages.length;
console.log(answer);

// question 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// 2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

sum = 0
for(let i=0; i < names.length; i++){
    sum += names[i].length;
    console.log(sum);
}
answer = sum / names.length;
console.log(answer);

// question 2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
sentence = "";
for(let i=0; i < names.length; i++){
sentence += names[i];
sentence += " ";
}
console.log(sentence);

// question 3.	How do you access the last element of any array?
// array[array.legnth - 1];

// question 4.	How do you access the first element of any array?
// array[0]

// question 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array

var namesArray = ["Kelly", "Sam", "Kate"];
var nameLengths = [];
for(let i=0; i < namesArray.length; i++){
    nameLengths.push(namesArray[i].length);
}
console.log(nameLengths);

// question 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
sum = 0
for(i=0; i < nameLengths.length; i++){
    sum += nameLengths[i];
}   
console.log(sum);
   
// question 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to 
// itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function stringConcat(word, n){
var nameString = "";
for(i=0; i < n; i++){
nameString = nameString.concat(word); 
}
return nameString;
}
console.log(stringConcat("Hello", 5));

// question 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
// •	The full name should be the first and the last name separated by a space.

function FullName (firstName, lastName){
    var name = firstName + ' ' +lastName;
return name;
}
console.log(FullName("Jane", "Doe"));

// question 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function sumCheck(numbers){
    sum = 0;
    for(i=0; i< numbers.length; i++){
        sum += numbers[i];  
    }
    if(sum > 100){
        return true;
    } else{
        return false;
    }
}
console.log(sumCheck([30, 51]));

// question 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function averageArray(numbers){
    sum = 0;
    for(i=0; i< numbers.length; i++){
        sum += numbers[i];  
    }
    return sum / numbers.length
}
console.log(averageArray([6, 8, 12, 14]));

// question 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in 
// the first array is greater than the average of the elements in the second array.
function averageCheck(numbers1, numbers2){
    sum1 = 0;
    for(i=0; i< numbers1.lengthnumbers2; i++){
        sum1 += numbers1[i];  
    }
    sum2 = 0;
    for(i=0; i< numbers2.length; i++){
        sum2 += numbers2[i];  
    }
    avg1 = sum1 / numbers1.length;
    avg2 = sum2 / numbers2.length;

    if(avg1 > avg2){
        return true
    } else {
        return false
    }
}
console.log(averageCheck([1, 2, 3,], [7, 8, 9]));

// question 12.	Write a function called willBuyDrink that takes a boolean isHotOutside,
// and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket 
// is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside && moneyInPocket > 10.50){
        return true;
    }else {
        return false;
    }
}
console.log(willBuyDrink(true, 10.51));

// question 13.	Create a function of your own that solves a problem. 
// •	In comments, write what the function does and why you created it.

function willPay(bills, accountBalance){
    sum = 0;
    for(let i = 0; i < bills.length; i++){
        sum += bills[i];
    } 
    if(accountBalance > sum){
        return true;
    } else{
        return false;
    }
    
}
console.log(willPay([14.99, 35.00, 180.50], 600));

// I created a function that will determine if I have enough money in my account 
// pay my bills. I used a for loop to add up the value of the bills array and
// and used if else to determine if my account balance was greater than the total of
// the bills array. If it was then the function would return true if not it 
// would return false.