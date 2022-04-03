// Print Array Ended
// Description

// You are given an array, whose size is stored in a variable of sizen

// The array is stored in a variable with the name,arr

// You have to traverse the array, and print each element on a new line

// For example, the value stored inN = 5, and the array isarr = [1 2 3 4 5]

// Therefore, the required output will be

// 1
// 2
// 3
// 4
// 5

// Input
// The first First line containsN, size of array.

// Next line contains N space integers, which denote the numbers present in the array


// Output
// Print all number of array on new line.


// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 1
// 2
// 3
// 4
// 5
// Hint

// You need to print elements of array on new line.


 //write code here
 for(var i=0;i<N;i++){
    console.log(arr[i]);
}

====================================================================================

// Print Array in Horizontal Ended
// Description

// You are given an array, whose size is stored in a variable of sizen

// The array is stored in a variable with the name,arr

// You have to traverse the array, and print each element on a new line

// For example, the value stored inN = 5, and the array isarr = [1 2 3 4 5]

// Therefore, the required output will be

// 1 2 3 4 5

// Input
// The first First line containsN, size of array.

// Next line contains N space integers, which denote the numbers present in the array


// Output
// Print all number of array in a horizontal way.


// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 1 2 3 4 5
// Hint

// You need to print elements of array in horizontal

 //write code here
 var bag = "";
 for(i=0;i<N;i++){
     
     bag= bag + arr[i]+" ";
     
 }
  console.log(bag);
  ===================================================================

//   Reverse Array Traversal Ended
// Description

// You are given an array, stored in a variable with the namearr

// The size of the array is stored in a variable with the namesize

// You have to print the reverse traversal of the array

// For example, consider the value stored insize = 4, and the array isarr = [1 2 3 4]. Then, the required output will be

// 4 3 2 1

// Input
// The first line of the input contains the value stored insize

// The next line of the input contains the values stored in the array. All the values are on a single line separated by space


// Output
// You have to print the reverse traversal of the array, as shown in the problem statement

// Sample Input 1 

// 5
// 1 3 2 4 5
// Sample Output 1

// 5 4 2 3 1
// Hint

// In the sample test case, the value stored insize = 5, and the array is given byarr = [1 3 2 4 5]

// Therefore, the reverse traversal of this array will be

// 5 4 2 3 1


 //write code here
 var bag = "";
 for(i=0;i<n;i++){
     bag= arr[i]+ " " + bag;
 }
  console.log(bag);
  ====================================================================
//   Even Array Ended
// Description

// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to traverse the array, and print only the even elements in the array.

// Print each number on a new line

// For example, consider the array asarr = [1 2 3 4 5], and the value stored inn = 5

// Then, the required output will be

// 2
// 4
// The above are the only two even numbers in the given array


// Input
// The first line of the input contains the value stored inN, the size of the array

// The next line containsNspace separated numbers denoting the elements of the array


// Output
// Print the even elements present in the array, as explained in the problem statement


// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 2
// 4
// Hint

// In the sample test case, the value stored inn = 5and the value stored inarr = [1 2 3 4 5]

// The only even numbers in the array are2 4

// Therefore, the output will be

// 2
// 4

 //write code here
 for(var i=0;i<n;i++){
    if(arr[i]%2==0){
    console.log(arr[i]);
}
}
======================================================================
// Sum of Array Ended
// Description

// You are given an array, whose size is stored in a variable of sizen

// The array is stored in a variable with the name,arr

// You have to print the sum of all elements of an array

// For example, the value stored inN = 5, and the array isarr = [1 2 3 4 5]

// Therefore, the required output will be

// 15

// Input
// The first First line containsN, size of array.

// Next line contains N space integers, which denote the numbers present in the array


// Output
// Print sum of an array


// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 15
// Hint

// You need to print sum of elements of array

  //write code here
  var bag = 0;
   for(i=0;i<n;i++){
       bag= arr[i] + bag;
   }
    console.log(bag);
    ===============================================================
