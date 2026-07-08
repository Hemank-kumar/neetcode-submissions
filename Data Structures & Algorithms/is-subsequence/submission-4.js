class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence = function(s, t) {
        return this.seq(s,t,0,0);
};
    seq(s,t,i,j){
        if(i == s.length) return true;
        else if(j == t.length) return false;
        if(s.charAt(i) == t.charAt(j)){
            return this.seq(s,t,i+1,j+1);
        }
        return this.seq(s,t,i,j+1);
}
}
