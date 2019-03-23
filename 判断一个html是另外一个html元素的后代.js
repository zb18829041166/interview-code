//核心思路就是parentNode

function isPosterity(fatherNode,sonNode){
    while(sonNode){
        if(fatherNode===sonNode) return true
        sonNode=sonNode.parentNode;
    }
    return false
}


