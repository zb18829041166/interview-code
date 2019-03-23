/* 
    同时用filter和indexOf函数
*/

function intersection(arr1,arr2){
    return arr1.filter((value,index)=>{
        return arr2.indexOf(value)>=0;
    })
}

