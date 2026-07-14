class Solution {
    public boolean search(int[] nums, int target) {
        for(int ele : nums){
            if(ele == target){
                return true;
            }
        }
        return false;
    }
}