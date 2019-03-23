function isLeapYear(year){
    if(year%4===0){
        return true
    }else{
        return false
    }
}

function isLeapYear3(year){ 
    return year%4===0
}



function isLeapYear2(year){
    return new Date(year,2,0).getDate()===29  //getDate（）会获取对象的日！日！
}