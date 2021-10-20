const PENDING = 'pending';
const RESOLVE = 'resolve';
const REJECTED = 'rejected';

function myPromise(fn) {
    let that = this;
    that.state = PENDING;
    that.value = null;
    that.resolveCb = [];
    that.rejectCb = [];

    function resolve(value) {
        if (that.state === PENDING) {
            that.state = RESOLVE;
            that.value = value;
            that.resolveCb.map((cb) => cb(value));
        }
    }

    function reject(value) {
        if (that.state === PENDING) {
            that.state = REJECTED;
            that.value = value;
            that.rejectCb.map((cb) => cb(value));
        }
    }
    try {
        fn(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

myPromise.prototype.then = function (onFulfilled, onRejected) {
    let that = this;
    if (this.state === PENDING) {
        this.resolveCb.push(onFulfilled);
        this.rejectCb.push(onRejected);
    }
    if (this.state === RESOLVE) {
        onFulfilled(that.value);
    }
    if (this.state === REJECTED) {
        onRejected(that.value);
    }
};
