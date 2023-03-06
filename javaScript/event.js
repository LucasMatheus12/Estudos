// const botao = document.querySelector('button').classList.add('ativar'); 

// const ativar = document.querySelector(".ativar"); 

// function ativafuncao(){
//     console.log("clicou no botão", ativar);
// }

// ativar.addEventListener("click", ativafuncao); 


const botao = document.querySelector(".botao"); 

function mostrarSobre(){
    const texto = document.querySelector(".texto")
    texto.classList.toggle("ativar");
}

botao.addEventListener("click", mostrarSobre)