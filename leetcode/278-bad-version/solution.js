/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 0, r = n, m;

        while(l <= r){
            m = Math.floor((l+r)/2);

            if(isBadVersion(m)){
                if (!isBadVersion(m-1)) return m;
                else r = m-1;
            }
            else l = m+1;
        }
    };
};
