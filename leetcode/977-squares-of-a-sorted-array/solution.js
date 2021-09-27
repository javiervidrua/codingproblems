/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var squared = [];

    for(let i=0; i<nums.length; i++){
        squared.push(nums[i]**2);
    }

    return squared.sort((a,b)=>{
        if(a>b)
            return 1;
        else if(a<b)
            return -1;
        else
            return 0;
    });
};
