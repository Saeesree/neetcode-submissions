class Solution{
    hasDuplicate(nums){
        const mySet = new Set();
        for(const num of nums){
            if(mySet.has(num)){
                return true;
            }
            mySet.add(num);
        }
        return false
    }
}