class Solution {
    public int maxArea(int[] heights) {


        int left = 0,right =heights.length-1;
        int maxArea = 0;
        while(left < right){
            int cbreadth = right - left;
            int clength = Math.min(heights[left], heights[right]);
            int area = clength * cbreadth;
            maxArea = Math.max(maxArea, area);
            if(heights[left] < heights[right]) left++;
            else right--;
        }
        return maxArea;
    }
}
