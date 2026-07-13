class Solution {
    public int search(int[] nums, int target) {
        List<Integer> ls = new ArrayList<>();
        for(int ele : nums){
            ls.add(ele);
        }
        return ls.indexOf(target);
    }
}
