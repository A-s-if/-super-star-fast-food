function burgerTk(id,increase){
let pice=document.getElementById("pice").value;
let parPice=parseInt(pice);
let price=document.getElementById(id);
let parPrice=parseInt(price.innerText);
let resust=parPice*parPrice;
if(increase==true){
    parPice=parPice+1;
}
if(increase==false && parPice>0){
    parPice=parPice-1;
}
document.getElementById("pice").value=parPice;
price.innerText=resust;
}