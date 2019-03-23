function parseUrl(url){
    let parseResult={},
        query=location.search||url;
    if(query<=0)return parseResult
    //用？切割字符串
    let querys=query.split("?");
    if(querys.length<=1) return parseResult
    let queryArray=querys[1].split("&");
    let key,value;
    for(var i=0;i<queryArray.length;i++){
        key=(queryArray[i].split("="))[0];
        value=(queryArray[i].split("="))[1];
        parseResult[key]=decodeURIComponent(value);
    }   
    return parseResult
}