//     Odd Array Sum Ended
// Description

// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to traverse the array, and print the sum of odd elements in the array.

// For example, consider the array asarr = [1 2 3 4 5], and the value stored inn = 5

// Then, the sum of odd elements are : 1 + 3 + 5 = 9

// 9

// Input
// The first line of the input contains the value stored inN, the size of the array

// The next line containsNspace separated numbers denoting the elements of the array


// Output
// Printthe sum of odd elementspresent in the array, as explained in the problem statement


// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 9
// Hint

// In the sample test case, the value stored inn = 5and the value stored inarr = [1 2 3 4 5]

// The odd numbers in the array are1 3 5

// Therefore, the sum of odd elements : 1+3+5 = 9


//write code here
// var bag = 0;
// for(i=0;i<n;i++){
//     if(arr[i]%2!=0){
//     bag= arr[i] + bag;
// }
// }
//  console.log(bag);
 ======================================================
//  Minimum in array Ended
// Description

// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to find the minimum number in the array

// For example, consider the array asarr = [1 2 3 4 5], and the value stored in n = 5

// Then, the required output will be1, as it is the smallest number in the array


// Input
// The first line of the input contains the value stored inN, the size of the array

// The next line containsNspace separated numbers denoting the elements of the array


// Output
// Print the minimum element in the array, as explained in the problem statement


// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 1
// Hint

// Array elements are 1 2 3 4 5. Minimumelement in this array is 1.

 //write code here
 var min = Infinity;
 for(i=0;i<N;i++)
 {
     if(arr[i]<min)
     {
         min = arr[i];
     }
 }
 console.log(min);
 =======================================================================

//  Maximum in array Ended
// Description

// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to find the maximum number in the array

// For example, consider the array asarr = [1 2 3 4 5], and the value stored in n = 5

// Then, the required output will be5, as it is the largest number in the array


// Input
// The first line of the input contains the value stored inN, the size of the array

// The next line containsNspace separated numbers denoting the elements of the array


// Output
// Print the maximum element in the array as shown in the problem statement


// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 5
// Hint

// Array elements are 1 2 3 4 5. Maximum element in these array is 5.



// //write code here
// var max = -Infinity;
// for(i=0;i<N;i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }console.log(max);

==============================================================================================================
// Print Characters of a String in Reverse Ended
// Description

// You are given a string, whose size is stored in a variable with the nameN

// You have to print all the characters in the string in reverse order, on a new line

// For example, consider the string stored instr = "nrupul", and the value stored inN = 6, then the required output will be

// l
// u
// p
// u
// r
// n

// Input
// The first line of the input contains the value stored inN

// The next line contains the value stored instr


// Output
// Print all the characters stored instr, in reverse order, one character per line


// Sample Input 1 

// 6
// ankush
// Sample Output 1

// h
// s
// u
// k
// n
// a
// Hint

// In the sample test case, the value stored inN = 6, and the value stored instr = "ankush"

// Therefore, the required output will be

// h
// s
// u
// k
// n
// a


// function printCharReverse(N,str) {
//     //write code here
//     for(i=N-1;i>=0;i--)
//     {
//         console.log(str[i]);
//     }
===================================================================================================

// Characters At Odd Position Ended
// Description

// You are given a string whose size is stored in a variable with the nameN, stored in a variable with the namestr

// You have to print all the characters in the string, which are present at odd indexes

// For example, consider the string stored instr = "nrupul", and the value stored inN = 6, then the output will be

// r
// p
// l
// The characters stored at odd positions arer - index 1,p - index 3,l - index 5, hence they are printed, each character on a new line
// Note : The indexing in the string starts from 0

// Input
// The first line of the input contains the value stored inN

// The next line of the input contains the value stored instr


// Output
// Print the characters at odd indexes, as shown in the problem statement, each character on a new line


// Sample Input 1 

// 6
// ankush
// Sample Output 1

// n
// u
// h
// Hint

