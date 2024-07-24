function addNum(array, num) {
  for (let i = 0; i < array.length; i++) {
    array[i] += num;
  }
  return array;
}
console.log(addNum([1, 2], 1));

let array3 = [];

function addArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    array3[i] = array1[i] + array2[i];
  }

  return array3;
}

console.log(addArrays([1, 2], [1, 2]));

let positveOnly = [];

function countPositive(nums){
    for(let i =0; i<nums.length; i++){
        if(nums[i]>=0){
            positveOnly.push(nums[i]);
        }
    }
    return positveOnly;
}

console.log(countPositive([1,0,-1,-2,6]));