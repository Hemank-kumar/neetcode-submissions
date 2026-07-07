class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s: string): number {
        const len = s.length;
        let sum = 0;
        for(let i = 0;i<len-1;i++){
            //sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1));
            sum += Math.abs(s.codePointAt(i) - s.codePointAt(i+1));
        }
        return sum;
    }
}
