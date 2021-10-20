class Scheduler {
    constructor() {
        this.list = [];
        this.maxNum = 2; //最大执行的值
        this.workingNum = 0; //当前正在执行的任务
    }

    add(promiseCreator) {
        this.list.push(promiseCreator);
    }

    start() {
        for (let index = 0; index < this.list.length; index++) {
            this.doNextTask();
        }
    }

    doNextTask() {
        //判断最大数量还没达到最大并发
        if (this.list.length && this.workingNum < this.maxNum) {
            this.workingNum++;
            //先把第一个任务取出来执行
            // console.log(this.list.shift()())
            this.list
                .shift()()
                .then(() => {
                    this.workingNum--;
                    this.doNextTask();
                });
        }
    }
}

function timeout(time) {
    return new Promise((resolve) => {
        console.log(time)
        setTimeout(resolve, time);
    });
}

var scheduler = new Scheduler();

function addTask(time, order) {
    scheduler.add(() => timeout(time).then(() => console.log(order)));
}

addTask(1000, 1);
addTask(500, 2);
addTask(300, 3);
addTask(400, 4);
scheduler.start();

