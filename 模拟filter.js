function filter(list,predicate){
    let arr=[]
    for(let i=0;i<list.length;i++){
        if(predicate(list[i],index,list)){
            arr.push(list[i]);
        }
    }
    return arr  
}

