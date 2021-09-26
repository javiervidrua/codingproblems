/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0, r = nums.length-1, m;

    // binary search
    while(l <= r){
        m = Math.floor((l + r)/2);
        if(nums[m] == target) return m;
        else if(nums[m] > target) r = m-1;
        else l = m+1;
    }

    // // check if above or below
    if(target > nums[m]) m = m+1;

    return m;
};
