// Your first 2D Array Problem Ended
// Description

// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr

// You have to print the elements of the 2D array, row by row

// For example, consider the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// 1 2
// 3 4 
// 5 6

// Input
// The first line of the input contains the value stored inNandM

// The nextNlines containMvalues each denoting the value stored inarr


// Output
// Print the output as shown in the problem statement

// Sample Input 1 

// 3 2
// 1 2
// 3 4
// 5 6
// Sample Output 1

// 1 2
// 3 4
// 5 6
// Hint

// In the sample test case, the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// 1 2
// 3 4
// 5 6

//   //write code here

//   for(var i=0;i<N;i++)
//   {
//          var bag = "";
//       for(var j=0;j<M;j++)
//       {
//           bag = bag+  arr[i][j]+ " "
//       } console.log(bag)
//   } 
===========================================================================================================================
// Sum of Rows Ended
// Description

// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr

// You have to print the sum of all elements in a row, on a new line

// For example, consider the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// 3 (Adding the elements of the row [1,2])
// 7 (Adding the elements of the row [3,4])
// 11(Adding the elements of the row [5,6])

// Input
// The first line of the input contains the value stored inNandM

// The nextNlines containMvalues each denoting the value stored inarr


// Output
// Print the sum of each row, on a new line. You have to do this for all rows of the matrix

// Sample Input 1 

// 3 2
// 1 2 
// 3 4
// 5 6
// Sample Output 1

// 3
// 7
// 11
// Hint

// In the sample test case, the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// 3 (Adding the elements of the row [1,2])
// 7 (Adding the elements of the row [3,4])
// 11(Adding the elements of the row [5,6])


// function sumOfRows(N,M,arr){
//     //write code here
//     for(var i=0;i<N;i++)
//     {
//         var sum = 0
//         for(var j=0;j<M;j++)
//         {
//             sum = sum + arr[i][j]
//         }console.log(sum)
//     }
=======================================================================================================================================


// Sum of Indexes Ended
// Description

// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr

// You have to print the sum of indexes of the 2D array for all positions in the 2D array

// For example, consider the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// At index (0,0), the sum of indexes becomes (0 + 0 = 0)
// At index (0,1), the sum of indexes becomes (0 + 1 = 1)
// At index (1,0), the sum of indexes becomes (1 + 0 = 1)
// At index (1,1), the sum of indexes becomes (1 + 1 = 2)
// At index (2,0), the sum of indexes becomes (2 + 0 = 2)
// At index (2,1), the sum of indexes becomes (2 + 1 = 3)

// Therefore, the output becomes 

// 0 1
// 1 2
// 2 3


// Input
// The first line of the input contains the value stored inNandM

// The nextNlines containMvalues each denoting the value stored inarr


// Output
// Print the sum of indexes for all positions in the 2D array, as shown in the problem statement

// Sample Input 1 

// 3 2
// 1 2
// 3 4
// 5 6
// Sample Output 1

// 0 1
// 1 2
// 2 3
// Hint

// In the sample test case, the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// At index (0,0), the sum of indexes becomes (0 + 0 = 0)
// At index (0,1), the sum of indexes becomes (0 + 1 = 1)
// At index (1,0), the sum of indexes becomes (1 + 0 = 1)
// At index (1,1), the sum of indexes becomes (1 + 1 = 2)
// At index (2,0), the sum of indexes becomes (2 + 0 = 2)
// At index (2,1), the sum of indexes becomes (2 + 1 = 3)

// Therefore, the output becomes 

// 0 1
// 1 2
// 2 3


//  //write code here
//  for(var i=0;i<N;i++)
//  {
//      var bag = ""
//      for(var j = 0;j<M;j++)
//      {
//          bag = bag + (i + j)+" "
//      } 
//      console.log(bag)
//  }
========================================================================================================================

// Even Sum in Rows Ended
// Description

// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr

// For all rows, you have to print the sum of even elements present in the row

// For example, consider the value stored inN = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

// 2  (Even numbers in the row are, [2]. Therefore, the sum becomes 2)
// 10 (Even numbers in the row are, [4,6]. Therefore, the sum becomes 10) 
// 8  (Even numbers in the row are, [8]. Therefore, the sum becomes 8)


// Input
// The first line of the input contains the value stored inNandM

// The nextNlines containMvalues each denoting the value stored inarr


// Output
// For each row, print the sum of even numbers present in the row, line by line

// Sample Input 1 

// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 2
// 10
// 8
// Hint

// In the sample test case, the value stored inN = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

