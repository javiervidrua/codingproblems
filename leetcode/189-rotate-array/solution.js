// THIS ONE WORKS EVERYTIME BUT IT'S SLOW AF
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    for(let i=0; i<k; i++){
        nums.splice(0, 0, nums.pop());
    }
    return nums;
};

// THIS ONE ONLY WORKS WHEN k<nums.length
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    nums.splice(0, 0, ...nums.slice(nums.length-k));
    nums.splice(nums.length-k);
   
    return nums;
};

// SOLUTION: COMBINE THE TWO:
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    if(k<nums.length){
        nums.splice(0, 0, ...nums.slice(nums.length-k));
        nums.splice(nums.length-k);

        return nums;
    }
    else{
        for(let i=0; i<k; i++){
            nums.splice(0, 0, nums.pop());
        }
        return nums;
    }
};

//BETTER SOLUTION AFTER THINKING ABOUT THE PROBLEM AND THE FIRST SOLUTION
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    while(k>nums.length){
        k = k-nums.length;
    }
    
    nums.splice(0, 0, ...nums.slice(nums.length-k));
    nums.splice(nums.length-k);

    return nums;
};