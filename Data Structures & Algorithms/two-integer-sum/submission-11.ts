class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        //const map = {}
        const map : Record<number,number> = {};
        //const map : {[key:number] : number} = {};
        for(let i = 0;i<nums.length;i++){
            let diff = target - nums[i];
            if(map[diff] != undefined){
                return [map[diff],i];
            }
            map[nums[i]] = i
        }
     
    }
}
