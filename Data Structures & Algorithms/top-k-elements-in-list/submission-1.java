
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        // 1. Sort the array so identical numbers are next to each other
        Arrays.sort(nums);
        
        // 2. We need a list to store pairs of [number, frequency]
        List<int[]> frequencies = new ArrayList<>();
        
        int currentNum = nums[0];
        int currentCount = 1;
        
        // 3. Count consecutive identical numbers
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == currentNum) {
                currentCount++;
            } else {
                frequencies.add(new int[]{currentNum, currentCount});
                currentNum = nums[i];
                currentCount = 1;
            }
        }
        frequencies.add(new int[]{currentNum, currentCount}); // Add the last group
        
        // 4. Sort our new list based on the frequencies (descending order)
        frequencies.sort((a, b) -> Integer.compare(b[1], a[1]));
        
        // 5. Grab the top k elements
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = frequencies.get(i)[0];
        }
        
        return result;
    }
}