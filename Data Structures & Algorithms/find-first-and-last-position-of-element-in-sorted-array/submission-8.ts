class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums: number[], target: number): number[] {
        let start = 0, end = nums.length - 1, idx = -1;

        while(start <= end){
            let mid = start + Math.floor((end - start)/2);
            if(nums[mid] == target){
                idx = mid;
                break;
            }else if(nums[mid] > target){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }
        
        if(idx == -1) return [-1,-1];

        let left = idx,right = idx;
        while(left > 0 && nums[left - 1] == target) left--;
        while(right < nums.length - 1 && nums[right + 1] == target) right++;
        return [left,right];
    }
}
