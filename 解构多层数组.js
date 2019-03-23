//主要利用了toString函数 可以去掉多层数组[]符号
//其次是+item 可以完成类型变换  注意0+"1111"是string形式，+"1111"是int形式

function parseArr(arr){
    return arr.toString().split(",")
           .map((item)=>+item)
}

let arr=[1,2,[1,2,3]];

console.log(parseArr(arr))