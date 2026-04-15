class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for(let c of s){

            if(c === '('|| c === '{' || c === '['){
                stack.push(c)
            }else{
                if(stack.length === 0) return false

                const top = stack[stack.length-1];

                if((c === '}' && top === '{') ||
                    (c === ']' && top === '[') ||
                    (c === ')' && top === '(')){
                        stack.pop();
                    }else{
                        return false
                    }
            }
        }
        return stack.length === 0;
    }
}
