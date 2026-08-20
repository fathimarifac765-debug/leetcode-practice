/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
    let twoSum=function (num,target){
    let map = new Map();

    for(let i=0; i< num.length;i++){
        let result= target-num[i];

        if(map.has(result)){
            return [map.get(result),i];
        }
        map.set(num[i],i);
    }
}
twoSum([2,7,11,15],9)