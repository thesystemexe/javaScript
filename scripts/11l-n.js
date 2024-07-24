function mixMax(nums) {
  let minValue = nums[0];
  let maxValue = nums[0];
  if (nums.length === 0) {
    return { minValue: null, maxValue: null };
  }
  for (let i = 0; i < nums.length; i++) {
    if (minValue > nums[i]) {
      minValue = nums[i];
    }
    if (maxValue < nums[i]) {
      maxValue = nums[i];
    }
  }
  return { minValue, maxValue };
}

console.log(mixMax([]));

function countStrings(array) {
  const counts = {};

  for (const str of array) {
    if (counts[str]) {
      counts[str]++;
    } else {
      counts[str] = 1;
    }
  }

  return counts;
}

console.log(countStrings(["apple", "mango", "apple"]));
