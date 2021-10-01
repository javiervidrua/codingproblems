// I DID NOT CODE THIS
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    var len1 = s1.length, len2 = s2.length;
    if (len1 > len2) return false;
    var count = Array(26);
    count.fill(0);
    for (var i = 0; i < len1; i++) {
        count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    if (allZero(count)) return true;

    for (var j = len1; j < len2; j++) {
        count[s2.charCodeAt(j) - 'a'.charCodeAt(0)]--;
        count[s2.charCodeAt(j - len1) - 'a'.charCodeAt(0)]++;
        if (allZero(count)) return true;
    }

    return false;

    function allZero(count) {
        for (var i = 0; i < 26; i++) {
            if (count[i] !== 0) return false;
        }
        return true;
    }
};
