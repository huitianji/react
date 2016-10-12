const add = x => y => x + y;

const increment = add(1);
//阶乘
const factorial = num => {
    if (num <= 0) {
        return 1;
    }else {
        return (num*factorial(num - 1));
    }
}
//递减
const countdown = num => {
    if (num > 0) {
        console.log(num);
        countdown(num - 1);
    }
}
//console.log(countdown(4))

for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        //console.log(i);
    });

}

for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        //console.log(i);
    });

}
//let a = 1;
//console.log(a);

//-->结构赋值

//let arr = [1, [2, -2], 3];
//let a = arr[0];
//let b = arr[1];
//let c = arr[2];

//[a, [, x], c] = arr;
//console.log([a, [, x], c]);

//拓展运算符

//let arr = [1, 2, 3, 4, 5, 'b'];
//
//let [a, b, ...other] = arr;
//console.log([a, b, ...other]);

//越界赋值
let arr = [1, 2];
let [a, b, c] = arr;
//console.log(a, b, c);

//-->函数

function ad (x, y = 0) {
    return x + y;
}

let res = ad(1, undefined);
//console.log(res);

//作用域赋值
let x = 1;
let aFun1 = (x, y) => {
    x = 3;
    return x + y;
}
//console.log(aFun1(1,2), x);

//拓展运算符

let aFun2 = (...arg) => {
    let res = 0;
    for (let i = 0, len = arg.length; i < len; i++) {
        res += arg[i];
    }
    return res;
}
//console.log(aFun2(1, 2, 3));

let aFun3 = (a, ...arg) => {
    let res = 0;
    res += a;
    for (let i = 0, len = arg.length; i< len; i++) {
        res += arg[i];
    }
    return res;
}

//console.log(aFun3(1, 2, 3));

//求最大值

let strS1 = [1, 10, 4, 8, 2];
//console.log(Math.max(...strS1));
//console.log(Math.max([1, 10]))
//console.log(Math.max.apply(null, strS1));

//箭头函数

let aFun4 = arr.map((item,index,arr) => item*item);

//箭头函数关键字

function aFun5 () {
    setTimeout(() => console.log(this.id));
    //console.log(this)
    //setTimeout(function () {
    //    console.log(this.id);
    //});

}

let obj = {
    id:"this-id"
}

//aFun5.call(obj);

let obj1 = {
    id:"123",
    fuc1:function () {
        setTimeout(function () {
            return this.id;
        });
    },
    func2:function () {
        setTimeout(() => this.id);
    },
    func3:() => {
        setTimeout(() => this.id);
    }
}

//字符串
let str2 = "abc";
let es6Str = `this is ${str2}`;
//console.log(es6Str);

let es6X = 'x';
let es6Y = 'y';

let strT = tagTemplate`12${es6X}3${es6Y}`;

function tagTemplate (str, ...other) {
    //console.log(str, other)
}
//-->数组
let obj5 = {
    a:"a",
    b:"b"
}

let es6Obj1 = [1, 2, obj5];
let v1 = Array.from(es6Obj1);
obj5.c = "cc";
//-->对象
let va = "a";;
let vb = "b";
let vc = "c";

let vobj = {
    va,
    vb,
    vc
}

let vobj3 = {
    add () {
        return {va, vb, vc};
    }
}

//console.log(vobj3.add())
//--> set

let m = [1, 2, 3, 3, 2];

let newArr = new Set(m);
console.log(Array.from(newArr))





















