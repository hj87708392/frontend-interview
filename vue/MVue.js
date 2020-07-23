

class MVue {
    constructor(option) {
        // console.log(option)
        this.$el = option.el;
        this.$data = option.data;
        this.$option = option;
        if (this.$el) {
            //实现一个观察者
            new Observer(this.$data)
            //2指令解析
            new Compiler(this.$el, this);
        }
    }
}

class Compiler {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el);

        this.vm = vm;
        //1会先将跟节点el转换成文档碎片fragment进行解析编译操作，解析完成，再将fragment添加回原来的真实dom节点中
        const fragment = this.node2Fragment(this.el);

        //2.编译模板
        this.compile(fragment)

        //3.追加到子元素到根元素
        this.el.appendChild(fragment);
        //  console.log(this.el)
    }
    compile(fragment) {

        const childNodes = fragment.childNodes;
        // console.log(Array.from(childNodes))

        Array.from(childNodes).map(element => {
            //console.log(element)
            if (this.isElementNode(element)) {
                //元素节点
                //console.log("元素节点",element)
                this.compileElement(element)
            } else {
                //文本节点
                // console.log("文本节点",element)
                this.compileText(element)
            }
            if (element.childNodes && element.childNodes.length) {
                this.compile(element);
            }
        });


    }
 //处理指令
    compileElement(node) {
        const nodeAttrs = node.attributes;
        Array.from(nodeAttrs).map(attr => {
            const { name, value } = attr;
            if (this.isDirective(name)) { //v-text   v-html  v-model  v-on:click
                const [, dirctive] = name.split('-');//text  html model on:click
                const [dirName, eventName] = dirctive.split(':'); //text  html model on
                // 更新数据  数据驱动视图
                compileUtil[dirName](node, value, this.vm, eventName)
                //删除有指令的标签上的属性
                node.removeAttribute('v-' + dirName)
            }else if(this.isEventName(name)){// @click='handleClick'
                    let [a,eventName]=name.split('@')
                    //console.log(a)
                    compileUtil['on'](node, value, this.vm, eventName)
            }
        })
    }

    //处理文本
    compileText(node) {
        // console.log(node)
        const nodeContent = node.textContent;
        //console.log(nodeContent)
        if (/\{\{(.+?)}\}/.test(nodeContent)) {
           // console.log(nodeContent)
            compileUtil['text'](node, nodeContent, this.vm)
        }
    }

   
    isDirective(attrName) {
        //console.log(attrName.startsWith("v-"))
        return attrName.startsWith("v-")
    }

    isEventName(name){
        return name.startsWith("@")
    }

    // 指令处理集合
    node2Fragment(el) {
        var fragment = document.createDocumentFragment(), child;
        while (child = el.firstChild) {
            fragment.appendChild(child);
        }
        return fragment;
    }

    isElementNode(node) {
        return node.nodeType === 1;
    }
}
const compileUtil = {
    getValue(expr, vm) {
        return expr.split('.').reduce((pre, cur, index, arr) => {
            return pre[cur]
        }, vm.$data)
    },
    setVal(expr, vm,inputVal) {
        return expr.split('.').reduce((pre, cur, index, arr) => {
             pre[cur]=inputVal
        }, vm.$data)
    },

    getContent(expr, vm){
        return  expr.replace(/\{\{(.+?)}\}/g, (...arg) => {
            return this.getValue(arg[1], vm)
        })
    },
    text(node, expr, vm) {
        let value
        if (expr.indexOf('{{') !== -1) {
            value = expr.replace(/\{\{(.+?)}\}/g, (...arg) => {
                new Watcher(vm,arg[1],(newVal)=>{
                    this.updaterData.textUpdater(node, this.getContent(expr,vm))
                })
                return value = this.getValue(arg[1], vm)
            })
        }else{
            value=  this.getValue(expr, vm)
        }
        this.updaterData.textUpdater(node, value)
    },
    html(node, expr, vm) {
        
        const value = this.getValue(expr, vm)
       
        new Watcher(vm,expr,(newVal)=>{
           
            this.updaterData.htmlUpdater(node, newVal)
        })
      
        this.updaterData.htmlUpdater(node, value)
    },
    model(node, expr, vm) {
        const value = this.getValue(expr, vm);
        new Watcher(vm,expr,(newVal)=>{
            this.updaterData.modelUpdater(node, newVal)
        })
        //视图 ==>更新数据 ==>视图
        node.addEventListener('input',(e)=>{
            this.setVal(expr,vm,e.target.value)
        })
        this.updaterData.modelUpdater(node, value)
    },
    on(node, expr, vm, eventName) {
        let fn = vm.$option.methods && vm.$option.methods[expr]
        node.addEventListener(eventName, fn.bind(vm), false)
    },
    updaterData: {
        textUpdater(node, value) {
            node.textContent = value
        },
        htmlUpdater(node, value) {
            node.innerHTML = value
        },
        modelUpdater(node, value) {
            node.value = value
        }
    }
}