// Encryption Scheme Ended
// Description

// You are given an array stored in a variable with the namearray, and the size of the array is stored in a variable with the nameN

// Now, the array contains two types of numbers,0and1

// You have to find the sum of indexes of all the elements in the array at which1is present. For this problem, consider that the indexing starts from 1

// For example, consider the value stored inN = 5, andarr = [0 1 1 1 1], then the sum becomes2 + 3 + 4 + 5 = 14, which is the required output

// Note : The array contain only 0s and 1s


// Input
// The first line of the input contains the value stored inN

// The next line contains the values stored inarray


// Output
// Print the required sum as explained in the problem statement

// Sample Input 1 

// 5
// 0 1 1 1 1
// Sample Output 1

// 14
// Sample Input 2 

// 5
// 0 1 0 1 0
// Sample Output 2

// 6
// Hint

// In the first sample test case, the indexes with the value 1 are2 3 4 5. Therefore, the required sum becomes2 + 3 + 4 + 5 = 14

// In the second sample test case, the indexes with the value 1 are2 4. Therefore, the required sum becomes2 + 4 = 6

// ==============================================================================================================================

// Odd Palindrome Ended
// Description

// You are given a string stored in a variable with the namestr, and the size of the string is stored in a variable with the nameN

// You have to create another string from the given string, such that the characters present at only the odd indexes are considered, in the same order as they are present instr

// If the new string formed by using the characters present at odd positions in the stringstr, is a palindrome, printyes, else printno

// For example, consider the value stored inN = 6, and the value stored instr = abcdeb. Therefore, the characters present at odd positions areb,d,b. Therefore, the new string formedbdbis a palindrome. Hence, the output becomesyes

// Note : The string contains only smaller case English alphabets. Also, the indexing in the string starts from 0

// Input
// The first line of the input contains the value stored inN

// The next line of the input contains the value stored instr


// Output
// Print the output as per the condition, as mentioned in the problem statement

// Sample Input 1 

// 6
// abcdeb
// Sample Output 1

// yes
// Hint

// In the sample test case, he value stored inN = 6, and the value stored instr = abcdeb. 
// Therefore,
//  the characters present at odd positions areb,d,b. Therefore, the new string formedbdbis a palindrome. 
//  Hence, the output becomesyes

//  ==================================================================================================================================

//  Binary String 2 Ended
// Description

// You are given a string stored in a variable with the namestr, whose length is stored in a variable with the nameN

// The string is binary, which means it contains only 1's and 0's

// You have to find the length of the longest substring which contains only 1's

// For example, consider the value stored inN = 4, andstr = 1101

// All the non empty subarrays of the given string are

// 1
// 11
// 110
// 1101
// 1
// 10
// 101
// 0
// 01
// 1

// The longest substring containing only 1's is11, therefore, the required output is2

// Input
// The first line of the input contains the value stored inN

// The second line contains the value stored instr


// Output
// Print a single integer denoting the length of the longest substring containing only 1's

// Sample Input 1 

// 7
// 1000110
// Sample Output 1

// 2
// Sample Input 2 

// 6
// 000000
// Sample Output 2

// 0
// Hint

// In the first sample test case, the value stored inN = 7, andstr = 1000110. The longest substring containing only 1's is11, whose length is 2 Therefore, the required output is 2

// In the second sample test case, the value stored inN = 6, andstr = 000000. There are no substring with 1's. Therefore, the required output is 0
// ==============================================================================================================================
// Record Breaker Ended
// Description

// Akhil plays regional volleyball and wants to become a pro. Each season he maintains a record of his play. He tabulates the number of times he breaks his season record for most points and least points in a game. Points scored in the first game establish his record for the season, and he begin counting from there.

// Given the scores for a season, determine the number of times Akhil breaks his records for most and least points scored during the season.


// Input
// Input Format

// First-line contains n - the number of season.

// Second-line contains n integer numbers a1, a2, ... an — the score of each season.

// Constraints

// 1 <= n <= 10^3

// 1 <= a[i] <= 10^8


// Output
// For each test case, output the two integers first is for breaking most point records, second is for breaking least point records.


// Sample Input 1 

// 9
// 10 5 20 20 4 5 2 25 1
// Sample Output 1

// 2 4
// Sample Input 2 

// 10
// 3 4 21 36 10 28 35 5 24 42
// Sample Output 2

// 4 0
// Hint

// Sample Input 1,

// The diagram below depicts the number of times Akhil broke his best and worst records throughout the season:

// image

// He broke his best record twice (after games 2and 7) and his worst record four times (after games 1, 4, 6, and 8), so we print2 4as our answer. Note that hedid notbreak his record for best score during game 3, as his score during that game wasnotstrictly greater than his best record at the time.



// Sample Input 2,

// The diagram below depicts the number of times Akhil broke his best and worst records throughout the season:

// image

// He broke his best record four times (after games 1, 2, 3, and 9) and his worst record zero times (no score during the season was lower than the one he earned during his first game), so we print4 0as our answer.

// ============================================================================================================================================

// Result or Tie - Tic Tac Toe Ended
// Description

// You are given a 3 * 3matrix(2d-array) that represents the final situation of a Tic Tac Toe.

// Your task is to write a program that finds out the winner in case the match ended in a win. If the winner is 'x', printx.

// If the winner is 'o', printo.

// In case the match ended in a tie, printTie.


// Input
// InputFormat

// The input contains 3 lines where each line has 3 space separated characters which represent the final status of tic tac toe

// Constraints

// The input contains either of the 2 alphabets: 'x' and 'o'


// Output
// Print Tie/x/o depending on the end result of the game.


// Sample Input 1 

// x o x
// o x x
// o o o
// Sample Output 1

