class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums: number[], target: number): number[] {
        if(nums == null || nums.length == 0){
            return [-1,-1];
        }
        let first = this.lowerBound(nums,target);

        if(first == nums.length || nums[first] != target){
            return [-1,-1];
        }

        let last = this.lowerBound(nums,target + 1) - 1;

        return [first,last];
    }

    lowerBound(nums: number[], target:number){
         let left = 0;
         let right = nums.length ;
         let mid;
         while(left < right){
            mid = Math.floor(left + (right - left)/2);
            if(nums[mid] >= target){
                right = mid ;
            }else{
                left = mid + 1;
            }
         }
         return left;
    }
}
