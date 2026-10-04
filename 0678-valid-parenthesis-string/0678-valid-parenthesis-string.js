/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let open = [];
    let star = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            open.push(i);
        } else if (s[i] === "*") {
            star.push(i);
        } else {
            if (open.length > 0) {
                open.pop();
            } else if (star.length > 0) {
                star.pop();
            } else {
                return false;
            }
        }
    }

    while (open.length > 0 && star.length > 0) {
        if (open.pop() > star.pop()) {
            return false;
        }
    }

    return open.length === 0;
};