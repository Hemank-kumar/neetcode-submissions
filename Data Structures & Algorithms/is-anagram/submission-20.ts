class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const len:number = s.length;
        if (len != t.length) {
            return false;
        }
        let map = new Map<string,number>();
        for (let i = 0; i < len; i++) {
            var ch:string = s.charAt(i);
            if (map.has(ch)) {
                map.set(ch,map.get(ch) + 1);
            }else{
                map.set(ch,1);
            }
        }
         for (let i = 0; i < len; i++) {
            var ch = t.charAt(i);
            if (!map.has(ch) || map.get(ch) <= 0) {
                return false;
            }else if (map.has(ch)) {
                map.set(ch,map.get(ch) - 1);
            }
        }
        return true;
    }
}
