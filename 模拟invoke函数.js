function invoke(list,methodName,arg){
    [list,methodName,...arg]=arguments;   //事实上证明用剩余符与用slice方法是一样的，目标都是从类数组变成数组
    
    return
    list.forEach(methodName(item.index,arg))

};


invoke(1,2,3);