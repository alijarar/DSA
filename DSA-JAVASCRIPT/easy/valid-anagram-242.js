/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // solution 1
  // let hash={}
  // let arrayone=s.split('').sort().join('')
  // let arraytwo=t.split('').sort().join('')
  // if(arraytwo.length<arrayone.length){
  //     return false
  // }
  // if(arrayone==arraytwo){
  //     return true
  // }
  // return false

  // solution 2
  let hashTable = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (hashTable[s[i]] === undefined) {
      hashTable[s[i]] = 1;
    } else {
      hashTable[s[i]] = hashTable[s[i]] + 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (hashTable[t[i]] === undefined) {
      return false;
    }
    if (hashTable[t[i]] < 1) {
      return false;
    }

    hashTable[t[i]]--;
  }

  // s = "rat"
  // t = "aar"
  return true;
};

// let consoleResult = isAnagram("anagram", "nagaram"); //true
let consoleResult = isAnagram("rat", "car"); //false
console.log(consoleResult);
