/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length-1, m;

    while(l <= r){
        m = Math.floor((l + r)/2);
        if(nums[m] == target) return m;
        else if(nums[m] > target) r = m-1;
        else l = m+1;
    }
    return -1;
};
