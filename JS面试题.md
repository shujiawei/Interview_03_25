# JS面试题

## Javascript

### 同源策略

### 跨域

### 事件绑定的方式

* 嵌入dom

> <button onclick="func()">按钮</button>

* 直接绑定

> btn.onclick = function() {}

* 事件监听

> btn.addEventListener("click", function() {});

### 事件委托

事件委托使用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。所有用到按钮的事件都适合采用事件委托的技术，使用事件委托可以节省内存。

``` js
    <ul>
        <li>1</li>
    </ul>

    // good
    document.querySelector('ul').onclick = (event) => {
        const target = event.target;
        if (target.nodeName === 'LI') {
            console.log(target.innerHTML);
        }
    }

    // bad
    document.querySelectorAll('li').forEach(e => {
        e.onclick = () => {
            console.log(this.innerHTML);
        }
    })
```

### target和currentTarget区别

* event.target
    返回触发事件的元素
* event.currentTarget
    返回绑定事件的元素

### prototype和__proto__的关系是什么

``` js
    const obj = {};
    obj.__proto__ === Object.prototype; // true

    function demo() {}
    demo.prototype.__proto__ === Object.prototype // true
    Object.prototype.__proto__ === null // true
```

### 原型继承

所有的JS对象都有一个prototype属性，只想他的原型对象，当试图访问一个对象的原型时，如果没有在该对象上找到，它还在会搜寻该对象的原型，以及该对象的圆形的原型，依次层层向上搜索，知道找到一个名字匹配的属性或到达原型链的末尾。

### 闭包

闭包是指有权访问另外一个函数作用域中的变量的函数

``` js
    function a() {
        console.log(1)
    };
    function (fn) {
        let timer = 0;
        return function() {
            if (timer++ < 3) {
                fn();
            }
        }
    }
```
### 数据类型

1. undefined
2. null
3. boolean
4. number
5. string
6. object
7. symbol

### 自执行函数？用于什么场景？好处?

自执行函数： 1，生命一个匿名函数2，马上调用这个匿名函数。
作用： 创建一个独立的作用域

好处： 防止变量弥散到全局，以及各种js库冲突。隔离作用域避免污染，或者截断作用域链，避免闭包造成引用变量无法释放。利用立即执行特性，返回需要的业务函数或对象，避免每次通过条件判断来处理

场景： 一般用于框架，插件等场景

### bind,call,apply的区别

call和apply其实是一样的，区别是就在于传参时参数是一个个穿或者是以一个数组的方式来传
call和apply都是在调用时生效，改变调用者的this指向

``` js
let name = 'jack';
const obj = { name: 'tom' };
function sayHi() { console.log('hi,' + this.name); };
sayHi(); // hi,jack
sayHi.call(obj); // hi,tom
```

bind也是改变this的指向，不过不是在调用时生效，而是返回一个新函数。

``` js
    const newFun = sayHi.bind(obj);
    newFun(); /// hi,tom
```