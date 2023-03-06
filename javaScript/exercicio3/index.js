const botao = document.querySelector("button")

function somar (){
const div = document.querySelector("div"); 
const total = Number (div.innerText) + 1


if(total < 10){
    div.innerText = total; 
}else{
    alert("total é maior, não pode passar de 09");
}
}

if(botao){
    
    botao.addEventListener("click", somar);
}