function fill(y){
    document.getElementById("result").value+=y;
}

function cls(){
    document.getElementById("result").value="";
}
function show(){
    let y=0;
    var x= document.getElementById("result").value;
    y += eval(x);
    if(y == 0){
        alert("error");
    }
    document.getElementById("result").value = y;
}