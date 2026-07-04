class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const n = nums.length;
        const arr = [];
        for(let e of nums){
            arr.push(e);
        }
        for(let e of nums){
            arr.push(e);
        }
        return arr;
    }
}
