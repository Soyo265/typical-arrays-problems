
exports.min = function min (array) {
    if (array && array instanceof Array && array.length !== 0){
        let resultArray = array;
        return resultArray.sort((a, b) => a - b)[0];
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if (array && array instanceof Array && array.length !== 0){
        let resultArray = array;
        return resultArray.sort((a, b) => a - b)[array.length - 1];
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    if (array && array instanceof Array && array.length !== 0){
        return array.reduce((sum, val) => sum += val) / array.length;
    } else {
        return 0;
    }
}
