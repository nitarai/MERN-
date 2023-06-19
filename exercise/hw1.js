// 1.Write a JavaScript program that prints 'Hello World'.
console.log("hello world! It's me Nita Rai.");

// 2.Write a JavaScript program to set the value of PI.
const pi = 3.14;
console.log("the value of pie is : "+ pi);

// 3.Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are the same, then return triple their sum.


function add(x,y)
{
    const sum = x+y;
    if (x == y)
    {
        return 3* sum;
    }
    else
    {
        return sum;
    }
}

console.log(add(10,10));
console.log(add(20,30));

// 4. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

function checkMultiple (a) 
{
    if (a%3 == 0 || a%7 ==0 )
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log (checkMultiple(50));
console.log (checkMultiple(20));
console.log (checkMultiple(33));
console.log (checkMultiple(77));

//5.Write a JavaScript program to get the current date.


//6.Write a JavaScript program to calculate multiplication
//  and division of two numbers.(use same function to achieve this)
function calculate(p, q, operation) {
    if (operation == "*") {
      return p * q;
    } else if (operation == "/") {
      return p / q;
    } else {
      throw new Error("Invalid operation");
    }
  }

  console.log (calculate(2,3,"*"));
  console.log(calculate(20,4,"/"))

//7.Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
//[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
function conv(temp,type){
    if (type== "cel")
    {
        console.log("the temp in faherenheit is ");
        return (9*(temp/5)+32);
    }
    else if (type == "fah")
    {
        console.log ("the temperatue in celsus is ");
        return ((5*(temp-32))/9);
    }
}
console.log (conv(100,"cel"));
console.log(conv(263,"fah"));

// 6.Write a JavaScript program to count the number of vowels in a given string.

  function countVowels(str) 
  {
    let count = 0;
    for (let i = 0; i < str.length; i++)
     {
      if (str[i] === 'a' ||
        str[i] === 'e' ||
        str[i] === 'i' ||
        str[i] === 'o' ||
        str[i] === 'u') 
        {
        count++;
        }
    }
    return count;
  }
  
  const str = "anyoung anyoung ";
  console.log(countVowels(str));