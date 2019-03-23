/* 
    主要难点是从伪数组变成真数组
*/
var checkBoxs=document.getElementsByName("color"),
    checkBoxsArr=[].slice.call(checkBoxs),
    arr=[];

checkBoxsArr.forEach(element => {
    if(element.checked===true){
        arr.push(element.value);
    }
});



