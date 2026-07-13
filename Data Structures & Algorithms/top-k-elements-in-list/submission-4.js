class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

    // Count frequency
    for (const key of nums) {
        map.set(key, (map.get(key) || 0) + 1);
    }

    const maxArr = [];

    for (let i = 0; i < k; i++) {
        let maxVal = -1;
        let maxKey = -1;

        for (const [key, value] of map) {
            if (value > maxVal) {
                maxVal = value;
                maxKey = key;
            }
        }

        maxArr.push(maxKey);
        map.set(maxKey, 0);
    }

    return maxArr;
    }
}
