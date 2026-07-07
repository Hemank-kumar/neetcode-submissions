class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        const arr : String[] = s.trim().split(' ');
        return arr[arr.length-1].length;
    }
}
