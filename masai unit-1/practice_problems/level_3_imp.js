// Sum Three Equations Ended
// Description

// You are given two numbers, stored in a variable with the names,a, b

// You have to find the sum ofX,YandZ

// 1. X = (a*3) + (b*5)

// 2. Y = (a*7) + (b*4)

// 3. Z = a*b
// Find the value of sum, such thatsum = X + Y + Z


// Input
// The first and the only line of the input contains the value stored in thea, b


// Output
// Print the value of the sum, as explained in the problem statement


// Sample Input 1 

// 2 3
// Sample Output 1

// 53
// Hint

// In the sample test case, the value stored ina = 2, b = 3

// The value of

// X = (2*3) + (3*5) = 6 + 15 = 21

// Y = (2*7) + (3*4) = 14 + 12 = 26

// Z = 2 * 3 = 6

// Therefore, the value ofsum = 21 + 26 + 6 = 53, which is the required output


// /Enter code here
//   var x = (a*3) + (b*5);
//   var y = (a*7) + (b*4);
//   var z = a*b;
  
//   console.log(x+y+z);
// }
==============================================================================================================================

// The Senior Citizen Ended
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









// function isSeniorCitizen(age) {
//     // Write code here
//     if(age>=60)
//     {
//         console.log("Senior Citizen");
//     }
//     else{
//         console.log("Not Senior Citizen");
//     }

//     ===========================================================================================================================


//     Average of Primes Ended
// Description

// You are given a number, stored in a variable with the namenum. Find out the average of sum of all prime numbers in the range of [1,num], including the value stored innum

// Note :Considering 1 is not a prime number


// Input
// The first and the only line of the input contains the value stored innum


// Output
// Print thefloor value of average of sumof all prime numbers in the range of[1,num], includingnumitself


// Sample Input 1 

// 13
// Sample Output 1

// 6
// Hint

// In the sample test case, the value stored innum = 13. Therefore, all the prime numbers, in the range of[1,num]are

// 2
// 3
// 5
// 7
// 11
// 13

// Therefore, the sum of prime numbers becomes,2 + 3 + 5 + 7 + 11 + 13 = 41, number of prime numbers are 6.

// Therefore, the average becomes41 / 6 = 6.83, flooring the value to6, which is the required answer.






// ========================================================================================================================

// Playing With Array Ended
// Description

// You are given an array stored in a variable with the namearr

// The size of the array is stored in a variable with the nameN

// You have to find the value of the equationx*y,

// where x - sum of even elements in the array
// and y - sum of odd elements in the array

// For example, consider the value stored inN = 4, andarr = [1 2 3 4]

// Therefore, the value ofx = 2 + 4 = 6, and the value ofy = 1 + 3 = 4

// Therefore, the value of the given equation =x*y = 6*4 = 24, which is the required answer


// Input
// The first line of the input contains the value stored inN

// The next line contains the elements of the array, which are stored inarr


// Output
// Print the value of the equation, as explained in the problem statement

// Sample Input 1 

// 4
// 1 2 3 4
// Sample Output 1

// 24
// Hint

// In the sample test case, the value stored inN = 4, andarr = [1 2 3 4]

// Therefore, the value ofx = 2 + 4 = 6, and the value ofy = 1 + 3 = 4

// Therefore, the value of the given equation =x*y = 6*4 = 24, which is the required answer



// // Write your code here! 
// var x=0;
// var y = 0;

// for(var i=0;i<N;i++)
// {
//    if(arr[i]%2==0)
//    {
//        x = x+ arr[i]
//    }
// }
//     //console.log(x)
    
//     for(var j=0;j<N;j++)
// {
//     if(arr[j]%2 !=0)
//     {
//         y = y+ arr[j] 
//     }
// }
//   // console.log(y)
// console.log(x*y)


// ============================================================================================================================================


// Cart Total Ended
// Description

// You are given two arrays, both of given sizeN

// The first array represents the price of commodities present in your cart, represented by the variable nameprice

// The second array represents the quantity of each commodity that you need, represented by the variable namequantity

// You have to find the total price of the commodities present in the cart

