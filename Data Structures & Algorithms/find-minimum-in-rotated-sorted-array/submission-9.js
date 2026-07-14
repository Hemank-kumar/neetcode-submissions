class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = Infinity;
        for(let ele of nums){
            if(ele < min){
                min = ele;
            }
        }
        return min;
    }
}
