/* 
    核心思路：
    1创建xmlhttprequest对象
    2设置onreadystatechange属性，设置属性改变之后的对应执行
    3用open方法指定方法和url
    4设置请求头
    5设置表单数据
    6send函数发送请求
*/

function ajax(url) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                //
            }
        }
    }
    xhr.open("post", url);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlcoded");
    let data = new FormData();
    data.append("age",1);
    data.append("name","zb");
    xhr.send(data);
}

