class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;
        let i = 0
        let charSet = new Set()

        for(let j = 0; j<s.length; j++){
            while(charSet.has(s[j])){
                charSet.delete(s[i])
                i++
            }
            charSet.add(s[j])
            res = Math.max(res, j-i+1);
        }
        return res;
    }
}
