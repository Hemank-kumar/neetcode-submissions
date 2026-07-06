class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const len = s.length;
        if (len != t.length) {
            return false;
        }

        let arr = new Array(26).fill(0);
        for(let i = 0;i<len;i++){
            arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            arr[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }

        for(let ele of arr){
            if(ele != 0){
                return false;
            }
        }
        return true;
    }
}
