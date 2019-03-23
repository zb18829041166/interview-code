var a=[1,2,5,2,3,3,4,7,9]
var temp;
//冒泡排序
//每次比较相邻元素,假定从小到大，那么如果不符合这个，就换位置
//一层for循环控制终点
//一层每次冒泡到终点
for(var i=a.length-1;i>=1;i--){
    for(var j=0;j<i;j++ ){
        if(a[j]>a[j+1]){
            temp=a[j];
            a[j]=a[j+1]
            a[j+1]=a[j]
        }
    }
}
console.log(a)
