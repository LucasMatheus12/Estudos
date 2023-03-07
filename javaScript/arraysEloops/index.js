const lista = ["JavaScript", 20, true]; 

const body = document.querySelector('body'); 

// for (let i = 0; i < lista.length; i++){
//     body.innerHTML += `<li> ${lista[i]} </li>`;
// }


// ForEach
function percorrerArray(item){
    body.innerHTML += `<li> ${item} </li>`
}

lista.forEach(percorrerArray)