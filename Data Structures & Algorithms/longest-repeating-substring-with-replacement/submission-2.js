class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0

        for(let i=0; i<s.length; i++){
            let countS = {};
            let maxf = 0
            for(let j = i; j<s.length; j++){
                countS[s[j]] = (countS[s[j]] || 0) +1
                maxf = Math.max(maxf, ...Object.values(countS))
                if(j-i+1-maxf <=k){
                    res = Math.max(res, j-i+1);
                }
            }
        }
        return res;
    }
}
