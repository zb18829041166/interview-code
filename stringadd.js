function stringadd(value){
    let valueArr=value.split("");
    let a={};
    valueArr.forEach(e => {
        if(!a[e]){
            a[e]=1;
        }else{
            a[e]++;
        }
    });
    for(var prop in a){
        console.log(prop+"="+a[prop])
    }
}

stringadd("xxxxyyyda");