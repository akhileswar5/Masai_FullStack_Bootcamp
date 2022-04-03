// The Senior Citizen 
// Description
// You are given a number stored in a variable, with the nameage
// Check whether the age is greater than and equal to 60 or not.
// If true, Then print "Senior Citizen"
// otherwise "Not Senior Citizen".
// Input
// The first and the only line of the input contains the number stored in the variablenumber
// Constraints
// 1 <= N <= 100
// Output
// If the value stored inage, is greater than and equal to 60 Then printSenior Citizen, else printNot Senior Citizen
// Sample Input 1 
// 50
// Sample Output 1
// Not Senior Citizen
// Hint
// the sample input, age = 50
// Since 50 is less than 60.
// Thus, the output will be"Not Senior Citizen"


// if(age >=60)
// {
//     console.log("Senior Citizen");
// }else{
//     console.log("Not Senior Citizen");

--------------------------------------------------------------------------------------------------------
22222222222
// Power and Sum VIII ( Raising to 8 ) Ended
// Description
// You are given two numbers stored in variables with the nameNandMrespectively
// You have to find the value ofsum, such thatsum = N^8 + M^8
// For example, consider the value stored inN = 2, andM = 3
// Therefore,N^8 = 2*2*2*2*2*2*2*2 = 256, andM^8 = 3*3*3*3*3*3*3*3 = 6561
// Therefore,sum = 256 + 6561 = 6817, which is the required answer
// Input
// The first and the only line of the input contains the value stored inNandMrespectively
// Output
// Print the value ofsumas shown in the problem statement
// Sample Input 1 
// 2 3
// Sample Output 1
// 6817
// Hint
// In the sample test case, the value stored inN = 2, andM = 3
// Therefore,N^8 = 2*2*2*2*2*2*2*2 = 256, andM^8 = 3*3*3*3*3*3*3*3 = 6561
// Therefore,sum = 256 + 6561 = 6817, which is the required answer


// var a = N**8;
//  var b = M**8;
//  var sum = a + b;
//  console.log(sum);
 ------------------------------------------------------------------

//  Find The Middle Ended
// Description

// You are given three integers namely a, b, and c. And you have to print the integer which is greater than or equal to one element and less than or equal to another element, means

// suppose b>=a and b<=c then print b or if a>=c and a<=b then print a.
// For Example : Given three integers are 4, 2, 6 and here we can clearly see that 4>=2 and 4<=6 so print 4 as your answer.

// Input
// Input Format

// The first line contains three integers a, b, and c.

// Constraints

// 1 <= a, b, c <= 100

// Output
// Print the required output according to the given conditions.


// Sample Input 1 

// 4 8 6
// Sample Output 1

// 6
// Sample Input 2 

// 88 70 60
// Sample Output 2

// 70
// Hint

// For the first sample,

// As 6>=4 and 6<=8, that is it is satisying the given conditions so our answer is 6 and print 6.

// For the second sample,

// As 70>=60 and 70<=88, that is it is satisying the given conditions so our answer is 70 and print 70.



// if((a>b && a<c) || (a>c && a<b))
//   {
//       console.log(a);
//   }else if((b>a && b<c) || (b>c && b <a))
//   {
//       console.log(b);
//   }else
//   {
//       console.log(c)
//   }
---------------------------------------

// sum till N fivefold Ended
// Description

// You are given a numberNstored in a variable with the nameN

// You have to find the sum of firstNnatural numbers in the range of1 to N, including the value stored inNitself, but each number should be added fivefold

// For example, consider the value stored inN = 3, therefore, the sum of firstNnatural numbers issum = 1 + 2 + 3, but each number has to be addedfivefold

// Therefore,sum = 1 + 1 + 1 + 1 + 1 + 2 + 2 + 2 + 2 + 2 + 3 + 3 + 3 + 3 + 3 = 30, which is the required answer


// Input
// The first and the only line of input contains the value stored inN

// Output
// Print the value ofsumas shown in the problem statement

// Sample Input 1 

// 3
// Sample Output 1

// 30
// Hint

// In the sample test case, the value stored inN = 3, therefore, the sum of firstNnatural numbers issum = 1 + 2 + 3, but each number has to be addedfivefold

