class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        nums.sort((a,b) => a-b);
        return nums[0];
    }
}
