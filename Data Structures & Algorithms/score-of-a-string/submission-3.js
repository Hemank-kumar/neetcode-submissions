class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        return this.calc(s,0);
    }
    calc(s,i){
        if(i === s.length-1){
            return 0;
        }
        let diff = Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1));
        return diff + this.calc(s,i+1);
    }
}
