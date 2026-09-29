class Solution {
    public int majorityElement(int[] nums) {
        HashMap<Integer,Integer> map = new HashMap<>();
        int maj = nums.length/2;
        for(int ele : nums){
            map.put(ele,map.getOrDefault(ele,0)+1);
            if(map.get(ele) > maj){
                return ele;
            }
        }
        return -1;
    }
}