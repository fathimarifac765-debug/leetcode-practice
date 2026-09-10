/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let array=new Set();
     for(let value of nums){
        if (array.has(value)){
            return value
        }
        array.add(value);
     }
};