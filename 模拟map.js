function map(list,iteratee){
    let result=[];
    for(let i=0;i<list.length;i++){
        result[i]=iteratee(list[i],i);
    }
    return result
}

console.log(map([1,2,3],(item,index)=>{
    return item*2
}))