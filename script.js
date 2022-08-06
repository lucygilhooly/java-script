// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

function isNumberPositive(number) {
if (number > 0){
    console.log('true');
} else if (number < 0){
    console.log('false');
}
}

isNumberPositive(10)

//2. write a function that takes a number of days and converts it to age 

const convertDaysToAge = (days) => {
    const age = (days/365);
        console.log(age);
}

convertDaysToAge(6570)


//3. write a function that takes three numbers and returns the largest of the three numbers 

function getLargestNumber(num1, num2, num3) {
    let largest;
if (num1 >= num2 && num1>=num3){
    largest=num1;
} else if (num2>=num1 && num2>=num3){
    largest=num2;
} else {
    largest = num3;
}
 console.log(largest);
}

getLargestNumber(6,2,3)


//4. write a function that takes an array of names and returns the last name of the array of names.

function getLastName (index){
   let = names 
   for (let index = 0; index[names.length - 1])

  console.log(index);
}

getLastName(['charlie', 'andy', 'rob'])


//5. Write a function that takes an array of numbers and returns true if all the numbers are positive and returns false if there are one or more negative numbers in the array.


function allNumbersPositive (numbers){
  let result = true;
     for (let index = 0; index < numbers.length; index++) {
       if (numbers [index] < 0) {
           result = false;
            break;
    }
} 
    console.log(result);
}

allNumbersPositive([-5,4,6])

