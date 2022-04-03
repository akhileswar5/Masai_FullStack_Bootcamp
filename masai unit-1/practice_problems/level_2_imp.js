// Even Sum VS Odd Sum Ended
// Description

// You are given an arrayarrof sizeN
// You need to find Odd sum and Even sum
//    Odd Sum is sum of all the elements of the array at odd position
//    Even Sum is sum of all the elements of the array at even position
// If Even Sum is greater than Odd Sum then print "Even" without quotes.
// Else If Odd Sum is greater than Even Sum then print "Odd" without quotes.
// Else print "Even Odd" without quotes.
// Please read the sample test case and its explanation for better understanding.


// Input
// Input Format :

// The first line of input contains an integer N - denoting the size of the array.

// The second line contains the N space-separated integers.


// Constraints :

// 1<=n<= 15

// 1<=A[i]<=100


// Output
// Print either"Even" or "Odd" or "Even Odd" without quotes depending upon the condition mentioned above.


// Sample Input 1 

// 4
// 1 2 3 4
// Sample Output 1

// Odd
// Hint

// From the sample input

// Numbers present at even position in array are 1 and 3, whose sum is 4 i.e. even sum = 4

// Numbers present at odd position in array are 2 and 4, whose sum is 6 i.e odd sum = 6

// Since 6>4, Odd is the required output.



// 	//Enter Code Here
//     var even = 0;
//     var odd = 0;
// 	for(i=0;i<N;i++){
// 	    if(i%2==0){
// 	     even = arr[i] + even;   
// 	    }else {
// 	        odd =  arr[i] + odd;
// 	    }
	       
	   
// 	} if(even > odd){
// 	    console.log("Even");
// 	} else if(odd > even){
// 	    console.log("Odd");
// 	} else {
// 	    console.log("Even Odd");
// 	}
=====================================================================================================

// Count Digits Ended
// Description

// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to find the count of 0's ,1's and 2's

// For example, consider the array asarr = [0 1 0 2 1 2 0 1 2 0], and the value stored in n = 10

// Then, the required output will be4 3 3, as no. of 0's are 4, no. of 1's are 3, and no. of 2's are 3.


// Input
// The first line of the input contains the value stored inN, the size of the array

// The next line containsNspace separated numbers denoting the elements of the array


// Output
// Print the count of 0's, 1's and 2's separated with space as shown in the problem statement.


// Sample Input 1 

// 10
// 0 1 0 1 1 1 0 2 2 0 
// Sample Output 1

// 4 4 2
// Hint

// In the given array, 0 1 0 1 1 1 0 2 2 0

// The no. of 0's are: 4

// The no. of 1's are: 4

// The no. of 2's are: 2

// //write code here
// var count1 = 0;
// var count2 = 0;
// var count3 = 0
// for(i=0;i<N;i++)
// {
//     if(arr[i]==0){
//         count1++;
//     }
//     if(arr[i]==1){
//         count2++;
//     }
//     if(arr[i]==2){
//         count3++;
//     }
// }console.log(count1, count2, count3);

===============================================================================================================================

// Description

// You are given a string stored in a variable with the namestr

// Also, the length of the string is stored in a variable with the nameN

// You have to modify the string, such that if the first character of the string is a vowel, then addmasaiat the start of the string

// Else if the first character of the string is a consonant, then addschoolto the end of the string

// For example, consider the value stored inN = 3, andstr = abc

// Now, since the first character of the string is a vowel, therefore, we addmasaito the start of the string

// Therefore, the string becomesmasaiabc, which is the required output.

// Note: The string contains only lowercase characters


// Input
// The first line of the input containsN, the length of the string

// The next line contains the value stored instr


// Output
// Print the modified string as explained in the problem statement.

// Sample Input 1 

// 3
// abc
// Sample Output 1

// masaiabc
// Hint

// From the sample test case, the value stored inN = 3, andstr = abc

