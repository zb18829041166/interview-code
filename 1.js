//每一轮都与第i个数比较 
//选择排序
var a=[1,2,5,2,3,3,4,7,9]
var temp;
for(var i=0;i<a.length;i++){
    for(var j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
}
console.log(a)

