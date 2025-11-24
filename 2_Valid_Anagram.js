/*
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false
Constraints:

s and t consist of lowercase English letters.

*/ 

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        // Create an array of 26 zeros
        const counts = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            counts[s.charCodeAt(i) - 97]++; // 97 = 'a'
            counts[t.charCodeAt(i) - 97]--;
        }

        // Check if all counts are zero
        for (const count of counts) {
            if (count !== 0) return false;
        }

        return true;
    }
}
