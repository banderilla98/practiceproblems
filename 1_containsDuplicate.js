class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const revisarDuplicado = new Set();

        for(let i = 0; i < nums.length; i++)
        {
            if (revisarDuplicado.has(nums[i]))
            {
                return true;
            }
            revisarDuplicado.add(nums[i])
        }
        return false;
    }
}
