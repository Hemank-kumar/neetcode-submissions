class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let len : number = nums.length;
        for(let i = 0;i<len;i++){
            if(nums[i] == target){
                return i;
            }
        }
        return -1;
    }
}
