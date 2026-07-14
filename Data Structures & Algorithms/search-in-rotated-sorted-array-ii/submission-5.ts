class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums: number[], target: number): boolean {
        for(let ele of nums){
            if(ele == target){
                return true;
            }
        }
        return false;
    }
}
