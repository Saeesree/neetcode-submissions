class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let n = nums.length
        let l = 0;
        let res = new Array(n-k+1);
        let q = new Deque();
        for(let r = 0; r<n; r++){
            while(q.size()&& nums[q.back()]<nums[r]){
                q.popBack();
            }
            q.pushBack(r);

            if(l>q.front()){
                q.popFront()
            }

            if(r+1>=k){
                res[l] = nums[q.front()];
                l++;
            }
        }
        return res
    }
}
