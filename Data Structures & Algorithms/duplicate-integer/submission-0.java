// By using Hashing

class Solution {
    public boolean hasDuplicate(int[] nums) {
       HashSet<Integer> map = new HashSet<>();
        for(int e : nums){
            if(map.contains(e)){
                return true;
            }
            map.add(e);
        }
        return false;
    }
}