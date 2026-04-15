class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let countS = {}
        let res = 0
        let l = 0
        let maxf = 0
        for(let r = 0; r<s.length; r++){
            countS[s[r]] = (countS[s[r]] || 0) +1
            maxf = Math.max(maxf, ...Object.values(countS))
            
            while(r-l+1-maxf>k){
                countS[s[l]] = (countS[s[l]] -1)
                l++
            }
            res = Math.max(res, r-l+1)
        }
        return res;
    }
}
