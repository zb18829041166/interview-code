//这个地方类似于做了一个闭包，但其实不是闭包
//基本思路就是如果有初始值，那么就针对数组的每一个数相加，然后取代初始值，不断取代，返回根本
//我要做的就是打破自己调用自己这个误区
function iterator(list,iteratee,initialValue,index,length){
    for(;index>=0&&index<length;index++){
        initialValue=iteratee(initialValue,list[index],index,list);
    }
    return initialValue
}


function reduce(list,iteratee,initialValue){
    var index=0,length=list.length;
    if(arguments.length<3){
        initialValue=list[index];
        index=1;
    }
    return iterator(list,iteratee,initialValue,index,length);
}

var sum=reduce([1,2,3],(a,b)=>a+b,0)

console.log(sum);