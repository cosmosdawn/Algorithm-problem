
function shortestPalindrome(s) {
    let tem = s;
    let sReverse = s.split('').reverse().join('');
    let i = 0;
    while (!checkResult(tem)) {
        tem = sReverse.substring(0,i) + s;
        i++;
    }
    return tem;

    function checkResult(str) {
        let middle = parseInt(str.length/2);
        if (str.length % 2 === 0) {
            let J = middle -1;
            for (let i = middle, j = J; i < str.length; i++,j--) {
                if (str[i] !== str[j]) {
                    return false;
                }
            }
            return true;
        } else {
            for (let i = 1; i <= parseInt(str.length/2); i++) {
                if (str[middle + i] !== str[middle - i]) {
                    return false;
                }
            } return true;
        }
    }
}

console.log(shortestPalindrome('aacecaaa'));

console.log(shortestPalindrome('abcd'));