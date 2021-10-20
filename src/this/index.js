function fn() {
    console.log(this);
}

fnjt = () => {
    console.log(this);
};

//fn();
//fnjt()

const obj1 = {
    fun3: function () {
        console.log(this);
    },
};
//obj1.fun3();

const obj2 = {
    fun1: function () {
        console.log(this);
    },
    fun2: () => {
        console.log(this);
    },
    fun3: function () {
        const fun4 = () => {
            console.log(this);
        };
        fun4();
    },
};
//   obj2.fun1()
//   obj2.fun2()
//   obj2.fun3()
