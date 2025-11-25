/*
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
Example 2:

Input: strs = ["x"]

Output: [["x"]]
Example 3:

Input: strs = [""]

Output: [[""]]
Constraints:

1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.
*/

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Create a hash map to store all grouped anagrams
        const anagramsMap = new Map();

        // Iterate through each string in the input array
        for(let str of strs) {
            // Sort the string to create a key for the anagram gruouping
            const sortedStr = str.split('').sort().join('');
            // If the sorted string key is not in the map, add it with and empty array
            if (!anagramsMap.has(sortedStr)){
                anagramsMap.set(sortedStr, []);
            }
            // Push the original string into the corresponding anagram group
            anagramsMap.get(sortedStr).push(str);
        }
        // Return all grouped anagrams as an array of arrays
        return Array.from(anagramsMap.values());
    }
}

// another way to solve it:

// class Solution {
//     /**
//      * @param {string[]} strs
//      * @return {string[][]}
//      */
//     groupAnagrams(strs) {
//         //vamos a tener un mapa para todos los grupos
//         const map = {};

//         for(let word of strs)
//         {
//             const sorteado = word.split('').sort().join('');

//             if(map[sorteado]){
//                 map[sorteado].push(word)
//             }
//             else {
//                 map[sorteado] = [word]
//             }
//             //metodo ternarious algo asi
//             // map[sorteado] ? map[sorteado].push(word): map[sorteado] = word
//         }

//         return Object.values(map);

//     }
// }
