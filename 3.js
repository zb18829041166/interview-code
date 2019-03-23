//封装一个判断整数的函数
//首先判断是不是个数字 然后判断有限 最后是%===0
function isInteger(value){
    return typeof value ==="number"&&isFinite(value)&&value%1===0
}


console.log(isInteger(3.5))
console.log(isInteger(3))

function isNaN2(value){
    return typeof value==="number"&&isNaN(value)
}

console.log(isNaN2(NaN))
