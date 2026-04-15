class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t === '') return '';

        let countT = {};
        let windowCount = {};
        for(let c of t){
            countT[c] = (countT[c]||0)+1;
        }

        let l = 0;
        let res = [-1, -1];
        let resLen = Infinity;
        let have  = 0;
        let need = Object.keys(countT).length
        for(let r = 0; r<s.length; r++){
            let c = s[r];

            windowCount[c] = (windowCount[c]||0)+1;

            if(countT[c] && windowCount[c] === countT[c]){
                have++;
            }

            while(have === need){
                if(r-l+1<resLen){
                    resLen = r-l+1;
                    res = [l, r];
                }

                windowCount[s[l]]--
                if(countT[s[l]] && windowCount[s[l]] < countT[s[l]]){
                    have--;
                }
                l++;
            }
        }
        return resLen === Infinity?"": s.slice(res[0], res[1]+1);
    }
}
