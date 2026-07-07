class Solution {
    public int scoreOfString(String s) {
        return calc(s,0);
    }
    private int calc(String s, int index){
        if(index == s.length()-1){
            return 0;
        }
        int calcDiff = Math.abs(s.charAt(index)-s.charAt(index+1));
        return calcDiff + calc(s,index + 1);
    }
}