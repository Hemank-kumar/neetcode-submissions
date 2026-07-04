class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let set = new Set<number>();
        for(let e of nums){
            if(set.has(e)){
                return true;
            }
            set.add(e);
        }
        return false;
    }
}
