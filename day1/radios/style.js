let PI=12.33;
let radios;
let circule;
document.getElementById("sub-button").onclick=function(){
    radios=document.getElementById("text-ent").value;
    radios=Number(radios);
    circule=2*PI*radios;
    document.getElementById("ans").textContent=circule;
}