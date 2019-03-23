//返回undefined 去掉了name属性
function stringify2(string){
    let string2=JSON.stringify(string,(key,value)=>{
        console.log(value)
        if(key==="name"){
            return undefined
        }else if(key==="0"){
            return undefined
        }else{
            return value
        }
    })
    return string2
}

console.log(stringify2({
    "name":"zb",
    "age":20
}))



