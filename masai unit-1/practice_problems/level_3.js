// Map Characters Ended
// Description

// You are given a number stored in a variable with the nameN

// You have to print the first N English smaller case alphabets, mapped with the values starting from 1 toN, including the value stored inN

// For example, consider the value stored inN = 3, then the required output will be

// a-1
// b-2
// c-3
// Note : The value stored in N will always be less than or equal to 26, and greater than 0 

// Input
// The first and the only line of the input contains the value stored inN

// Output
// Print the output as shown in the problem statement

// Sample Input 1 

// 5
// Sample Output 1

// a-1
// b-2
// c-3
// d-4
// e-5
// Hint

// In the sample test case, the value stored inN = 5. Therefore, we have to print the first 5 smaller case English alphabets. Therefore, the output becomes

// a-1
// b-2
// c-3
// d-4
// e-5

//   // Write code here
//   var alpha = "abcdefghijklmnopqrstuvwxyz";
//   var obj ={} ;
//   for(i=0;i<N;i++)
//   {
//       var output=alpha[i];
//       obj[output] = i+1; 
  
//   }
  
//   for(var key in obj)
//   {
//       console.log(key+"-"+obj[key]); 
//   }
===================================================================================================================
Map Characters Again Ended
Description

You are given a number stored in variable with the nameN

You have to map all the lowercase English characters, to a number starting from the value stored inN, and incrementing it by 1 at every step

For example, consider the value stored inN = 30, then the required output will be

a-30
b-31
c-32
d-33
e-34
f-35
g-36
h-37
i-38
j-39
k-40
l-41
m-42
n-43
o-44
p-45
q-46
r-47
s-48
t-49
u-50
v-51
w-52
x-53
y-54
z-55


Input
The first and the only line of the input contains the value stored inN

Output
Print the output as shown in the problem statement

Sample Input 1 

30
Sample Output 1

a-30
b-31
c-32
d-33
e-34
f-35
g-36
h-37
i-38
j-39
k-40
l-41
m-42
n-43
o-44
p-45
q-46
r-47
s-48
t-49
u-50
v-51
w-52
x-53
y-54
z-55
Hint

In the sample test case, the value stored inN = 30

Therefore, the required output will be

a-30
b-31
c-32
d-33
e-34
f-35
g-36
h-37
i-38
j-39
k-40
l-41
m-42
n-43
o-44
p-45
q-46
r-47
s-48
t-49
u-50
v-51
w-52
x-53
y-54
z-55


=====================================================================================================

Map Characters & Sum Ended
Description

You are given a number stored in a variable with the nameN

You are also, given a string, whose length is stored in a variable with the nameK, and the string is stored in a variable with the namestr

You have to map all lower case English characters, starting from the value stored inN.

For example, if the value stored inN = 30, then the mapping of the characters will be as follows

a-30
b-31
c-32
d-33
e-34
f-35
g-36
h-37
i-38
j-39
k-40
l-41
m-42
n-43
o-44
p-45
q-46
r-47
s-48
t-49
u-50
v-51
w-52
x-53
y-54
z-55
Finally, you have to print the sum of all the characters, present in the stringstr, according to the values mapped above

For example, if the value stored instr = "abc", then the required output will be

30 + 31 + 32 = 93, which is the required output

Input
The first line of the input contains the value stored inN

The second line of the input contains the value stored inK

The last line of the input contains the value stored in thestr


Output
Print the sum of characters, according to the values mapped, as shown in the problem statement

Sample Input 1 

30
3
abc
Sample Output 1

93
Hint

In the sample test case, the value stored inN = 30, then the mapping of the characters will be as follows

a-30
b-31
c-32
d-33
e-34
f-35
g-36
h-37
i-38
j-39
k-40
l-41
m-42
n-43
o-44
p-45
q-46
r-47
s-48
t-49
u-50
v-51
w-52
x-53
y-54
z-55
Finally, you have to print the sum of all the characters, present in the stringstr, according to the values mapped above

For example, if the value stored instr = "abc", then the required output will be

30 + 31 + 32 = 93, which is the required output


================================================================================================================================
// Map Numbers Ended
// Description

// You are given a number stored in a variable with the nameN

// You are given another number stored in a variable with the nameK

// You have to map all the numbers in the range of[1, N], including the values stored inN, such that the mapping begins fromK

// For example, consider the value stored inN = 5, andK = 10, then the required output will be

// 1-10
// 2-11
// 3-12
// 4-13
// 5-14

// Input
// The first line of the input contains the value stored inN

// The next line of the input contains the value stored inK


// Output
// Print the output as shown in the problem statement

// Sample Input 1 

// 5
// 10
// Sample Output 1

// 1-10
// 2-11
// 3-12
// 4-13
// 5-14
// Hint

// In the sample test case, the value stored inN = 5, andK = 10, then the required output will be

// 1-10
// 2-11
// 3-12
// 4-13
// 5-14

// //write code here
// var obj ={}
// for(var i=1;i<=N;i++)
// {
//     obj[i]=K;
//     K++;
// }

// for(var key in obj)
// {
//     console.log(key+"-"+obj[key]);
// }
===========================================================================================================================

// ap Symbols Ended
// Description

// You are given a number stored in a variable with the nameN

// You have to map the following symbols starting from the valueN

// The mapping is such that the difference between the values of two characters, is 2

// '!','@','#','$','%','^','&','*'

// For example, consider the value stored inN = 10, then the required output will be
// !-10
// @-12
// #-14
// $-16
// %-18
// ^-20
// &-22
// *-24


// Input
// The first and the only line of the input contains the value stored inN

// Output
// Print the mapping for the symbols starting fromN, as shown in the problem statement

// Sample Input 1 

// 20
// Sample Output 1

// !-20
// @-22
// #-24
// $-26
// %-28
// ^-30
// &-32
// *-34
// Hint

// In the sample test case, the value stored inN = 20. Therefore, the required output will be
// !-20
// @-22
// #-24
// $-26
// %-28
// ^-30
// &-32
// *-34
// // Write code here
// var arr = ['!','@','#','$','%','^','&','*']
// var obj = {}
// // var bag =N;

// for (var i=0;i<arr.length;i++)
// {
//     var x=arr[i];
//     obj[x]= N;
//     N =  N+2;
// }
// for(var key in obj)
// {
//     console.log(key+"-"+obj[key]);
// }
=============================================================================================================
