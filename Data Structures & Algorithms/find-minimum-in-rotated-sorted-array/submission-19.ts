class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        return this.search(nums,0,nums.length-1);
    }
    search(nums: number[], left: number,right: number){
        if(left == right){
            return nums[left];
        }
        let mid = left + Math.floor((right - left) / 2);
        if(nums[mid] < nums[right]){
            return this.search(nums,left,mid);
        }else if(nums[mid] > nums[right]){
            return this.search(nums,mid + 1,right);
        }else{
            return this.search(nums,mid + 1,--right);
        }
    }
}
