class Solution {
    public int singleNumber(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for(int ele: nums){
            if(set.contains(ele)){
                set.remove(ele);
            }else{
                set.add(ele);
            }
        }
        return set.iterator().next();
    }
}
