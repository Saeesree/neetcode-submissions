class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0);
        let stack = [] //pair [value, index]

        for(let i = 0; i<temperatures.length; i++){
            const t = temperatures[i];
            while(stack.length>0 && temperatures[i] > stack[stack.length-1][0]){
                const[stackT, stackI] = stack.pop();
                res[stackI] = i-stackI
            }
            stack.push([t, i]);
        }
        return res;
    }
}
