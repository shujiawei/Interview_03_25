# 面向对象的程序设计

### 属性类型

``` js
    // 数据属性
    Object.defineProperty(object, 'attrbute', {
        configurabel: false, // 是否可删除 delete 
        enumerabel: false, // 是否可被for in 枚举
        writeable: false, // 是否可修改
    });
    // 访问器属性
    Object.defineProperty(object, 'attarbute', {
        configurable: false, // 是否可删除
        enumerable: false, // 是否可被for in 枚举
        set() {}, // 设置属性的值
        get() {}, // 获取属性的值
    });
```

### new 一个实例发生的过程

``` js
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.sayName = function () {
            alert(this.name);
        };
    }
    const person1 = new Person('jiaweisu', 24, 'web');
    const person2 = new Person('jiaweisu1', 24, 'web');
```

1. 创建一个对象
2. 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）；
3. 执行构造函数中的代码（为这个新对象添加属性）；
4. 返回一个新的对象

`constructor` 构造函数

``` js
    person1.constructor === Person; // true
    person2.constructor === Person; // true
    person1 instanceof Person; // true
    person1 instanceof Object // true
```
