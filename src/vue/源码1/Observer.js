class Observer {
    constructor(data) {
        this.observe(data);
    }
    observe(data) {
        if (data && data instanceof Object) {
            //  console.log(data instanceof Object)
            Object.keys(data).map((key) => {
                console.log(key);
                this.defineReactive(data, key, data[key]);
            });
        }
    }

    defineReactive(obj, key, value) {
        //递归
        this.observe(value);

        //创建dep,每个dep和data中每个key有一对一的关系
        const dep = new Dep();
        // console.log('dep', dep);

        //劫持
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: false,
            get() {
                console.log('Dep.target', Dep.target);
                //订阅数据变化,往Dep添加观察者

                Dep.target && dep.addSub(Dep.target);
                // console.log(value)
                return value;
            },
            set: (newval) => {
                console.log('set');
                this.observe(newval);
                if (newval !== value) {
                    value = newval;
                }
                //通知变化
                dep.notify();
            },
        });
    }
}
//收集依赖
class Dep {
    constructor() {
        this.sub = [];
    }

    //收集观察者
    addSub(watcher) {
        this.sub.push(watcher);
        //console.log(this.sub)
    }

    //通知观察者去更新
    notify() {
        console.log('观察者', this.sub);
        this.sub.map((watcher) => {
            //console.log(watcher)
            watcher.update();
        });
    }
}

class Watcher {
    constructor(vm, key, cb) {
        console.log(111);
        this.vm = vm;
        this.key = key;
        this.cb = cb;
        //先把旧值保存起来
        this.oldVal = this.getOldVale();
    }

    //取旧值
    getOldVale(watcher) {
        //创建实例时 把实例指向dep.target
        console.log(this);
        Dep.target = this;
        let oldVale = compileUtil.getValue(this.key, this.vm);
        Dep.target = null; //销毁dep
        return oldVale;
    }

    //判断旧值是不是有变化
    update() {
        let newVale = compileUtil.getValue(this.key, this.vm);
        console.log(newVale);
        if (newVale !== this.oldVal) {
            this.cb(newVale);
        }
    }
}
