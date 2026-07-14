class Solution {
    public int findMin(int[] nums) {
        int min = Integer.MAX_VALUE;
        for(int ele : nums){
            if(ele < min){
                min = ele;
            }
        }
        return min;
    }
}
