console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 21, 30, 34]));
function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];

  //   for (let i = 0, j = 0; i < arr1.length, j < arr2.length; ) {
  //     if (arr2[j] || arr1[i] < arr2[j]) {
  //       mergedArray.push(arr1[i]);
  //       i++;
  //     } else if (arr2[j] < arr1[i]) {
  //       mergedArray.push(arr2[j]);
  //       j++;
  //     } else {
  //       mergedArray.push(arr1[i]);
  //       mergedArray.push(arr2[j]);
  //       i++;
  //       j++;
  //     }
  //   }
  let i = 0;
  let j = 0;
  while (arr1[i] || arr2[j]) {
    if (!arr2[j] || arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else if (!arr1[i] || arr2[j] < arr1[i]) {
      mergedArray.push(arr2[j]);
      j++;
    } else {
      mergedArray.push(arr1[i]);
      mergedArray.push(arr2[j]);
      i++;
      j++;
    }
  }
  return mergedArray;
}
