class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = position.map((p,i) =>[p, speed[i]])
        pairs.sort((a,b) => (b[0] -a[0]))
        let fleet = 0;
        let prevtime = 0;
        for(let [pos, speed] of pairs){
            let time = (target-pos)/speed
            if(time>prevtime){
                fleet++;
                prevtime = time;
            }
        }
        return fleet;
    }
}
