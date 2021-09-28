/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let length = nums.length;
    for(let i=0, index = 0; i<length; i++, index++){
        if(nums[index] === 0){
            nums.splice(length, 0, 0);
            nums.splice(index, 1);
            index--;
        }
    }
};