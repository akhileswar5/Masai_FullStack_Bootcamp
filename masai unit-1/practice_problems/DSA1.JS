//Division Task Ended
// Description

// You are given a number N.

// Let’s say you derive a variablexwhich is equal to the floor of a number you get when32is divided byN.

// In casexis 0, printToo Low
// In case it is not possible to generate a valid number, print-1
// In all other cases, printx.

// Input
// Input Format :

// First line contains N


// Constraints :

// N <= 100


// Output
// Output string or number based on the conditions mentioned above.


// Sample Input 1 

// 4
// Sample Output 1

// 8
// Sample Input 2 

// 3
// Sample Output 2

// 10
// Hint

// When 32 is divided by 4, answer is 8. Floor value of 8 is 8. So x is 8.

// As per our conditions we need to print the number itself, so we print 8.



// When 32 is divided by 3, answer is10.66. Floor value of 10.66 is 10. So x is 10.

// As per our conditions we need to print the number itself, so we print 10.

//  // Write code here
//  var x  = Math.floor(32/N);
//  if(x ==0){
//      console.log("Too Low");
//  }else if(N ==0)
//  {
//      console.log(-1);
//  }else {
//      console.log(x);
//  }
====================================================================================================================
// Masai School! Hurray! Ended
// Description

// You are provided an integer N.

// For all numbers in the range[1,N], includingNyou have to print a string as per the following rules:

// PrintMasai School, if the number is a multiple of both 5 and 7.
// PrintMasai. if the number is a multiple of 7 only.
// PrintSchool, if the number is a multiple of 5 only.
// Else in all other cases printHurray!

// Input
// Input Format :
// First line contains N

// Constraints :

// 1 <= N <= 100


// Output
// Output one of the 4 possible strings, as mentioned in description.


// Sample Input 1 

// 7
// Sample Output 1

// Hurray!
// Hurray!
// Hurray!
// Hurray!
// School
// Hurray!
// Masai
// Hint

// For sample test case 1 , as we print strings for each number for 1 to 7.

// Hurray!
// Hurray!
// Hurray!
// Hurray!
// School
// Hurray!
// Masai


//  // Write code here
//  for(i=1;i<=N;i++){
//     if(i%5==0 && i%7==0){
//         console.log("Masai School");
//     }else if(i%7==0){
//         console.log("Masai");
//     }else if (i%5==0){
//         console.log("School");
//     }else {
//         console.log("Hurray!");
//     }
// }
// =========================================================================================================================================

// Units Consumed Ended
// Description

// Electricity consumption is measured via slab rates for a particular wattage capacity, which is as follows

// test.png

// Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.

// You are given total amount of bill, N , you need to find total unit consumed.


// Input
// Input Format:

// First and the only line of input contains the bill amount

// Constraints:

// 0 <= N <= 1000


// Output
// Print number of units consumed.


// Sample Input 1 

// 930
// Sample Output 1

// 170
// Hint

// Total 930 rupees is the bill amount.

// So total unit consumed would be 170. See calculation below.

// Charges for 170 units :-

// Fixed Charge :- 80
// Charges for first 50 units :- 50 * 3 = 150
// Charges of next 100 units :- 100 * 5 = 500
// Charges of next 20 units :- 20 * 10 = 200
// Total Charges => 80 + 150 + 500 + 200 = 930.



//    //write code here
//    var bill = n-80;
//    var units = 0;
//    if(n<=150)
//    {
//        units = (bill/3);
//    }
//    else if(n<=650)
//    {
//        units = 50 + (bill-150)/5;
//    }else
//    {
//        units = 50+100+(bill-150-500)/10;
//    }
//    console.log(units);


//    =================================================================================================================


//    Smallest and Largest of all Ended
//    Description
   
//    Given an array,arrwhich hasNintegers.
   
//    You need to print the smallest and largest element present in the array each on new lines.
   
   
//    Input
//    Input Format
   
//    The first line contains an integerN.
   
//    The second line containsNspace separated integers, which are integers of arrayarr.
   
//    Constraints
   
//    1 <= N <= 100
   
   
//    Output
//    Output Format
   