// In the sample test case, the value stored inN = 6, and the value stored instr = "ankush"

// Therefore, the characters at odd positions are

// n - 1, u - 3, h - 5
// Therefore, the output becomes

// n
// u 
// h

// for(var i=1;i<N;i++){
//     if(i%2!=0){
//     console.log(str[i]);
// }
    
=====================================================================================

// Check Vowel Ended
// Description

// You are given a string, whose size is stored in a variable with the nameN

// The string is stored in a variable with the namestr

// You have to printtrue, if the string contains at least one vowel, otherwise printfalse

// For example, consider the value stored inN = 6, and the value stored instr = "nrupul", then the output will betrue, since the string contains the vowelutwice

// Note : The string only contains lowercase English alphabets

// Note : The vowels in the English Alphabet are considered the following - a,e,i,o,u

// Input
// The first line of the input contains the value stored inN

// The next line contains the value stored instr


// Output
// Printtrue, if the value stored instrcontains at least one vowel, otherwise printfalse


// Sample Input 1 

// 4
// stvr
// Sample Output 1

// false
// Hint

// In the sample test case, the value stored inN = 4, and the value stored instr = stvr

// Since, the value stored instrdoes not contain any vowels, therefore, the output isfalse


//  //write code here
//  var count = 0;
//  for(i=0;i<N;i++){
// if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
//        count++;
//         break;
// }
// }if(count==1){
//    console.log("true");
// }else{
//    console.log("false");
// }
===============================================================================================================

// Vowel & Consonant Count Ended
// Description

// You are given a string, stored in a variable with the name,str

// The size of the string is stored in another variable with the nameN

// You have to find the count of vowels, and consonants in the string, and print it

// For example, consider the value stored instr = "nrupul", and the value stored inN = 6, then the vowels, in the string isu, which is present twice. Therefore, the count of vowels becomes 2, and the rest of the characters are consonants, so the count of consonants becomes 4. Therefore, the required output will be

// 2 4
// Note : All characters in the string are lowercase English alphabets

// Note : The vowels in the English alphabet are the following - a,e,i,o,u. All the characters are considered as consonants

// Input
// The first line of the input contains the value stored inN

// The next line contains the value stored instr


// Output
// Print the number of vowels, and number of consonants, present in the string stored instr

// Sample Input 1 

// 6
// ankush
// Sample Output 1

// 2 4
// Hint

// In the sample test case, the value stored inN = 6, and the value stored instr = "ankush"

// The vowels in the string stored instrarea and u. Therefore, the count of vowels in the string is 2

// The rest of the characters in the string are consonants, therefore, the count of consonants is 4

// Therefore, the required output is

// 2 4

//write code here
// var count = 0;
// var consonant = 0;
// for(var i=0;i<str.length;i++){
//     if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u")
//     {
//      count++;   
//     }else{
//         consonant++
//     }
// }
// console.log(count,consonant);
=======================================================================================

// Check Palindrome Ended
// Description

// You are given a string, whose size is stored in a variable with the nameN

// The string is stored in a variable with the namestr

// PrintYes, if the string is a palindrome, else printNo

// For example, consider the value stored instr = "naman", if we reverse the string, the reversed string will be the same as the original string, hence the string is considered as palindrome, therefore, the output isYes

// Note : A palindrome is a string which is the same read forwards or backwards


// Input
// The first line of the input contains the value stored inN

// The next line of the input contains the value stored instr


// Output
// PrintYes, if the string stored instris a palindrome, else printNo

// Sample Input 1 

// 6
// nrupul
// Sample Output 1

// No
// Hint

// In the sample test case, the value stored inN = 6, and the value stored instr = "nrupul"

// In this case, the reversed string is not equal to the original string, therefore, the output isno

//  //write code here
//  var new_str = "";
//  for(i=N-1;i>=0;i--){
//      new_str = new_str+str[i]
//  }
//  if(str==new_str) {
//      console.log("Yes");
//  }else{
//      console.log("No");
     
//  }
==================================================================

