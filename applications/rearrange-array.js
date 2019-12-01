function rearrange(array) {
  for (let i in array) {
    if (array[i] === i) {
      continue
    } else {
      if (array[i] === -1) {
        continue
      } else {
        let data=array[i];
        let value=array[data];
        array[i]=value;
        array[data]=data;
        i--;
      }
    }
  }
  return array
}

rearrange([21,-1, 19, 7, 0, 3, 18, 15, 12, 6, 1, 8, 11, 10, 9, 5, 13, 16, 2, 14, 17, 4])
