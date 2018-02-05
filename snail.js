/*
4 Kyu

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
*/

const snail = (arr) => {
  let res = [];
  
  if(arr.length === 0) {
    return res;

  } else if (arr.length === 1) {

    return res.concat(arr[0]);
    
  } else {

    let max = arr.length-1;
    
    //grab first row
    for(let i = 0; i <= max; i++) {
      res.push(arr[0][i]);
    }
  
    //grab last column
    for(let i = 1; i < max; i++) {
      res.push(arr[i][max]);
    }
    
    //grab last row
    for(let i = max; i >= 0; i--) {
      res.push(arr[max][i]);
    }
    
    //grab first column
    for(let i = max-1; i > 0; i--) {
      res.push(arr[i][0]);
    }
    
    let subArr = [];
    
    //form inner matrix
    for(let i = 1; i < max; i++) {
      subArr.push(arr[i].splice(1,max-1));
    }
    
    res = res.concat(snail(subArr));
    
    return res
    
  }
  
}