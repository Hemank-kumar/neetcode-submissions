class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const n =  nums.length;
        const arr : number[] = [];
        for(let num of nums){
            arr.push(num);
        }
        let i :number= n;
        for(let num of nums){
            arr[i++] = num 
        }
        return arr;
    }
}
