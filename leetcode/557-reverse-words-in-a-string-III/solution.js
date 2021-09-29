/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var reverseString = function(s) {
        let copy = s.slice();
        for(let i=s.length, j=0; i>0; i--, j++)
            s.splice(j, 1, copy[i-1]);
        return s;
    };

    let reversed = "";
    for(const word of s.split(" ")){
        //console.log(reverseString(word.split("")).join(""));
        reversed += reverseString(word.split("")).join("") + " ";
    }

    return reversed.slice(0, reversed.length-1);
};
