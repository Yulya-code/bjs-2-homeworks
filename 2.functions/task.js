// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    arr[i] > max ? max = arr[i] : max = max;
    arr[i] < min ? min = arr[i] : min = min;
    sum += arr[i];
  }
    avg = +(sum/arr.length).toFixed(2); 

  return { min: min, max: max, avg: avg };
}


// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let a = func(arrOfArr[i]);
    a > max ? max = a : max = max;
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min;
  let max;

  min = arr[0];
  max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    arr[i] > max ? max = arr[i] : max = max;
    arr[i] < min ? min = arr[i] : min = min;
  } 

 return (max - min);

}
