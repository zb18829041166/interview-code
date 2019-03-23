function isNaN2(value){
    return typeof value === "number"&& isNaN(value);
}

console.log(isNaN2(NaN));
console.log(isNaN2("111ds"));
console.log(isNaN2(1));