//输入 [3,2,1,5,6] 和 k=2
//输出 5

//输入 [3,2,3,1,2,4,5,5,6] 和 k=4
//输出 4
let arr = [3, 2, 1, 5, 6];
function sort(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length - 1 - i; k++) {
            if (arr[k + 1] < arr[k]) {
                let temp = arr[k + 1];
                arr[k + 1] = arr[k];
                arr[k] = temp;
            }
        }
    }
    console.log(arr);
    return arr[arr.length - k];
}

console.log(sort(arr, 2));
