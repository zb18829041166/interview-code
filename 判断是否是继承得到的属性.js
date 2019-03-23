function isHerit(obj,prop){
   return !obj.hasOwnProperty(prop)&& prop in obj
}

var obj1={name:"章三",age:18};
var obj2={
    walk:()=>{
        return 行走
    }
}

obj1=Object.create(obj2);
console.log(isHerit(obj1,"walk"));//爸爸的 true
console.log(isHerit(obj1,"name"));//自己的 false

console.log(obj1.__proto__===obj2)