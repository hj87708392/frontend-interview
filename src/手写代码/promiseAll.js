function promiseAll(arr) {
    let count = 0;
    let result = [];
    let arrlength = arr.length;
    return new Promise((resolve, reject) => {
        for (let index = 0; index < arrlength; index++) {
            Promise.resolve(arr[i]).then(
                (res) => {
                    count++;
                    result = arr[i];
                    if (arrlength === count) {
                        reject(result);
                    }
                },
                (err) => {
                    reject(err);
                }
            );
        }
    });
}

var p1 = Promise.resolve(1),
    p2 = Promise.resolve(2),
    p3 = Promise.resolve(3);
promiseAll([p1, p2, p3]).then(function (value) {
    console.log(value);
});

// 二维数组中的查找
// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，
//每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
let arr1 = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
];

function find(target, arr) {
    let lines = arr.length;
    let cols = arr[0].length;
    let x = 0;
    let y = cols - 1;
    while (x < lines && y >= 0) {
        if (target == arr[x][y]) {
            return true;
        }
        if (target > arr[x][y]) {
            x++;
        } else {
            y--;
        }
    }
    return false;
}
var findNumberIn2DArray = function (arr, target) {
    if (!arr || arr.length == 0 || arr[0].length == 0) return false;
    var rows = arr.length; //5
    console.log(rows);
    var cols = arr[0].length; //55
    console.log(cols);
    var row = 0,
        col = cols - 1; //4
    while (row < rows && col >= 0) {
        if (arr[row][col] > target) {
            col--;
        } else if (arr[row][col] < target) {
            row++;
        } else {
            return true;
        }
    }
    return false;
};

// find(4, arr);

findNumberIn2DArray(arr1, 24);
