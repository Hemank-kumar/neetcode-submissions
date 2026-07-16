class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int rows = matrix.length;
        int cols = matrix[0].length;

        int top = 0;
        int bot = rows - 1;

        while(top <= bot){
            int midRow = top + (bot - top)/2;
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
        int row = top + (bot - top)/2;
        int left = 0;
        int right = matrix[row].length-1;
        while(left <= right){
            int mid = left + (right - left) / 2;
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
