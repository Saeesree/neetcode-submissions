class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        let res = new Array(n).fill(0);
        let stack = [];
        

        for(let i=0; i<n; i++){
            const t = temperatures[i]
            while(stack.length>0 && t > stack[stack.length-1][0]){
                const [stackT, stackI] = stack.pop();
                res[stackI] = i - stackI
            }
            stack.push([t, i]);
        }
        return res;
    }
}
