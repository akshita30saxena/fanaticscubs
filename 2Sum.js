var twoSum = function (numbers, target) {
  let result = [];
  let left = 0;
  let right = numbers.length - 1;
  let total = 0;

  // use binary search O(N) for 2 pointers questions

  while (left < right) {
    total = numbers[left] + numbers[right];
    if (total === target) {
      result.push([left + 1, right + 1]);
      left++;
      right--;
    } else if (total > target) {
      right--;
    } else {
      left++;
    }
  }
  //wohooo O(N)
  return result;
};

console.log(twoSum([1, 2, 2, 3, 4, 5, 6], 7));
//O(n)
