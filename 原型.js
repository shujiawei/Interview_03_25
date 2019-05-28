function Person() {
    this.hha = 'shenzhiyuan';
    this.friends = ['jiaweisu', 'york'];
}
Person.prototype = {
    age: 24,
    name: 'jiaweisu',
    friends: ['jiaweisu', 'york'],
    sayHello: function() {
        console.log(this.age)
    }
}
Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: false, // 不可枚举
    value: Person
});
// construstor
const person1 = new Person();
const person2 = new Person();
const key = Object.keys(Person.prototype);
console.log(Person.prototype.constructor);
console.log(person1.constructor === Person)
console.log(key);
console.log(person1.__proto__ === Person.prototype);
console.log(typeof NaN)
console.log(NaN === NaN)

person1.friends.push('xiaoxiao')
console.log(person1.friends)
console.log(person2.friends)

const array = []
array.push.apply(array, [12334])
console.log(array)

function C(name) {
    const o = new Object();
    o.name = name;
    o.sayName = function () {
        console.log(this.name)
    }
    return o;
}
C.prototype.sayHello = function() {
    console.log('this sayHello')
}
const c1 = new C('JIAWEI');
c1.sayName()
console.log(c1 instanceof C)

let sortArray = [1, 2, 7, 3, 5, 55, 12, 44];
// 从小到大
for (let i = 0; i < sortArray.length; i++) {
    for (let a = i + 1; a < sortArray.length; a++) {
        if (sortArray[i] > sortArray[a]) {
            const tem = sortArray[a];
            sortArray[a] = sortArray[i];
            sortArray[i] = tem;
        }
    }
}
console.log(sortArray)

/**
 * 原型，构造函数，实例的关系
 * 每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例创建都包含一个指向原型对象的内部指针
 * 所有引用类型都默认继承了Object，而继承是通过原型链来实现的，
 * 所有函数的默认的原型都是Object的实例，因此默认的原型都会包含一个内部指针，指向Object.prototype
 */    
/*---------------------------------------------*/

function SuperType() {
    this.property = true;
}
SuperType.prototype.getSuperValue = function() {
    return this.property;
}
function SubType() {
    this.subproperty = false;
}
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function() {
    return this.subproperty;
}
const instance = new SubType();

console.log(instance.getSuperValue())

// 确认原型和实例之间的关系 instanceof Object.prototype.isPrototypeof

console.log(instance instanceof SubType)
console.log('ssadas:',instance instanceof SuperType)
console.log(instance instanceof Object)

console.log(Object.prototype.isPrototypeOf(instance))
console.log(SuperType.prototype.isPrototypeOf(instance))
console.log(SubType.prototype.isPrototypeOf(instance))

// apply call bind
// 借用构造函数
 
function SuperType1(name) {
    this.name = name;
}
SuperType1.prototype.hha = 1
SuperType1.prototype.sayName = function() {
    console.log(this.name)
}

function SubType1() {
    SuperType.call(this, 'jiaweisu');
    this.age = 24;
}
var instance1 = new SubType1();
console.log(instance1.name)
console.log(instance1.sayName())
console.log(instance1.hha)

// 组合继承