function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype={
    protype:"type"
}

var test=create(Person,"da",20);
console.log(test.protype)



function create(obj){
    let slice=Array.prototype.slice;
    let arg=slice.call(arguments,1);   //这个地方还是我理解错了 应该是a.b()那么本质就是b（a）a是第一个参数 也就是this，对的
    console.log(arguments);
    console.log(arg);
    let result={};
    result.__proto__=obj.prototype;
    let res=Person.apply(result,arg);
    if(res!==null&&typeof res==="object"){  //如果返回对象 那么就替换了
        return res
    }    
    return result
}