// Therefore,sum = 1 + 1 + 1 + 1 + 1 + 2 + 2 + 2 + 2 + 2 + 3 + 3 + 3 + 3 + 3 = 30, which is the required answer



	//write your code here
    // var sum = 0;
	// for (i=1;i<=5;i++)
	// {     
	//     for(a=1;a<=N;a++){
	//         sum = sum + a  ;
	//     }
	// } console.log(sum);

    --------------------------------------------
//     Even Collection Ended
// Description

// You are given two numbers, stored in variables with the following names

// max, min

// You have to find the sum of all even numbers that fall between two numbersfrom min to max(including both min and max).

// For example, if the value stored inmax = 19, and the value stored inmin = 14, then the output will be computed as follows

// sum of even = 14 + 16 + 18 = 48
// Note : The value stored in max will always be greater than or equal to min


// Input
// The first and the only line of input contains the value stored inmax, minrespectively


// Output
// print thesum of all even numbers that fall between two numbers(including both numbers)from min to max.


// Sample Input 1 

// 19 13
// Sample Output 1

// 48
// Hint

// Given max = 19, min = 13

// The range contain following number : 13, 14, 15, 16, 17, 18, 19

// From above range , The even numbers are : 14, 16, 18

// Sum of even numbers = 14 + 16 + 18 = 48

    //write code here
    // var sum = 0;
    // for (a=min; a<=max ; a++)
    // { 
    //     if(a%2==0){
    //         sum = sum+ a ;
    //     }
    // }console.log(sum);
    -=========================================-------------------




    //     sum of series Ended
// Description

// Given two integers N, X. Find the value of the series: 1 + x + x*x  + x*x*x + x*x*x*x +-------N the term

// WhereN is the no. of term,

// X contains the value of x.



// Note : If N <= 0 or X <= 0 print -1



// For Example

// Give N = 3, X = 2

// We need to find the sum of first N=3 terms, having value of X=2
// First 3 terms in Expression = 1 + x + x*x = 1 + 2 + 2*2 = 7
// Answer is 7 

// Input
// The first and the only line of the input contains N and X,

// Constraints

// 1 <= N <= 20

// 1 <= X <= 10


// Output
// Print the value of the series1 + x*x  + x*x*x + x*x*x*x +-------N the term


// Sample Input 1 

// 3 2
// Sample Output 1

// 7
// Hint

// Give N = 3, X = 2

// We need to find the sum of first N=3 terms, having value of X=2
// First 3 terms in Expression = 1 + x + x*x = 1 + 2 + 2*2 = 7
// Answer is 7

    //  // Write code here  
    //  if (N <= 0 || X <= 0)
    //  { 
    //     console.log("-1");
    //  }
    //  else{
    //  var sum = 1;
    //  for(var i = 1;i<=N-1;i++)
    //  {
    //      sum = sum + (X**i)
    //  }
    //  console.log(sum)

    ------------------------------------------------------------------------


//     Two Primes Ended
// Description

// You are given two numbers, stored in variables with the following namesa, b

// If both the numbers are prime, printTrue, else printFalse


// Input
// The first and the only line of input contains the value stored ina, brespectively


// Output
// Print the output as explained in the problem statement


// Sample Input 1 

// 11 17
// Sample Output 1

// True
// Hint

// In the sample test case, the value stored ina = 11, and the value stored inb = 17. Since, both the numbers are prime, we printTrue



//     //write code here
//     var first = false;
//     var second = false;
   
//     var factor = 0;
//     for(i=1;i<=a;i++)
//     {
//         if(a%i==0) 
//         {
//         factor++
//         }
//      }
   
//     if(factor==2)
//     {
//         first == true;
//     }
    
//    var count=0;
//     for(var i=0;i<=b;i++)
//     {
//         if(b%i==0)
//         {
//             count++;
//         }
//    }
//    if(count==2)
//    {
//        second = true;
//    }
   
//    if(first ==true && second ==true)
//    {
//        console.log("True");
//    }
//    else{
//        console.log("False");
//    }

---------------------------------------------------------------------------------------------