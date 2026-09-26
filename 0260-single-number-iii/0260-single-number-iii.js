/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let map = {};
    let result = [];

    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    for (let key in map) {
        if (map[key] === 1) {
            result.push(Number(key));
        }
    }

    return result;
};