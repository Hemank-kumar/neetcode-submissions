class Solution {
    public int missingNumber(int[] nums) {
        int n = nums.length;
        int exp = n*(n+1)/2;
        int actSum = 0;
        for(int num:nums){
            actSum+=num;
        }
        return exp-actSum;
    }
}
