// 最长公共前缀

// 重点！！！！！是前缀，不是子字符串！！
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ''
    if (strs.length === 1) return strs[0];
    return strs.reduce(getSameStr, strs[0]);
};

function getSameStr(a, b) {
    let res = ''
    for (let j = 0; j < a.length; j++) {
        if (a[j] === b[j]) {
            res += a[j];
        } else {
            return res;
        }
    }
    return res
}

console.log(longestCommonPrefix(["abflower","efgflower"]))