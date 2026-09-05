/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let num = x.toString().split("").reduce((a,b)=>a+Number(b),0)
    if (x%num === 0){
        return num
    }
    return -1
};