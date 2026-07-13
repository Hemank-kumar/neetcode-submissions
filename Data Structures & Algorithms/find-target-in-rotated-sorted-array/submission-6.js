class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let len = nums.length;
        for(let i = 0;i<len;i++){
            if(nums[i] == target){
                return i;
            }
        }
        return -1;
    }
}
