/* 
    核心思路就是<script></script>的src属性不受同源策略限制
    定义一个url 配合回调函数
    服务器得到回调函数 结合数据返回js内容
    浏览器得到js 执行js
*/

var script=document.createElement("script");
var handle=function(){

}
script.src="index.php?handle=handle";
document.body.appendChild(script);

