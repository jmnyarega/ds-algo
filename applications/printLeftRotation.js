function printLeftRotation(arr, k) {
  let n = arr.length
  let mod = k % n
  for (let i in arr) {
    console.log(arr[(Number(mod) + Number(i)) % n])
  }
}

printLeftRotation([1, 3, 5, 7, 9], 1)
