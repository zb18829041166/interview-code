//主要就是应用arguments和函数柯里化

function add(){
    let beArray=[].slice;
    let parameter=beArray.apply(arguments);
    console.log(parameter);
    let result=0;

    function curry(){

    }

    curry.toString=()=>{
        console.log(parameter)
        parameter.forEach(element => {
            result+=element;
            console.log(element);
        });
        //return result;
    }

    return curry
}

console.log(add(1,2,3));
//console.log(add(1,2,3));

