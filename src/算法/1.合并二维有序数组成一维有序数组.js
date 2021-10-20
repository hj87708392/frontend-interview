var arr = [
    [1, 2, 4],
    [2, 3, 7],
    [3, 5, 7],
    [4, 5, 8],
];

function marge(arr) {
    let newArr = arr.reduce((pre, cur) => {
        return pre.concat(cur);
    }, []);
    return sort(newArr);
}

var arr1 = [10, 2, 4, 3, 5, 7, 4, 5, 8];

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            // const element = array[j];
            //   10>2
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]; //10
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//换位置
function changePosition(arr) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            //换位置 10和2换
            let temp = arr[j]; //10
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            console.log(arr[j + 1], arr[j]);
        }
    }
    return arr;
}

var arr2 = [10, 2];
//console.log(changePosition(arr2));

console.log(marge(arr1));
