// 两数之和

function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.get(target - nums[i]) !== undefined) {
            return [map.get(target - nums[i]), i]
        } else {
            map.set(nums[i], i)
        }
    }
    return []
}

console.log(twoSum([2,7,11,9], 9));