class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let i = 0;
        let j= 0;
        while(i < s.length && t.length){
            if(s.charAt(i) == t.charAt(j)){
                i++;
                j++;
            }else{
                i++;
            }
        }
        return t.length - j;
    }
}