// Now, since the first character of the string is a vowel, therefore, we addmasaito the start of the string

// Therefore, the string becomesmasaiabc, which is the required output.

// //Write your code here
// for(i=0;i<N;i++){
//     if(str[0]=="a"||str[0]=="e"||str[0]=="i"||str[0]=="o"||str[0]=="u")
//     {
//         console.log("masai"+str);
//         break;
//     }else{
//         console.log(str+"school");
//         break;
        
        
//     }
// }
=========================================================================================================================

// Remove Upper Case Ended
// Description

// You are given a string, stored in a variable with the namestr, while the variableNstores the size of the string

// You have to remove all the characters in the string which are uppercase English Alphabets, and print the resultant string

// For example, consider the value stored instr = "MasAi", and N = 5

// The charactersMandAare uppercase, and hence we remove them. Therefore, the required output becomesasi


// Input
// The first line of the input contains the value stored inN

// The second line of the input contains the value stored instr


// Output
// Print the updated string after removing all the uppercase characters

// Sample Input 1 

// 5
// MasAi
// Sample Output 1

// asi
// Hint

// In the sample test case, the value stored instr = "MasAi", and N = 5

// The charactersMandAare uppercase, and hence we remove them. Therefore, the required output becomesasi



==========================================================================================================================


// Strongly Typed Password Ended
// Description

// You are given an array of strings, whose size is stored in a variable with the nameN

// The string array, is stored in a variable with the namearr

// You have to find how many of the strings stored in the array arr, areweak, and how many of them arestrong

// A string is considered as strong if it contains at least one of the following characters in it@,$,#,*

// Consider the example, in which the value stored inN = 4, and the array,arr = ["test123", "new@t", "mon*y", "nrupul"]

// The first string "test123", does not contain any of the required characters, hence the string is weak

// The second string "new@t", contains the character `@`, hence the string is strong

// The third string "mon*y", contains the character `*`, hence the string is strong

// The fourth string "nrupul", does not contain any of the required characters, hence the string is weak
// Therefore, the required output becomesweak strong strong weak

// Input
// The first line of the input contains the value stored inN

// The next line containsNspace separated string denoting the values stored in the string array


// Output
// For each string present inarr, print whether the string isweakorstrong

// Sample Input 1 

// 4
// test123 new@t mon*y nrupul
// Sample Output 1

// weak strong strong weak
// Hint

// In the sample test case, the value stored inN = 4, and the array,arr = ["test123", "new@t", "mon*y", "nrupul"]

// The first string "test123", does not contain any of the required characters, hence the string is weak

// The second string "new@t", contains the character `@`, hence the string is strong

// The third string "mon*y", contains the character `*`, hence the string is strong

// The fourth string "nrupul", does not contain any of the required characters, hence the string is weak
// Therefore, the required output becomesweak strong strong weak

==============================================================================================================================
// Nested Reverse Pattern Ended
// Description

// You are given a number, stored in a variable with the namenum

// You have to printnumlines, and on each line print all the numbers starting fromnumto the value 1.

// For example, if the value stored innum = 5, then the required output is

// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1
// 5 4 3 2 1

// Input
// The first and the only line of the input contains the value stored innum


// Output
// Print the output as mentioned in the problem statement


// Sample Input 1 

// 4
// Sample Output 1

// 4 3 2 1
// 4 3 2 1
// 4 3 2 1
// 4 3 2 1
// Hint

// In the sample test case, the value stored innum = 4

// Therefore, we print 4 lines, and on each line, we print all the values from[4,1] in decreasing order.

// Hence, the output will be

// 4 3 2 1
// 4 3 2 1
// 4 3 2 1
// 4 3 2 1

//  // Write code here
//  for(i=1;i<=num;i++){
//     var bag = "";
//     for(j=1;j<=num;j++){
//         bag = j+" " + bag ;
//     }console.log(bag);
// }
============================================================================================================================

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


=============================================================================================================================================


