// Substring under condition Ended
// Description

// You are given a strings, you have to find thecountof all such substrings which start and ends with the same character.


// Input
// Input Format :

// First and the only line contains a strings

// Constraints:

// 1 <= Length of s <= 1000


// Output
// Print the count of total number of such substrings starting and ending with same characters.


// Sample Input 1 

// abcab
// Sample Output 1

// 7
// Hint

// Substrings ofabcabwhich start and end with same characters, area,abca,b,bcab,c,a,b.

// So total count is 7. Hence we print 7.

// /write code here
// var count = 0
//  var n= s.length;
//  for(i=0;i<n;i++)
// {  bag = "";
//   for(j=i;j<n;j++){

//       if(s[i]==s[j]){
//         count++;
        
//     }
//   }
    
// }console.log(count);

// ===========================================================================================================================

// Count such pairs Ended
// Description

// You are given an arrayAofNintegers along with a target integerK.

// Your task is to find out the number of pairs of integers present in the array, whose sum is equal to the target valueK.


// Input
// Input Format :

// First line contains 2 integers: N and K.

// Second line contains N space separated integers which are the elements of the array.

// Constraints :

// 1 <= N <= 100


// Output
// Print the count of such pairs whose sum is K.


// Sample Input 1 

// 5 9
// 3 0 6 2 7
// Sample Output 1

// 2
// Hint

// Pairs whose sum is 9 are:- {3,6} , {2, 7}. So answer is 2.

//     //write code here
//     var sum = 0;
//     for(i=0;i<A.length;i++){
//         for(var j=i+1;j<A.length;j++){
//             if(A[i] +A[j]==K){
//                 sum++
//             }
//         }
//     }console.log(sum);
//     ========================================================================================================================

//     Intersection of Array Ended
// Description

// You are given 2 arraysarr1andarr2ofNintegers.

// Your task is to write a program that finds the one integer which is common in both arrays (arr1andarr2).

// Note: There is always one integer common in both arrays.


// Input
// Input Format

// First line of input containsN, size of arrays.

// Second line containsNspace separated integers making the first array (arr1)

// Third line containsNspace separated integers making the second array (arr2)

// Constraints

// 1 <= N <= 1000


// Output
// Output Format

// Output that one integer which is common in both arrays


// Sample Input 1 

// 3
// 4 5 7
// 9 2 5
// Sample Output 1

// 5
// Hint

// arr1 is 4 5 7.

// arr2 is 9 2 5.

// 5 is common in both array, so we print 5..


//  //write code here
//  var bag = "";
//  for(i=0;i<arr1.length;i++){
//      for(j=0;j<arr2.length;j++){
//       if(arr1[i]==arr2[j]){
//          bag = bag + arr1[i];
     
//      }
//      }
//  }console.log(bag);
// }

// ======================================================================================================================

// Masai Palindromic Substring Ended
// Description

// You are provided a stringS.

// Write a program that returns length of the longest palindromic substring of that string.


// Input
// Input Format

// First line contains S, a string.

// Constraints

// `1 <= Length of string <= 100


// Output
// Output Format

// Output one number which is length of the longest substring which is a palindrome


// Sample Input 1 

// thisracecarisgood
// Sample Output 1

// 7
// Hint

// Sample 1 Explanation

// The given string contains a palindromic substring which is, "racecar" and it is of largest length(7) among all other palindromic substrings.

// Hence the output is 7

// //write code here
// var n = S.length;
// var longest_length = 0;

// for(var i = 0;i<n;i++)
// {    
//     for (var j=i;j<n;j++)
//     {
//       var bag = "";
//       for(var k=i;k<=j;k++)
//       {
//           bag = bag + S[k];
//       }
//       var revers = "";
//       for(var k=j;k>=i;k--){
//           revers = revers+S[k];
//       }
//       if(bag == revers){
//           if(revers.length>longest_length){
//               longest_length = bag.length;
//           }
//       }
//     }
// }
    
// console.log(longest_length);

=============================================================================================================================

// Count such pairs Ended
// Description

// You are given an arrayAofNintegers along with a target integerK.

// Your task is to find out the number of pairs of integers present in the array, whose sum is equal to the target valueK.


// Input
// Input Format :

// First line contains 2 integers: N and K.

// Second line contains N space separated integers which are the elements of the array.

// Constraints :

// 1 <= N <= 100


// Output
// Print the count of such pairs whose sum is K.


// Sample Input 1 

// 5 9
// 3 0 6 2 7
// Sample Output 1

// 2
// Hint

// Pairs whose sum is 9 are:- {3,6} , {2, 7}. So answer is 2.

//    //write code here
//    var count = 0;
//    for(i=0;i<A.length;i++){
//        for(j=i+1;j<A.length;j++){
//            if(A[i]+A[j]==K){
//               count++;
//            }
//        }
//    } console.log(count);
// }