// For example, consider the value stored inN = 3, and the first array isprice = [100,20,40], and the second array isquantity = [2,1,2]

// Then, the required cart total will be

// Cart Total = (100 * 2 + 20 * 1 + 40 * 2) = (200 + 20 + 80) = 300
// Therefore, the required output will be 300

// Input
// The first line of the input contains the value stored inN

// The next line containsNspace separated integers denoting the values stored in thepricearray

// The next line containsNspace separated integers denoting the values stored inquantityarray


// Output
// Print the total cart value, as shown in the problem statement

// Sample Input 1 

// 3
// 100 20 40
// 2 1 2
// Sample Output 1

// 300
// Hint

// In the sample test case, the value stored inN = 3, and the first array isprice = [100,20,40], and the second array isquantity = [2,1,2]

// Then, the required cart total will be
// Cart Total = (100 * 2 + 20 * 1 + 40 * 2) = (200 + 20 + 80) = 300
// Therefore, the required output will be 300


// =============================================================================================================================


// String Modification - II Ended
// Description

// You are given a string of odd length, such that the length of the string is stored in a variable with the nameN

// The string is stored in a variable with the namestr

// You have to create a modified string, such that, the second half of the string is pushed to the front, while the first half of the stringis pushed to the back, keeping the middle character at the same position

// For example, consider the value stored instr = varun, andN = 5

// Then, in the modified string, the second half, whichun, is brought to the front, while the first half,va, keeping the middle character at the same position

// Therefore, the new modified string isunrva


// Input
// The first line of the input contains the value stored inN

// The next line contains the value stored instr


// Output
// Print the modified string as explained in the problem statement

// Sample Input 1 

// 5
// varun
// Sample Output 1

// unrva
// Hint

// In the sample test case, the value stored instr = varun, andN = 5

// Then, in the modified string, the second half, whichun, is brought to the front, while the first half,va, keeping the middle character at the same position

// Therefore, the new modified string isunrva

// ==========================================================================================================================================


// String Modification - III Ended
// Description

// You are given a string, whose length is stored in a variable with the nameN

// The string is stored in a variable with the namestr

// It is given that the length of the string is always divisible by 3

// You have to create a new modified string, such that individual parts of the original string of length 3, are reversed

// For example, consider the given string isstr = abcdefghi, andN = 9. In this case, there are 3 parts of the string with length 3

// The first part isabc, the second part isdef, and the third part isghi. Now, you have to reverse all the three parts, and combine them in the same order as before

// Therefore, the first part after reversing iscba, second part after reversing isfed, and the third part after reversing isihg

// Combining the three parts, the new modified string becomescbafedihg, which is the required answer


// Input
// The first line of the input contains the value stored inN

// The second line of the input contains the value stored instr


// Output
// Print the modified string as shown in the problem statement

// Sample Input 1 

// 9
// abcdefghi
// Sample Output 1

// cbafedihg
// Hint

// In the sample test case, given string isstr = abcdefghi, andN = 9. In this case, there are 3 parts of the string with length 3

// The first part isabc, the second part isdef, and the third part isghi. Now, you have to reverse all the three parts, and combine them in the same order as before

// Therefore, the first part after reversing iscba, second part after reversing isfed, and the third part after reversing isihg

// Combining the three parts, the new modified string becomescbafedihg, which is the required answer

// =====================================================================================================================================


// Map Symbols & Sum Ended
// Description

// You are given a string, stored in a variablestr, and the length of the string is stored in a variableN

// The string contains characters only from the below symbols

// '!','@','#','$','%','^','&','*'
// Now every character is mapped to a certain value, such that the mapping starts from 1 and the difference between the values of two characters, is 1. Therefore, the mapping looks as follows
// '!' : 1
// '@' : 2
// '#' : 3
// '$' : 4
// '%' : 5
// '^' : 6
// '&' : 7
// '*' : 8
// You have to find the sum of all characters in the string

// For example, consider the value stored inN = 4, andstr = "!@#$", then the required output will be

// 1(value of !) + 2 (value of @) + 3 (value of #) + 4 (value of $) = 10, which is the required output
// Note : The string contains only the symbols mentioned above, and no other characters are present in the string

