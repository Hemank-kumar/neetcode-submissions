class Solution {
    public int[] searchRange(int[] nums, int target) {
        if(nums == null || nums.length == 0)return new int[]{-1,-1};
        int first = firstIndex(nums,target);
        int last = lastIndex(nums,target);
        return new int[]{first,last};
    }
    private int firstIndex(int[] nums, int target){
        int left = 0;
        int right = nums.length - 1;
        int ans = -1;
        while(left <= right){
            int mid = left + (right - left)/2;
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
    private int lastIndex(int[] nums, int target){
        int left = 0;
        int right = nums.length - 1;
        int ans = -1;
        while(left <= right){
            int mid = left + (right - left)/2;
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