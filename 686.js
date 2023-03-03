function repeatedStringMatch(a, b) {
    if (b === '') {
        return 0;
    }
    let canMatch = true;
    for (let char of b) {
        if (a.indexOf(char) < 0) {
            canMatch = false;
        }
    }

    if (a.length > b.length && !judgeSubstr(a + a, b)) {
        canMatch = false
    }

    console.log('canMatch is', canMatch)

    if (!canMatch) {
        return -1;
    }
    let count = 1;
    let basic = a;

    while (!judgeSubstr(basic, b)) {
        basic += a;
        ++count;
    }

    return count;


    function judgeSubstr(str, substr) {
        if (str.length < substr.length) {
            return false;
        }
        for (let i = 0; i < str.length; i++) {
            if (str.slice(i,i+substr.length) === substr) {
                return true
            }
        }
        return false;
    }
}

console.log(repeatedStringMatch('aaaaaaaaaaaaaaaaaaaaaab', 'ba'));
