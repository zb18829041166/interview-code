//关键就是indexof 函数如果没有存在数，那么返回-1
function randomArr(){
    let arr=[]
    for(var i=0;i<8;i++){
        let temp=Math.round(Math.random()*15+5);
        if(arr.indexOf(temp)===-1){
            arr.push(temp);
        }else{
            i--;
        }
    }
    return arr
}

console.log(randomArr())