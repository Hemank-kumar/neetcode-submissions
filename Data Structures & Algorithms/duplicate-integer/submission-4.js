class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        for(let e of nums){
            if(map.has(e)){
                return true;
            }
            map.set(e,1);
        }
        return false;
    }
}
