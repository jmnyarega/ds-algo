function rotate(array=[], index) {
    return array.slice(index, array.length).concat(array.slice(0, index))
}

rotate([1,2,3,4,5,6,7,8,9,10], 5)

function rotateMethodTwo(array=[], index) {
    let i = index
    let temp = array.slice(0, index)
    while(i < array.length) {
        array[i-index] = array[i]
        i++
    }
    let x = 0
    for(let i = (array.length - index); i < array.length; i++) {
        array[i] = temp[x]
        x++
    }
    return array
}

console.log(rotateMethodTwo([1,2,3,4,5,6,7,8,9,10], 7))
