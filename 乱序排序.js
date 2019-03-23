var arr=[1,2,3,4,5,6];

function outOfOrder(arr){
    let length=arr.length-1,temp,index;
    for(let i=length;i>=0;i--){
        index=Math.floor(Math.random()*i);
        temp=arr[index];
        arr[index]=arr[i];
        arr[i]=temp;
    }
    return arr
}

console.log(outOfOrder(arr))