// Input
// The first line of the input contains the value stored inN

// The next line contains the value stored instr


// Output
// Print the sum of the characters, present instr, according to the values associated with the different symbols, as shown in the problem statement

// Sample Input 1 

// 4
// !@#$
// Sample Output 1

// 10
// Hint

// In the sample test case, the value stored inN = 4, andstr = "!@#$", then the required output will be

// 1(value of !) + 2 (value of @) + 3 (value of #) + 4 (value of $) = 10, which is the required output



// ===========================================================================================================================================

// Matrix Sum Prime Check Ended
// Description

// In this question, you are given a 2D array stored in a variable with the namearr

// The number of rows in the matrix is stored in the variable with the nameN, while the number of columns stored in the matrix is stored in a variable with the nameM

// You have to find the sum of matrix and printtrueorfalsebased on weather thatsumisprimeor not.

// For example, consider the value stored inN = 3, andM = 3, and

// N = 3 M = 3

// arr = [[1 2 3]
//        [4 5 6]
//        [7 8 9]]
// The sum of elements of matrix is1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45.45is not a prime number therefore, the required output isfalse`

// Note : The 2D array may contain duplicate elements. Each instance of a prime number should be counted separately

// Input
// The first line of the input contains the values stored inNandM

// The next line contains the values stored inarr


// Output
// Printtrueorfalsebased on weather thatsumisprimeor not.

// Sample Input 1 

// 3 3
// 1 2 3 
// 4 5 6
// 7 8 9
// Sample Output 1

// false
// Hint

// In the sample test case, the value stored inN = 3, andM = 3, and

// N = 3 M = 3

// arr = [[1 2 3]
//        [4 5 6]
//        [7 8 9]]
// The sum of elements of matrix is1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45.45is not a prime number therefore, the required output isfalse


// =====================================================================================================================================

// Corner Column Sum Ended
// Description

// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr

// You have to print the sum of elements of the first and last column of the 2D array

// For example, consider the value stored inN = 3,M = 3, and the array isarr = [1,2,7],[3,4,6],[5,6,10], then the required output will be

// the first column contains elements 1, 3 and 5
// the last column contains elements 7, 6 and 10

// Total Sum = 1 + 3 + 5 + 7 + 6 + 10 = 32


// Input
// The first line of the input contains the value stored inNandM

// The nextNlines containMvalues each denoting the value stored inarr


// Output
// Print thesum of elements of the first and last column presentin the 2D Array

// Sample Input 1 

// 3 3
// 1 2 7
// 3 4 6
// 5 6 10
// Sample Output 1

// 32
// Hint

// In the sample test case, the value stored inN = 3,M = 3, and the array isarr = [1,2,7],[3,4,6],[5,6,10], then the required output will be

// 1 + 3 + 5 + 7 + 6 + 10 = 32, which is the required output
// ===========================================================================================================================

// Spiral Traversal (Rectangular Matrix) Ended
// Description

// You are given a matrix of size N x M.

// Print the spiral traversal of the matrix.

// Refer the image given below, for better understanding.

// Screenshot (116).png


// Input
// The first line of the input contains T, the number of test cases.

// The first line of each test case contains N and M, the number of rows and columns in the given matrix.

// The next N lines contain M values each denoting the elements of the matrix.

// Constraints

// 1 <= T <= 10

// 1 <= N, M <= 200

// 1 <= A[i][j] <= 200


// Output
// For each test case, print the spiral traversal of the matrix, on a single line, on a new line.


// Sample Input 1 

// 2
// 3 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 4 3
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12
// Sample Output 1

// 1 5 9 10 11 12 8 4 3 2 6 7 
// 1 4 7 10 11 12 9 6 3 2 5 8 
// Sample Input 2 

// 1
// 4 3
// 1 10 9
// 2 11 8
// 3 12 7
// 4 5 6 
// Sample Output 2

// 1 2 3 4 5 6 7 8 9 10 11 12 
// Hint

// The spiral traversal of the elements given in the matrix, is printed in the sample output.
