class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const len = s.length;
        if (len != t.length) {
            return false;
        }
        let sArr  = s.split('').sort().join();
        let tArr  = t.split('').sort().join();
        return sArr== tArr;
    }
}
