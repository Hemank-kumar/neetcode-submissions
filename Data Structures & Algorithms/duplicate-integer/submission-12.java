class Solution {
    public boolean hasDuplicate(int[] nums) {
        HashMap<Integer,Integer> map = new HashMap<>();
        for(int e : nums){
            if(map.containsKey(e)){
                return true;
            }
            map.put(e,1);
        }
        return false;
    }
}