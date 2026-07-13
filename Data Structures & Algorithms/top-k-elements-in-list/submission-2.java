class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer,Integer> map = new HashMap<>();
        int len = nums.length;
        for(int i = 0;i<len;i++){
            int key = nums[i];
            if(map.containsKey(nums[i])){
                map.put(key,map.get(key) + 1);
            }
            else{
                map.put(key, 1);
            }
        }
        int[] maxArr = new int[k];
        for(int i = 0;i<k;i++){
             int maxVal = -1;
        int maxKey = -1;
        for(Map.Entry<Integer,Integer> entry : map.entrySet()){
            if(entry.getValue() > maxVal){
                maxVal = entry.getValue();
                maxKey = entry.getKey();
            }
        }
        maxArr[i] = maxKey;
        map.put(maxKey,0);
        }
        return maxArr;
    }
}
