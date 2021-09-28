/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let l = numbers.length, dict = {}, i, j;

    for(i = 0; i<l; i++){
        // Search in the dictionary if there's a key with a value === the difference between our value and the target
        for(j = 0; j<l; j++){
            if(dict.hasOwnProperty(j)){
                if(dict[j] == numbers[i])
                    return [j+1, i+1];
            }
            else
                break;
        }

        // Store the index with value === difference between value and target
        dict[i] = target - numbers[i];
    }
};