

function strStr(haystack, needle) {
    function getFromIndex(str, index, len) {
        return str.slice(index, len)
    }
    for (let i = 0 ; i < haystack.length - needle.length; i++) {
        if (getFromIndex(haystack, i, needle.length) === needle) {
            return i
        } else {
            return -1
        }
    }
}

console.log(strStr('sadbutsad', 'sad'))