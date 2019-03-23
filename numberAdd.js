function accMul(arg1,arg2){
    let m=0;
    s1=arg1.toString();
    s2=arg2.toString();
    m+=s1.split(".")[1].length;
    m+=s2.split(".")[1].length;
    let result=Number(s1.replace(".",""))*Number(s2.replace(".",""));
    result/=Math.pow(10,m);
    return result
}


console.log(accMul(1.2333,1.3222));