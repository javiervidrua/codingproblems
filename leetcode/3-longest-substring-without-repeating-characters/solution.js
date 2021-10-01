/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    // Search for a char in a array (or string) from start to end
    var search = function(arr, char, start, end){
        for(let i = start; i<=end; i++){
            if(arr[i] === char)
                return i;
        }
        return -1;
    }

    let maxLength=0, maxLengthStart=0, maxLengthEnd=0;
    let currentLength=1, currentLengthStart=0, currentLengthEnd=0;
    let found;

    // Safety checks
    if(s.length == 0)
        return 0;
    else if(s.length == 1)
        return 1;
    // Real algorithm
    else if(s.length > 1){
        for(let i=0; i<s.length; i++){
            // Search for the char
            found = search(s, s[i], currentLengthStart, currentLengthEnd);

            // Char was not found
            if(found == -1){
                currentLength ++;
                currentLengthEnd = i;
            }
            // Char was found
            else{
                // If this is the first char of the string
                if(i == 0){
                    currentLength = 1;
                    currentLengthStart = found;
                }
                // If it's not
                else{
                    currentLength = i-found;
                    currentLengthStart = found+1;
                }
                currentLengthEnd = i;
            }

            // Check if we got a new max
            if(currentLength > maxLength){
                maxLength = currentLength;
                maxLengthStart = currentLengthStart;
                maxLengthEnd = currentLengthEnd;
            }
        }
    }

    return maxLength;
};

// OPTIMIZED
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var search = function(arr, char, start, end){
        for(let i = start; i<=end; i++){
            if(arr[i] === char)
                return i;
        }
        return -1;
    }

    let maxLength=0;
    let currentLength=1, currentLengthStart=0, currentLengthEnd=0;
    let found;

    if(s.length == 0)
        return 0;
    else if(s.length == 1)
        return 1;
    else if(s.length > 1){
        for(let i=0; i<s.length; i++){
            found = search(s, s[i], currentLengthStart, currentLengthEnd);

            if(found == -1){
                currentLength ++;
                currentLengthEnd = i;
            }
            else{
                if(i == 0){
                    currentLength = 1;
                    currentLengthStart = found;
                }
                else{
                    currentLength = i-found;
                    currentLengthStart = found+1;
                }
                currentLengthEnd = i;
            }

            if(currentLength > maxLength){
                maxLength = currentLength;
            }
        }
    }

    return maxLength;
};
