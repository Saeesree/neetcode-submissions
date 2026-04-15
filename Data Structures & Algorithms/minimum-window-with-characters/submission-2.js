class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t === '' ||t.length>s.length) return '';

        let countT = {};
        let windowCount = {};

        for(let c of t){
            countT[c] = (countT[c]||0)+1;
        }

        let need = Object.keys(countT).length;
        let have = 0;
        let res = [-1, -1];
        let resLen = Infinity;
        let l = 0;
        for(let r=0; r<s.length; r++){
            let c = s[r];

            windowCount[c] = (windowCount[c]||0)+1;

            if(countT[c] && windowCount[c] === countT[c]){
                have++;
            }

            while(have===need){

                if(r-l+1<resLen){
                    resLen = r-l+1;
                    res = [l,r]
                }

                let c = s[l];

                windowCount[c]--
                if(countT[c]&&windowCount[c]<countT[c]){
                    have--
                }
                l++;
            }
        }
        return resLen === Infinity?"": s.slice(res[0], res[1]+1);
    }
}
