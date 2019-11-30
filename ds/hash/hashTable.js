/*
 * Hashing is a common technique used for storing data in such a way that -
 * the data can be inserted and retrieved very quickly...
 * insertion -> O(1)
 * deletion -> O(1)
 * deletion -> O(1)
 * searching -> O(n) -> finding the min and max values in the a data set...where BST is more prefered.
 * A hash stores a key in it is own array element.
 * COLLISION -> possibility of for two keys with the same value to co-exist in a hash...
 * One constraint -> the array size should be a prime number. simplest hash fn is to return key modulo the size of the array.
 * Example of hash keys -> sum of ASCII keys
 * Techniques to determine the array size is based on collisions.
 * The simpleHash() function computes a hash value by summing the ASCII value of each name using the JavaScript function charCodeAt() to return a character’s ASCII value.
 *  Terms to research on:
 *    - de-deplucation
 *  - Use chaining with linked lists to resolve collisions
 */

function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
  this.get = get;
  this.buildChains = buildChains;
  this.betterHash = betterHash;
  this.getStuData = getStuData;
}

function simpleHash(data) {
  let total = 0;
  for (let i = 0; i < data.length; ++i) {
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}

function betterHash(string) {
  const H = 37; // prime number -> 37 doesn't seem to work for me...
  let total = 0;
  for (let i = 0; i < string.length; ++i) {
    total += H * total + string.charCodeAt(i);
  }
  total %= this.table.length;
  if (total < 0) {
    total += this.table.length - 1;
  }
  return parseInt(total);
}

function put(key, data) {
  // put function hashes the key and then uses that
  // information to store the data in the table
  const pos = this.betterHash(key);
  let index = 0;
  if (this.table[pos][index] === undefined) {
    this.table[pos][index + 1] = data;
    ++index;
  } else {
    while (this.table[pos][index] !== undefined) {
      ++index;
    }
    this.table[pos][index] = data;
  }
  this.table[pos] = data;
}

/*
 * Separate chaining
 * Improve this soln with linked list
 */
function buildChains() {
  for (let i = 0; i < this.table.length; ++i) {
    this.table[i] = new Array();
  }
}


function get(key) {
  return this.table[this.betterHash(key)];
}

function showDistro() {
  for (let i = 0; i < this.table.length; ++i) {
    if (this.table[i][0] !== undefined) {
      // console.log(this.table);
      console.log(`${i} ${this.table[i]}`);
    }
  }
}

const someNames = ['David', 'Jenniffer', 'Donnie', 'Raymond',
  'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'];

const hTable = new HashTable();
hTable.buildChains();
for (let i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}

hTable.showDistro();
/*
 * If you pay attention closely, you will notice that Raymond is not displa
 * in the output because of the collision of hash values with Clayton
 *
 * To avoid collisions, you first need to make sure the array you are using -
 * for the hash table is sized to a prime number - this is neccesary due to the use of
 * modular arithmetic in computing the key...
 * The size of array needs to be greater than 100 in order to more evenly -
 * disperse the keys in the table.
 * The first Prime number greater than 100 is 137, when prime number close to 100 -
 * are used, we get collisions in the dataset.
 * Now, to generate better hash values, we have to use a better algorithm, Horner's method. Which -
 * add a new step of by multiplying the resulting total by a prime constant. This method can work -
 * with numbers as low as 37 or 31.
 *
 * // HASHING INTEGER KEYS
 *
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getStuData(arr) {
  for (let i = 0; i < arr.length; ++i) {
    let num = '';
    for (let j = 1; j <= 9; ++j) {
      num += Math.floor(Math.random() * 10);
    }
    num += getRandomInt(50, 100);
    arr[i] = num;
  }
}
