class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);
        int len = nums.length;
        // int sum = Integer.MIN_VALUE;
        List<List<Integer>> ls = new ArrayList<>();
        for(int i = 0;i<len;i++){
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            for(int j = i+1;j<len;j++){
                if (j > i+1 && nums[j] == nums[j - 1]) continue;
                int left = j+1,right = nums.length-1;
                while(left < right){
                    long tempSum = (long) nums[i] + nums[j] + nums[left] + nums[right];
                    if(tempSum == target){
                        ls.add(Arrays.asList(nums[i],nums[j],nums[left],nums[right]));
                        left++;
                        right--;
                        while(left < right && nums[left] ==nums[left - 1])left++; 
                        while(left < right && nums[right] == nums[right + 1])right--; 
                        
                    }
                    else if(tempSum < target){
                        left++;
                    }else{
                        right--;
                    }
                }
            }
        }
        return ls;
    }
}