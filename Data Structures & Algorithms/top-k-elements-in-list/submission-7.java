class Solution {
    public int[] topKFrequent(int[] nums, int k) {
       Map<Integer,Integer> map = new HashMap<>();
       for(int ele : nums){
        map.put(ele,map.getOrDefault(ele,0)+1);
       } 
       return map.entrySet().stream().sorted((a,b) -> b.getValue() - a.getValue()).limit(k).mapToInt(Map.Entry::getKey).toArray();
    }
}
