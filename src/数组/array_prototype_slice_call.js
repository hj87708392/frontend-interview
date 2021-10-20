let a = function () {
    console.log(this);
    console.log(typeof this);
    console.log(this instanceof String);
};

a.call('littleLuke');
