class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const map = new Map([
            [')', '('],
            ['}', '{'],
            [']', '[']
        ])
            
        for(let c of s){
            if(map.has(c)){
                if(stack.length>0 && stack[stack.length-1] === map.get(c)){
                    stack.pop();
                }else{
                    return false;
                }
            }else{
                stack.push(c)
            }
        }
        return stack.length === 0;
       
    }
}
