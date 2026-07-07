class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s: string): number {
        return this.calc(s,0);
    }
    calc(s,i){
        if(i === s.length-1){
            return 0;
        }
        let diff = Math.abs(s.codePointAt(i) - s.codePointAt(i+1));
        return diff + this.calc(s,i+1);
    }
}
