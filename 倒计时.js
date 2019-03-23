function countDown(){
    let end=new Date("2020-6-30 00:00");
    let now=new Date();
    time=end-now;
    let day=Math.floor(time/1000/24/3600);
    let hour=Math.floor((time-day*1000*3600*24)/1000/3600);   //取余数更好，那就是直接time/60/60/1000%24 得到天数余下小时
    let minute=Math.floor((time-day*1000*3600*24-hour*3600*1000)/60/1000);  
    let second=Math.floor((time-day*1000*3600*24-hour*3600*1000-minute*60*1000)/1000);
    let countDownString=`离2020年6月30日凌晨还有${day}天${hour}小时${minute}分钟${second}秒`;
    console.log(countDownString)
}

setInterval(countDown,1000);