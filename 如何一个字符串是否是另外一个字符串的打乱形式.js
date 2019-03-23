//sort比较字母的ASCII字母表


function isEqual(str1,str2){
    str1=str1.split("").sort().join("");
    str2=str2.split("").sort().join("");
    return str1===str2
}