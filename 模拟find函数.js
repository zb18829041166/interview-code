function find(list,predicate){
    for(let i=0;i<list.length;i++){
        if(predicate(list[i],index,list)){
            return list[i];
        }
    }
    return undefined  //这句话其实多余了，因为默认返回undefined
}

