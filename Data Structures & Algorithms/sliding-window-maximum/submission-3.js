class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let n = nums.length;
        let res = new Array(n-k+1);
        let l =0;
        let r = 0;
        let q = new Deque();
        
        while(r<n){
            while(q.size() && nums[q.back()] < nums[r]){
                q.popBack();
            }
            q.pushBack(r)

            if(l>q.front()){
                q.popFront();
            }

            if(r+1>=k){
                res[l] = nums[q.front()];
                l++;
            }
            r++;
        }
        return res;
    }
}
