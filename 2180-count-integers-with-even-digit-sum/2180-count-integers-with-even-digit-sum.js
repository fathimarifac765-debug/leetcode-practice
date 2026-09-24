/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count = 0;

    for (let i = 1; i <= num; i++) {
        let n = i;
        let digitSum = 0;

        while (n > 0) {
            digitSum += n % 10;
            n = Math.floor(n / 10);
        }

        if (digitSum % 2 === 0) {
            count++;
        }
    }

    return count;
};