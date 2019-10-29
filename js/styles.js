function read(){
    var text= document.getElementById("txt").value
    var list = text.split(" ");   
    var groceries = []
    for(i=0;i<list.length ;i++){
        groceries[i]= list[i]
    }
    console.log(groceries)

}