class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let rows = matrix.length;
        let cols = matrix[0].length;

        let top = 0;
        let bot = rows - 1;

        while(top <= bot){
            let midRow = Math.floor(top + (bot - top)/2);
            if(target > matrix[midRow][cols-1]){
                top = midRow+1;
            } else if(target < matrix[midRow][0]){
                bot = midRow - 1;
            }else{
                break;
            }
        }
        if(top > bot){
            return false;
        }
        let row = Math.floor(top + (bot - top)/2);
        let left = 0;
        let right = matrix[row].length-1;
        while(left <= right){
            let mid = Math.floor(left + (right - left) / 2);
            if(matrix[row][mid] == target){
                return true;
            }
            if(matrix[row][mid] > target) {
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
        return false;
    }
}
