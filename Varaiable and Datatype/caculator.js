var a,b,c;

function add(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = parseInt(a)+parseInt(b);
    document.getElementById("ketqua").innerHTML = c;
}
function sub(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = parseInt(a)-parseInt(b);
    document.getElementById("ketqua").innerHTML = c;
}
function mult(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = parseInt(a)*parseInt(b);
    document.getElementById("ketqua").innerHTML = c;
}
function divi(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = parseInt(a)/parseInt(b);
    document.getElementById("ketqua").innerHTML = c;
}