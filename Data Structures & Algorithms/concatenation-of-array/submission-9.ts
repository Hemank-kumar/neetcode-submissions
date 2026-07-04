class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const n =  nums.length;
        const arr : number[] = new Array(2*n);
        for(let i=0;i<n;i++){
            arr[i] = nums[i];
            arr[i+n] = nums[i];
        }
        return arr;
        
    }
}
