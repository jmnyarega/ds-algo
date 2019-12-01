/*
 *
 * 1,2,3,4,5,6,7,8
 * 0,1,2,3,4,5,6,7bn
 *
 */
function rearrange(array) {
    for(let j = 0; j < array.length; j++) {
      let i = j + 1
    if(i % 2 === 0 && (array[j] >= array[i])) {
        let temp = array[j]
        array[j] = array[i]
        array[i] = temp 
        i--
        j--
       } else if ((i % 2 === 1) && (array[j] <= array[i])) {
        let temp = array[j]
        array[j] = array[i]
        array[i] = temp 
        i--
        j--
     }
  }
  return array
}

console.log(rearrange([1,2,3,4,5,6]))
