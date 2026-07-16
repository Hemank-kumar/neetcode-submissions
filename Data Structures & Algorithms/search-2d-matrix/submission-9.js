class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let len = matrix.length;
        for(let i = 0;i<len;i++){
            let left = 0;
            let right = matrix[i].length - 1;
            if(matrix[i][left] > target || matrix[i][right] < target){
                continue;
            }
            while(left <= right){
                let mid = Math.floor(left + (right - left) / 2);
                let midVal = matrix[i][mid];
                if(midVal == target){
                    return true;
                }
                if(midVal < target){
                    left = mid + 1;
                }else{
                    right = mid - 1;
                }
            }
        }
        return false;
    }
}
