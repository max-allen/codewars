/*
6 Kyu

Complete the solution so that it reverses all of the words within the string passed in.

Example:

reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"
*/

const reverseWords = (str) => {
  let arr = str.split(' ');
  let newArr = [];
  for(let i = arr.length-1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr.join(' ')
}