// 2  (Even numbers in the row are, [2]. Therefore, the sum becomes 2)
// 10 (Even numbers in the row are, [4,6]. Therefore, the sum becomes 10) 
// 8  (Even numbers in the row are, [8]. Therefore, the sum becomes 8)

// //write code here
// for(var i=0;i<N;i++)
// {
//     var bag = 0;
//     for(var j=0; j<M;j++)
//     {  if(arr[i][j]%2==0)
//         bag = bag + arr[i][j]
//     }
//     console.log(bag)
// }
// =============================================================================================================================
// Vowels in Rows Ended
// Description

// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr, and contains lower case English characters

// You have to printYes, if any particular row of a 2D array contains at least one vowel, at least printNo

// For example, consider the value stored inN = 3,M = 2, and the array isarr = [a,b],[c,d],[e,f], then the required output will be

// Yes (This row contains the vowel a)
// No  (This row does not contains any vowel)
// Yes (This row contains the vowel e)


// Input
// The first line of the input contains the value stored inNandM

// The nextNlines containMvalues each denoting the value stored inarr


// Output
// For each row, printYes, if the row contains at least one vowel, otherwise printNo

// Sample Input 1 

// 3 2
// a b
// c d
// e f
// Sample Output 1

// Yes
// No
// Yes
// Hint

// In the sample test case, the value stored inN = 3,M = 2, and the array isarr = [a,b],[c,d],[e,f], then the required output will be

// Yes (This row contains the vowel a)
// No  (This row does not contains any vowel)
// Yes (This row contains the vowel e)


//  //write code here
//  var vowel = "aeiou";
     
//  for(var i=0 ;i<N;i++)
//  {  var x = false;
//      for(var j=0;j<M;j++)
//      {
//          if(arr[i][j]=="a"||arr[i][j]=="e"||arr[i][j]=="i"||arr[i][j]=="o"||arr[i][j]=="u")
//          {
//               x=true
//          }
//      }
//      if(x==true)
//      {
//          console.log("Yes")
//      }
//      else
//      {
//          console.log("No")
//      }
//  }
=====================================================================================================================================

Even Sum in Columns Ended
Description

You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

The 2D array is stored in a variable with the namearr

For all columns, you have to print the sum of even elements present in the column

For example, consider the value stored inN = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

4  (Even numbers in the column are, [4]. Therefore, the sum becomes 4)
10 (Even numbers in the row are, [2,8]. Therefore, the sum becomes 10) 
6  (Even numbers in the row are, [6]. Therefore, the sum becomes 6)


Input
The first line of the input contains the value stored inNandM

The nextNlines containMvalues each denoting the value stored inarr


Output
For each column, print the sum of even numbers present in the column, line by line

Sample Input 1 

3 3
1 2 3
4 5 6
7 8 9
Sample Output 1

4
10
6
Hint

In the sample test case, the value stored inN = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

4  (Even numbers in the column are, [4]. Therefore, the sum becomes 4)
10 (Even numbers in the row are, [2,8]. Therefore, the sum becomes 10) 
6  (Even numbers in the row are, [6]. Therefore, the sum becomes 6)

 //write code here
 for(var i=0;i<M;i++)
 {
     var bag = 0;
     for(var j=0; j<N;j++)
     {  if(arr[j][i]%2===0)
         bag = bag + arr[j][i]
     }
     console.log(bag)
 }
 ===============================================================================================================================

//  Odd Sum in Columns Ended
// Description

// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr

// For all columns, you have to print the sum of odd elements present in the column

// For example, consider the value stored inN = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

// 8  (Odd numbers in the column are, [1,7]. Therefore, the sum becomes 8)
// 5  (Odd numbers in the column are, [5]. Therefore, the sum becomes 5) 
// 12 (Odd numbers in the row are, [3,9]. Therefore, the sum becomes 12)


// Input
// The first line of the input contains the value stored inNandM

// The nextNlines containMvalues each denoting the value stored inarr


// Output
// For each column, print the sum of odd numbers present in the column, line by line

// Sample Input 1 

// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 8 
// 5 
// 12
// Hint

// In the sample test case, the value stored inN = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

// 8  (Odd numbers in the column are, [1,7]. Therefore, the sum becomes 8)
// 5  (Odd numbers in the column are, [5]. Therefore, the sum becomes 5) 
// 12 (Odd numbers in the row are, [3,9]. Therefore, the sum becomes 12)

//   //write code here
//   for(var i=0;i<M;i++)
//   {
//       var bag = 0;
//       for(var j=0; j<N;j++)
//       {  if(arr[j][i]%2 == 1)
//           bag = bag + arr[j][i]
//       }
//       console.log(bag)
// }
=======================================================================================================================
