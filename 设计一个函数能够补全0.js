function preFixZero(integer,digit){
    return (new Array(digit+1).join("0")+integer).slice(-digit)
}

console.log(preFixZero(123,4))


//现在知道为什么要反过来取了吧，slice（-4）就是取得四个数嘛

