/*
Top K Frequent Elements
Solved 
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
Example 2:

Input: nums = [7,7], k = 1

Output: [7]
Constraints:

1 <= nums.length <= 10^4.
-1000 <= nums[i] <= 1000
1 <= k <= number of distinct elements in nums.

*/

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {}; // frequency map: number -> how manu times it appears
        let bucket = []; //bucket array where index = fequency.
        let result = []; // final top k frequent elements

        // count frequency of each number
        for (let i = 0; i < nums.length; i++){
            if (!map[nums[i]]){
                map[nums[i]] = 1; // first time seeing this number
            }
            else {
                map[nums[i]]++; // increment frequency
            }
        }

        // place numbers into buckets based on frequency
        for (let [num, freq] of Object.entries(map)){
            if (!bucket[freq]){
                bucket[freq] = new Set().add(nums); // Create a new bucket with this number
            }
            else {
                bucket[freq].add(num); // add to existing bucket
            }
        }

        // collect top k frequent numbers
        for (let i = bucket.length - 1; i >= 0; i--){
            if (bucket[i]){
                // spread the set into result (extract all numbers)
                result.push(...bucket[i]);
            }
            // once we have k elements, we stop
            if (result.length === k) break;
        }
        return result;
    }};