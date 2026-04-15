class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let alphaS = s.replace(/[^0-9A-Za-z]/g, '').toLowerCase()
        let i = 0
        let j = alphaS.length-1;
        while(i<j){
            if(alphaS[i] !== alphaS[j]) return false;
            j--;
            i++;
        }
        return true;
    }
}
