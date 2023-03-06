function camelMatch(queries, pattern) {

    let result = [];

    for (let query of queries) {
        result.push(judgeCanMatch(query, pattern))
    }

    return result;

    function judgeCanMatch(item, pattern) {
        let patternUpcase = {};
        let itemUpcase = {}
        for (let char of item) {
            if (char >= 'A' && char <= 'Z') {
                itemUpcase[char] = itemUpcase[char] ? itemUpcase[char] + 1 : 1;
            }
        }
        for (let char of pattern) {
            if (char >= 'A' && char <= 'Z') {
                patternUpcase[char] = patternUpcase[char] ? patternUpcase[char] + 1 : 1;
            }
        }
        // console.log('patternUpcase is', patternUpcase);
        // console.log('itemUpcase is', itemUpcase);

        if (Object.keys(itemUpcase).length !== Object.keys(itemUpcase).length || !Object.keys(itemUpcase).every(key => patternUpcase[key] === itemUpcase[key])) {
            return false;
        }

        for (let char of pattern) {
            if (item.indexOf(char) < 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(camelMatch(["CompetitiveProgramming","CounterPick","ControlPanel"], 'CooP'))