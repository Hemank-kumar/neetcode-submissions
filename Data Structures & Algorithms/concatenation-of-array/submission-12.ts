class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let arr : Array<number> = nums.concat(nums);
        return arr;
    }
}
