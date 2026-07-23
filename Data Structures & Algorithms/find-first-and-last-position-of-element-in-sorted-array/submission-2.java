class Solution {
    public int[] searchRange(int[] nums, int target) {
        if(nums == null || nums.length == 0){
            return new int[]{-1,-1};
        }
        int first = lowerBound(nums,target);

        if(first == nums.length || nums[first] != target){
            return new int[]{-1,-1};
        }

        int last = lowerBound(nums,target + 1) - 1;

        return new int[]{first,last};
    }

    private int lowerBound(int[] nums, int target){
         int left = 0;
         int right = nums.length ;
         int mid;
         while(left < right){
            mid = left + (right - left)/2;
            if(nums[mid] >= target){
                right = mid ;
            }else{
                left = mid + 1;
            }
         }
         return left;
    }
}