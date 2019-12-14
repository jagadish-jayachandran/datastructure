# datastructure

1) how to find duplicate number on integer array using any programming language?
for example : array of inegers = [12,2,3,42,2];

Method1:

first check the array is empty or not
using loop conditions check first number with remaining numbers if same number is available push it to new array (using for loop statement)
second number with remaining numbers and like so on ..
return new array

Method2 :

check array empty  or not if empty return 0
sort the array and assign first number to integer and check using while loop
if second number is greater than first number exit
assign second number  and check conditions untill equal to previous one if found same numver push to new array
return new array

2) how to find 2nd smallest element in unsorted array?

for instance : [32,3,2,4,6,7,87]

Method1 :

check the array empty or not if empty return 0
sort array return second number in array if length > 1 

Method2:

if array length > 1 check first number is greater than following two remaining numbers  if true remove assigned number from new array
assign second number like so on
assign first number using newarray amd check it less than with following two consecutive numbers , if true, remove assigned number from new array.

3) how to reverse string using iteration and recursion?

Method 1:

convert string to array if found emptyspace replace with (_)
find length of array
using for loop statment in decreaing order(n-1) push to new array

4) what is a closure and explain with example?

i think that closure is used for set and map the values for operations like union or intersection of A and B

for example :
A is {2,6,5,3}
B is {1,2,3,4,8,9}

if A union B operations, 
C is {1,2,3,4,5,6,8,9}
explanation : merge two set of values and removes duplicate values

if A intersection B operations,
c is {2,3}
explanation: fetching common values from both set


