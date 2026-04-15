class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        piles = piles.sort((a,b)=>a-b);
        let l = 1;
        let r = piles[piles.length-1];
        let k = 0
        while(l<=r){
            let mid = Math.floor((l+r)/2);
            let hours = 0
            for(let pile of piles){
                hours += Math.ceil(pile/mid)
            }

            if(hours<=h){
                k = mid;
                r  = mid-1;
            }else{
                l = mid+1;
            }
        }
        return k;
    }
}
