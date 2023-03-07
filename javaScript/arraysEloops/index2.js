// const links = document.querySelectorAll('nav a'); 

// function logHef(item){
//     const href = item.href; 
//     console.log(href);
// }

// links.forEach(logHef)


const links = document.querySelectorAll('nav a');

function ativarLink(item){
    const href = item.href
    const url = document.location.href
    console.log(url);

    if(url === href){
        item.style.backgroundColor = "black"; 
        item.style.color = "white"
    }
}

links.forEach(ativarLink)