// o
// Hint

// owins as per tic tac toe.

//  //write code here
//  if(matrix[0][0]=="x" && matrix[0][1]=="x" &&matrix[0][2] =="x")
//  {
//      console.log("x")
//  }
//  else if(matrix[0][0]=="o" && matrix[0][1]=="o" &&matrix[0][2] =="o")
//  {
//      console.log("o")
//  }
//  if(matrix[1][0]=="x" && matrix[1][1]=="x" &&matrix[1][2] =="x")
//  {
//      console.log("x")
//  }
//  else if(matrix[1][0]=="o" && matrix[1][1]=="o" &&matrix[1][2] =="o")
//  {
//      console.log("o")
//  }
//  if(matrix[2][0]=="x" && matrix[2][1]=="x" &&matrix[2][2] =="x")
//  {
//     console.log("x")
// }
// else if(matrix[2][0]=="o" && matrix[2][1]=="o" &&matrix[2][2] =="o")
// {
//     console.log("o")
// }
// if(matrix[0][0]=="x" && matrix[1][0]=="x" &&matrix[2][0] =="x")
// {
//     console.log("x")
// }
// else if(matrix[0][0]=="o" && matrix[1][0]=="o" &&matrix[2][0] =="o")
// {
//     console.log("o")
// }
// if(matrix[0][1]=="x" && matrix[1][1]=="x" &&matrix[2][1] =="x")
// {
//     console.log("x")
// }
// else if(matrix[0][1]=="o" && matrix[1][1]=="o" &&matrix[2][1] =="o")
// {
//     console.log("o")
// }
// if(matrix[0][2]=="x" && matrix[1][2]=="x" &&matrix[2][2] =="x")
// {
//     console.log("x")
// }
// else if(matrix[0][2]=="o" && matrix[1][2]=="o" &&matrix[2][2] =="o")
// {
//     console.log("o")
// }
// if(matrix[0][0]=="x" && matrix[1][1]=="x" &&matrix[2][2] =="x")
// {
//     console.log("x")
// }
// else if(matrix[0][0]=="o" && matrix[1][1]=="o" &&matrix[2][2] =="o")
// {
//     console.log("o")
// }
// if(matrix[0][2]=="x" && matrix[1][1]=="x" &&matrix[2][0] =="x")
// {
//     console.log("x")
// }
// else if(matrix[0][2]=="o" && matrix[1][1]=="o" &&matrix[2][0] =="o")
// {
//     console.log("o")
// }
// }
// ===============================================================================================================================================
// Specific Diagonals Ended
// Description

// Given amatrixofRrows andCcolumns which contains distinct integers and you are given a integerKand you need to print both the diagonals crossing through the given elementK, you can always assume that the given element always exist in the matrix.

// image.png

// In this 4*4 Matrix, suppose we need to print the diagonals passing from11, So the output will be :

// 1 6 11 16

// 8 11 14

// Note: You need to print the diagonal from top to bottom also make sure you print the diagonals going fromleft to rightfirst then diagonal goingright to left,on a new lines.


// Input
// The first line of input will contain two integers R and C , denoting the Rows and Columns of the Matrix.

// Next R (rows) lines contain C integers each denoting the matrix elements.

// The next line will contain an integer K, denoting the element for which we need to print the diagonals.



// Constraints:
// 1<= R, C <= 100

// 1<= Matrix[i][j] <= 10^4

// 1<= K <= 10^4


// Output
// Output both the diagonals containing the given element , print both the diagonals in a new line and fromtop to bottomorder.

// Check Hint for better understanding.


// Sample Input 1 

// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// 6
// Sample Output 1

// 2 6
// 6 8
// Sample Input 2 

// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// 5
// Sample Output 2

// 1 5 9
// 3 5 7
// Hint

// In Sample 1:
// R = 3, C = 3

// we need to print the diagonals of 6, also we are printing diagonals from top to bottom and left to right first then right to left , So output will be

// 2 6 -> left to right diagonal and from top to bottom order

// 6 8 -> right to left diagonal and from top to bottom order



// For Sample 2.

// Top Left to Bottom Right diagonal elements are 1 5 6.

// Top Right to Bottom Left diagonals elements are 3 5 7.

// So we print

// 1 5 6

// 3 5 7 on new lines.  



// //write code here
//     for(var i=0;i<R;i++)
//     {
//         for(var j=0;j<C;j++)
//         {
//             if(matrix[i][j]==K)
//             {
//                 var left = i-j
//                 var right = i+j
//             }
//         }
//     }
    
//     var leftdiognal = ""
//     var rightdiognal =""
//     for(var i=0;i<R;i++)
//     {
//         for(var j=0;j<C;j++)
//         {
//             if((i-j)== left)
//             {
//                 leftdiognal = leftdiognal+matrix[i][j]+" "
                
//             }
//             if((i+j)==right)
//             {
//                 rightdiognal = rightdiognal + matrix[i][j]+" "
//             }
//         }
//     }
    
//     console.log(leftdiognal);
//     console.log(rightdiognal);


//     ==========================================================================================================================

//     Rotate By 90 Ended
// Description

// Given a squarematrixof sizeN, turn it by 90 degrees in an anti-clockwise direction, as shown in sample input.


// Input
// Input Format

// First line will contain the number of rows N (same as the number of columns)

// After that next N lines will N rows of the matrix.

// Constraints

// 1 <= N <=1000

// 1 <= Elements Of the Matrix <= 10000




// Output
// You have to display therotated matrix.


// Sample Input 1 

// 4
// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8
// Sample Output 1

// 4 8 4 8
// 3 7 3 7
// 2 6 2 6
// 1 5 1 5
// ==================================================================================================================================
