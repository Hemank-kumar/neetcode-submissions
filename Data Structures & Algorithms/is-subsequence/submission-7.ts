class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        return this.rec(s,t,0,0);
    }
    rec(s:string , t:string, i:number, j:number): boolean {
        if(i == s.length) return true;
        if(j == t.length) return false;
        if(s.charAt(i) == t.charAt(j)){
            return this.rec(s,t,i+1,j+1);
        }
        return this.rec(s,t,i,j+1);
    }
}
