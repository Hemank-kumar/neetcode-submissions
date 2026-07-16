class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int len = matrix.length;
        for(int i = 0;i<len;i++){
            int left = 0;
            int right = matrix[i].length - 1;
            if(matrix[i][left] > target || matrix[i][right] < target){
                continue;
            }
            while(left <= right){
                int mid = left + (right - left) / 2;
                int midVal = matrix[i][mid];
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
