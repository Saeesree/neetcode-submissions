class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map();
        let l = 0, res = 0;

        for(let r=0; r<s.length; r++){
            let char = s[r];
            while(map.has(char) && map.get(char)>=l){
                l = map.get(char)+1;
            }
            map.set(char, r);
            res = Math.max(res, r-l+1);
        }
        return res;
    }
}
