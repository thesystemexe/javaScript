/*const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);

function getLastValue(array) {
  return array[array.length - 1];
}
console.log(getLastValue(nums));

function arraySwap(arr){
    let temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
    return arr;
}

console.log(arraySwap(nums));
*/
for (let i = 1; i <= 5; i++) {
  const countBy2 = i * 2;
  console.log(countBy2);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

const arr = [1, 2, 3];
let count1 = [];
for (let i = 0; i < arr.length; i++) {
  count1[i] = arr[i] + 1;
 
}
console.log(count1);

function addOne(array){
    for (let i = 0; i < array.length; i++) {
        array[i] +=1;
    }
    return array;
}

console.log(addOne(arr));
