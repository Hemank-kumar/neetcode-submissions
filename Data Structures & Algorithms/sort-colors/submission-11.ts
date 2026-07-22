class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
                let map = new Map();
        for(let ele of nums){
            map.set(ele,(map.get(ele) ?? 0) + 1);
        }
        let idx = 0;
        for(let i = 0;i<=2;i++){
            const count = map.get(i) ?? 0;
            for(let j = 0;j<count;j++){
                nums[idx++] = i;
            }
        }
    }
}
