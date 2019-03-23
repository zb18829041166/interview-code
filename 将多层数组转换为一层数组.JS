function flatten(arr){
    let result=[];                  //核心在于用result形成闭包,然后遍历
    function flattenitem(arr){
        arr.forEach(item => {
            if(!(item instanceof Array)){  //这里用Array.isArray(arr)效果一样
                result.push(item);
            }else{
                flattenitem(item);
            }
        });
    }
    flattenitem(arr);
    return result
}

console.log(flatten([1,2,[1,2]]));

//第二种方法用规约和递归的思想
//如果不用闭包，那么就要求每次返回我们需要的值
//规约函数用于数组的遍历操作 十分不错
function flatten2(arr){
    return arr.reduce((initarr,currarr)=>{
        return initarr.concat(Array.isArray(currarr)?flatten2(currarr):currarr)
    },[]);
}

console.log(flatten2([1,2,[1,2]]))