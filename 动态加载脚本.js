/* 
    onload是加载脚本之后运行，具体用处不知
    this指向<script></script>,这个地方的this就是我想要弄清楚的
    彻底弄清楚了，这个样子的this指向srcipt
    而箭头函数的this 等于定义时的外界上下文

*/
function loadScript(url,fn){
    let srcipt=document.createElement("script");
    srcipt.src=url;
    document.body.appendChild(srcipt);
    srcipt.onload=function(){
        fn.call(this);
    };
}



const numbers = [10, 20, 30, 40];
const doubledOver50 = numbers.reduce((finalList, num) => {
  num = num * 2;
  if (num > 50) {
   finalList.push(num);
  }
  return finalList;
}, []);
doubledOver50; // [60, 80]
console.log(doubledOver50)

const myMap=(arr,fn)=>{
    let res=arr.reduce((acc,item)=>{
        acc.push(fn(item))
        return acc
    },[])
    return res
}

console.log((0.1+0.2).toFixed(1)==0.3)



