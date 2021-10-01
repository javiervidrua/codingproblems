/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    var remove = function(arr, char){
        for(let i=0; i<arr.length; i++){
            if(arr[i] === char){
                arr.splice(i,1); // Remove char
                return true;
            }
        }
        return false;
    }

    if(s1.length > s2.length)
        return false;

    let arr = s1.split(""), count=0;

    for(let i=0; i<s2.length; i++){
        if(!remove(arr, s2[i])){
            // Start to count from one position more to the left this time
            i = i-count;

            count = 0;
            arr = s1.split("");
        }
        else{
            if(++count === s1.length)
                return true;
        }
    }

    return false;
};
