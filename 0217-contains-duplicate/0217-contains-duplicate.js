/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
     let result=new Set(nums).size;
    return result !== nums.length;
};