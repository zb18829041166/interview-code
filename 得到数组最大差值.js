//Math.max.apply(this,arr);
//Math.min.apply(this,arr);

//正常写法
//Math.max(1,2)


var maxIncreaseKeepingSkyline = function(grid) {
    var rowMax=(arr)=>{
        let max=arr[0];
        for(let i=1;i<arr.length;i++){
            if(arr[i]>arr[0]){
                max=arr[i]
            }
        }
        return max
    }
    var rowMaxArr=[];
    for(let i=0;i<grid.length;i++){
        rowMaxArr.push(rowMax(grid[i]));
    }
    var temp
    var colMaxArr=[]
    for(let col=0;col<grid.length;col++){
        for(let row=0;row<grid.length;row++){
            if(!temp){
               temp=grid[row][col]; 
            }else{
               if(temp<grid[row][col]){
                   temp=grid[row][col];
               }
            }
        }
        colMaxArr.push(temp);
        temp=[];
    }
    var allAdd=0,add=0;
    for(col=0;col<grid.length;col++){
        for(row=0;row<grid.length;row++){
            add=Math.min(rowMaxArr[row],colMaxArr[col])-grid[row][col];
            if(add>0){
                allAdd+=add;
            }
        }
    }
    return rowMaxArr
};



console.log([])