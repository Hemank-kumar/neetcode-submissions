class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int t = 0;
        int temp = 0;
        for(int ele : nums){
            
            if(ele == 0){
                temp = 0;
            }else{
                temp++;
            }
            if(temp > t){
                t = temp;
            }
        }
        return t;
    }
}