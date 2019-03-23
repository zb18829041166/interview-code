//核心思想就是不断用中间的数与目标对比，要么加一要么减一，找不到返回-1
//具体实现方式可以用while循环 或者递归

function binarySearch(target,arr){
    let start=0,
        end=arr.length-1,
        element,
        i

    while (start<=end) {
        i=Math.floor((start+end)/2);
        element=arr[i];
        if(element===target){
            return i
        }else if(element>target){
            end=i-1;
        }else if(element<target){
            start=i+1;
        }
    }
    return -1
}

console.log(binarySearch(1,[2,2,3]));