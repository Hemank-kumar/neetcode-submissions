class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const len = nums.length;
        const arr = new Array(len);
        for(let i = 0;i<len;i++){
            arr[i] = nums[i];
            arr[i+len] = nums[i];
        }
        return arr;

    }
}
