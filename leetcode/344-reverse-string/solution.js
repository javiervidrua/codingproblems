/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let copy = s.slice();

    for(let i=s.length, j=0; i>0; i--, j++){
        s.splice(j, 1, copy[i-1]);
    }
};

// THIS ONE IS WORSE BUT IT IS ANOTHER POSSIBILITY
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let l = s.length;

    for(let i=l, j=0; i>0; i--, j++){
        s.splice(j, 0, s[i-1+j]);
    }

    s.splice(l, l);
};
