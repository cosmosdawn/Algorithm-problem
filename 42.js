// // 接雨水
//
function trap(height) {
    let result = 0;

    for (let i = 0; i < height.length; i++) {
        result += singleTrapWater(height, i);
    }
    return result;

    // 求单格的盛水量
    function singleTrapWater(heightArr, index) {
        let leftArr = [];
        let rightArr = [];
        if (index === 0 || index === heightArr.length - 1) {
            return 0
        }
        for (let i = 0; i < index; i++) {
            leftArr.push(heightArr[i]);
        }
        for (let j = index + 1; j < heightArr.length; j++) {
            rightArr.push(heightArr[j])
        }

        return Math.min(Math.max(...leftArr), Math.max(...rightArr)) - heightArr[index]
    }
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

// console.log([3,2,1].sort().reverse()[0]);