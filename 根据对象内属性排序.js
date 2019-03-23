//如果返回值大于0，那么a排到b后面去 就记住这个  大于0 b前

var arr=[
    {a:2},
    {a:1},
    {a:3},
]

arr.sort((m,n)=>{
   return  m.a<n.a
})

console.log(arr[0].a)