//    One first line, print minimum of all elements.
   
//    On the second line, print the maximum of all elements.
   
   
//    Sample Input 1 
   
//    4
//    -2 0 8 4
//    Sample Output 1
   
//    -2
//    8
//    Hint
   
//    Integers in array are:-[-2, 0, 8, 4]
   
//    Minimum integer in array[-2, 0, 8, 4]is-2
   
//    Maximum integer in array[-2, 0, 8, 4]is-8


//      //write code here
//      var max = -Infinity;
//      var min = Infinity;
     
//      for(i=0;i<n;i++){
//              if(arr[i]>max){
//                  max = arr[i];
//              }
//              if (arr[i]<min){
//                  min = arr[i];
//              }
//          }
    
//     console.log(min);
//     console.log(max);

//     =======================================================================================================================


//     Average-of-all Ended
// Description

// You are given anarrwhich hasNintegers.

// Write a program to print the ceil ofaverage of integerspresent in the array.

// Note:- The ceil value of the given whole numberKis the smallest integer value greater or equal to aK.

// For example:-

// if the value of K = 3.679, the ceil value of K is 4
// if the value of K = 5, the ceil value of K is 5.

// Input
// Input Format :

// First line contains N, which is the number of elements present in array.

// Second line contains N space separated integers, which are elements of array.

// Constraints :

// 1 <= n <= 100


// Output
// You need to output ceilof the average of numbers present in array.


// Sample Input 1 

// 4
// 2 5 0 9
// Sample Output 1

// 4
// Hint

// Output Explanation :

// N here is 4.

// So, you are getting 4 elements in the array.

// The sum of elements of array is 2 + 5 + 0 + 9 = 16.

// Average of elements of array is 16/4 = 4.

// The ceil of average of elements of array is 4.

// //write code here
// var sum = 0;

// for(i=0;i<n;i++){
//     sum = arr[i] + sum;
    
// }
// console.log(sum/n);

// =============================================================================================================================


// Battle of Odd & Even Ended
// Description

// You are given an arrayarrofNintegers.

// You need to printOdd, if thesum of all odd numberspresent in the array is greater thansum of all the even numberspresent in the array, or else printEven.


// Input
// Input Format :

// First line contains N which is the number of elements present in the array.

// Second line contains N space separated integers which are the elements of array.



// Constraints :

// 1 <= N <= 100

// 1 <= arr[i] <= 100


// Output
// Print either "Odd" or "Even" depending upon the condition mentioned above.


// Sample Input 1 

// 4
// 1 2 3 4
// Sample Output 1

// Even
// Hint

// Output Explanation :

// Odd numbers present are 1 and 3, whose sum is 4

// Even numbers present in array are 2 and 4, whose sum is 6

// Since 6>4, Even is the required output.

//  //write code here
//  var even = 0;
//  var odd = 0;
//  for(i=0;i<n;i++){
//      if(arr[i] % 2 ==0){
//          even = arr[i] + even;
//      }else if(arr[i] % 2 !=0) {
//          odd = arr[i] + odd;
//      }
//      }
     
//      if(even >= odd){
//          console.log("Even");
//      }else {
//          console.log("Odd");
//      }
//  }

//  ======================================================================================================================
 

//  Detect Palindrome Ended
// Description

// You are given an integernum.

// You need to printYesif that integer is a palindrome or else printNo.

// A palindrome is a word, number, phrase, or other sequence of characters that reads the same backward as forward,such asmadamorracecar.


// Input
// Input Format

// First line containsnum, a integer.
// Constraints
// 1 <= num <= 1000000

// Output
// PrintYesorNodepending upon the integer.

// Sample Input 1 
// 1221
// Sample Output 1
// Yes
// Hint
// Sample 1 Explanation

// We printYesas1221`is a palindrome.

// //write code here
//  var n = num.length;
//  var bag = "";
//   for(var i=n-1;i>=0;i--){
//       bag = bag+num[i];
//   }
//   if(bag==num){
//      console.log("Yes");
//   }else{
//       console.log("No");
//   }


//   ==================================================================================