// =========================================================================================================================


// Identify Prime Ended
// Description

// You are given a number stored in a variable with the namenum

// Check if the number is a prime number or not

// If the value stored innum, is a prime number printYes, else printNo

// Note : A prime number is a number, that is divisible by only 1 and the number itself

// Input
// The first and the only line of the input contains the value stored innum


// Output
// If the value stored innum, is a prime number printYes, else printNo

// Sample Input 1 

// 13
// Sample Output 1

// Yes
// Hint

// In the sample test case, the value stored innum = 13. Since,13is a prime number, the output isYes

// // Write code here
// var count = 0;
// for(i=2;i<=num;i++)
// {
//     if(num%i==0){
//         count++
//     }
// }
// if(count==1)
// {
//     console.log("Yes");
// }else{
//     console.log("No");
// }
// =============================================================================================================================

// String value! Ended
// Description

// Given a stringSof all lowercase letters and each letter has a value of its own.

// The value of the alphabetais1,b is 2,c is 3..... tillz is 26.

// Now you have to find the total value of the given string. The total value of a string is the sum of values of all characters present in string.



// Input
// Input Format

// The first and only line of input contains the StringS.

// Constraints

// 1 <= Length of S <= 1000


// Output
// Print the value of string.


// Sample Input 1 

// aba
// Sample Output 1

// 4
// Hint

// Sample 1 Explanation

// For example, Consider the Stringaba

// Here, the first characterahas a weight of1, the second characterbhas2and the third characteraagain has a weight of1.

// So the sum of stringabahere is equal to : 1 + 2 + 1 = 4.


// ===============================================================================================================================

// Apply Basic Maths Ended
// Description

// You are given an arrayAwithNelements. You are allowed toremove only one element, which makes thesum of all the remaining elements exactly divisible by 7.

// Your task is to find thefirst index of smallest elementthat can be removed from array. If there is no answer print-1.


// Input
// Input Format

// The first line contains a single integerN.

// Next line contains N space separated integers A[k] , (0 <= k < N).

// Constraints

// 1 <N< 100000

// 0 <A[k]< 1000000000


// Output
// Output Format

// Print a single line containing one integer, the first array index of the smallest element that CAN be removed, and -1 if there is no such element that he can remove!


// Sample Input 1 

// 5
// 14 7 8 2 4
// Sample Output 1

// 1
// Hint

// Sample 1 Explanation

// Both 14 and 7 are valid answers, but since 7 is the smallest, the required array index is 1.


//  //write code here
//  var sum = 0;
//  for(var i= 0; i<N;i++)
//  {
//      sum = sum + arr[i];
//  }
//  //console.log(sum);
//   var index = -1;
//   var value = Number.MAX_SAFE_INTEGER;
//    for(var j=0;j<N;j++)
//    {
//        if((sum-arr[j])%7 ==0)
//        {
//            if(value>arr[j])
//            {
//                value = arr[j]
//                index = j
//            }
           
//        }
//    }
//       console.log(index);
//    ==============================================================================================================================
   
//    Sum of Special Pairs Ended
// Description

// You are given an arrayAofNintegers.

// Write a program to find thesumof the absolute difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.


// Input
// Input Format :

// First line contains N, size of array A.

// Second line contains N space separated integers which are elements of A

// Constraints :

// 1 <= N <= 1000


// Output
// Output one number, total number of pairs pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.


// Sample Input 1 

// 6
// 1 2 3 5 7 12
// Sample Output 1

// 45
// Hint

// Pairs whose i<j and j-i is prime are :-

// 1. 1 3 [i=0, j=2] , Difference is 2.

// 2. 1 5[i=0, j=3] ,Difference is 4.

// 3. 1 12[i=0, j=5] ,Difference is 11

// 4. 2 5[i=1, j=3],Difference is  3.

// 5. 2 7[i=1, j=4],Difference is 5.

// 6. 3 7 [i=2, j=4],Difference is 4.

// 7. 3 12[i=2, j=5],Difference is 9

// 8. 5 12 [i=3, j=5],Difference is 7



// Sum of all differences is2+4+11+3+5+4+9+7 = 45.



// function sumOfSpecialPairs(N,A){
//     //write code here
//      var sum = 0;
//       var count = 0;
//      //var limit = 1000;
    
   
//     for(var i = 0;i<N;i++){
//         for(var j=i+1;j<N;j++){
//              var sub = A[j]-A[i]
            
//             function findprime(sub){
//      for (var x=2;x<=sub;i++){
//          if(limit%i==0){
//              return true
//          }
//      }
//      return false
//     }
     
           
           
//             if(i<j && findprime)
//             {
//                 sum = sum + Math.abs(A[i]-A[j])
//             }
//         }console.log(sum);
//     }
//     ==================================================================================================
