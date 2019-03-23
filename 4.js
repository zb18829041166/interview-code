var a="dsafjlcidajff";
var b={};
var temp;

for(var i=0;i<a.length;i++){
    temp=a[i];
    if(!b[temp]){
        b[temp]=1;
    }else{
        b[temp]++;
    }
}


console.log(b)
