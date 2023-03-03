

function strStr(haystack, needle) {

    function getFromIndex(str, index, end) {
        return str.substring(index, end)
    }
    let result = [];
    for (let i = 0 ; i < haystack.length; i++) {
        if (getFromIndex(haystack, i, i + needle.length) === needle) {
            result.push(i);
        }
    }
    if (result.length) {
        return result[0];
    } else {
        return -1;
    }
}

console.log(strStr('hello', 'll'));

console.log('hello'.substring(2, 4));


