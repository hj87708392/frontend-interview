function promiseRace(arr) {
    return new Promise((resolve, reject) => {
        for (let index = 0; index < arr.length; index++) {
            Promise.resolve(arr[index]).then(
                (res) => {
                    console.log(res);
                    resolve(res);
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
promiseRace([p1, p2, p3]).then(function (value) {
    console.log(value);
});
