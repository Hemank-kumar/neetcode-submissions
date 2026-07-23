class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        if(nums == null || nums.length == 0)return [-1,-1];
        let first = this.firstIndex(nums,target);
        let last = this.lastIndex(nums,target);
        return [first,last];
    }
    firstIndex(nums,target){
        let left = 0;
        let right = nums.length - 1;
        let ans = -1;
        while(left <= right){
            let mid = left + Math.floor((right - left)/2);
            if(nums[mid] == target){
                ans = mid;
                right = mid - 1;
            }else if(nums[mid] < target){
                left = mid + 1;
            }else{
                right = mid -1;
            }
        }
        return ans;
    }
    lastIndex(nums,target){
        let left = 0;
        let right = nums.length - 1;
        let ans = -1;
        while(left <= right){
            let mid = left + Math.floor((right - left)/2);
            if(nums[mid] == target){
                ans = mid;
                left = mid + 1;
            }else if(nums[mid] < target){
                left = mid + 1;
            }else{
                right = mid -1;
            }
        }
        return ans;
    }
}
