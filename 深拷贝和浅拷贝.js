/**
 * Autor: jiaweisu
 * Date: 2019/4/14
 * Title: 
 */
 
 /**
  * 深拷贝和浅拷贝
  * @param {Objecy | Array | String | Boolean | Number } obj 拷贝的对象
  */
 function cloneDeep(obj) {
    if (typeof obj !== 'object') return obj;
    const cloneObj = obj.constructor === Array ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) { // 不拷贝原型上的
            if (typeof obj[key] === 'object') {
                cloneObj[key] = cloneDeep(obj[key]);
            } else {
                cloneObj[key] = obj[key];
            }
        }
    }
    return cloneObj;
 }

 /**
  * 防抖
  * @param {Function} fn 需要防抖的函数
  * @param {Number} awite  等待的时间
  */
function debounce(fn, awite) {
    let timer = null;
    return function() {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, awite);
    };
}

/**
 * 节流 时间差实现
 * @param {Function} fn 节流的函数 
 * @param {Number} delay 节流间隔
 */
function throttle(fn, delay) {
    const prev = new Date().getTime();
    return function() {
        let next = Date.now();
        if (next - prev >= delay) {
            fn.apply(this, arguments);
            next = Date.now();
        }
    }
}

function throttle2(fn, delay) {
    let timer = null;
    return function () {
        if (!timer) {
            const self = this;
            timer = setTimeout(function() {
                fn.apply(self, arguments);
                timer = null;
            }, delay);
        }
    }
}

function ajax() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'url', false);
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if ((xhr.status >=200 && xhr.status < 300) || xhr.status === 304) {
                console.log(xhr.responseText)
            }
        }
    }
}

/**
 * 获取url的参数
 * a=1&b=2 => {a:1, b:2}
 * @param {String} str 请求的url
 */
function getParams(str) {
    const queryParams = str ? str : window.location.search.replace('?', '');
    if (!params) return {};
    // const splitQuery = queryParams.split('&'); // ['a=1','b=2']
    return queryParams.split('&').map(item => {
        const secondSplitQuery = item.split('='); // ['a', '1']
        return { [secondSplitQuery[0]]: secondSplitQuery[1] };
    });
}
 
/**
 * 请求参数拼接到请求url
 * {a:1,b=2} => a=1&b=2
 * @param {Object} obj 请求数据
 */
function transformParams(obj) {
    return Object.keys(obj).reduce((pre, next, index, arr) => {
        pre += `${next}=${obj[next]}${index === arr.length -1 ? '' : '&'}`;
        return pre;
    }, '');
}

window.addEventListener('click', function() {
    console.log(window);
}, false); // 事件处理添加到冒泡阶段
window.removeEventListener('click', function() {
    console.log(window);
});
window.attachEvent('onclick', function() {
    console.log(window);
});
window.detachEvent('click')
 export default cloneDeep;

//  module.exports cloneDeep;

// export const cloneDeeps = cloneDeep;