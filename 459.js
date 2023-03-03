function repeatedSubstringPattern(s) {

    for (let i = 1; i < s.length; i++) {
        if (checkFn(s.substring(0, i), s)) {
            return true;
        }
    }

    return false;

    function checkFn(basic, string) {
        let check = basic;
        while (check.length < string.length) {
            check += basic;
        }
        return check === string;
    }
}

console.log(repeatedSubstringPattern('abab'));

