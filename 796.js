function rotateString(s, goal) {
    if(s.length !== goal.length) {
        return false;
    }
    let temp = s;
    let i = 0;
    while (temp !== goal && i < s.length - 1) {
        temp = temp.slice(1) + temp[0];
        i++
    }
    return temp === goal;
}

console.log(rotateString('abcde', 'cdeab'));

console.log('abcde'.slice(1) + 'abcde'[0]);