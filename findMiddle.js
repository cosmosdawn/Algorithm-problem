// 找到数组的中数

// 找到数组的中数
function findMiddle(numArr) {
    if (numArr.length <= 1) {
        return 0
    }

    for (let i = 0; i < numArr.length; i++) {
        if (getLeftPower(numArr, i) === getRightPower(numArr, i)) {
            return i
        }
    }

    return -1;


    function getLeftPower(array, index) {
        if (index === 0) {
            return 1;
        }
        let result = 1;
        for (let i = 0; i < index; i++) {
            result = result * array[i];
        }
        return result;
    }

    function getRightPower(array, index) {
        if (index === array.length - 1) {
            return 1;
        }
        let result = 1;
        for (let i = index + 1; i < array.length; i++) {
            result = result * array[i]
        }
        return result;
    }
}

console.log(findMiddle([2,5,3,6,5,6]))