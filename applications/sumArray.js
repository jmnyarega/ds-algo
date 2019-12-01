function findPairs(array, sum) {
    let r = array.length - 1
    let l = 0
    let pairs = []
    while(l < r) {
        if ((array[l] + array[r]) === sum) {
            pairs.push([ array[l], array[r] ])
            l++;
        } else if (( array[l] + array[r] ) < sum) {
            l++;
        }
        r--
    }
    return pairs
}

findPairs([], 90)

function getMaxElement(array) {
    let i = 0
    while(i < array.length) {
        if (array[i] > array[i+1]) {
            return i
        }
        i++
    }
    return -1
}

function findRotatedArrayPairs(array, sum) {
    let r = getMaxElement(array) 
    let l = r + 1
    let rCounter = 0
    let pairs = []
    // @TODO use % (modulo) instead of resetting the array
    while(rCounter <= array.length / 2) {
       if (l > array.length - 1) l = 0
       if (r < 0) r = array.length - 1
       if ((array[r] + array[l]) === sum) {
           pairs.push([array[l], array[r]])
           l++
        } else if ((array[l] + array[r]) < sum) {
            l++
        }
        r--
        rCounter++
    }
    return pairs
}

console.log(findRotatedArrayPairs([5, 6 , 0, 1, 2, 3, 4], 5))
