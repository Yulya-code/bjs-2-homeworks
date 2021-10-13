function compareArrays(arr1, arr2) {
  let result = true;

if (arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx])) {
  return result;
} else {
  return false;
}
}


function advancedFilter(arr) {
  let resultArr = arr.filter((item => item > 0 && item % 3 === 0)). map((item => item * 10));

  return resultArr; // array
}
