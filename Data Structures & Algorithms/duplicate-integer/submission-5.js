class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();
        for(let e of nums){
            if(set.has(e)){
                return true;
            }
            set.add(e);
        }
        return false;
    }
}
