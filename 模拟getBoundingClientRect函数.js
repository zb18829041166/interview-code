/* 
    offset是从父元素（已经定位的元素，如果没有的话，就相当于body的距离）的padding到子元素的border
    定位是指relative/absolute
    clientTop是上边框厚度
    所以整个算法就是不断求距离+边框 求和
*/



function offsetSum(node){
    let left=0,
        top=0;
    while (node) {
        left+=node.offsetLeft;
        top+=node.offsetTop;
        node=node.offsetParent;
        if(node){
            left+=node.clientLeft;
            top+=node.clientTop;
        }
    }
    return ({
        left:left,
        right: right,
    })
}