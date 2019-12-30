function missingNumber(arr, n, m) {
  if (arr[0] !== 0) return 0;
  for (let i = 0; i < arr.length; i++) {
    if((arr[i+1] - arr[i]) > 1) {
      return arr[i] + 1;
    }
  }
}

const missing = missingNumber([0,1,2,3,9], 5, 10);
console.log(missing); // 3
