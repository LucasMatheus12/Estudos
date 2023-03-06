function livro (nome, ano, autor){
    return {
    nomeLivro: nome.toUpperCase(), 
    totalAnos: totalAnos = 2023 - ano, 
    frase: nome.toUpperCase() + ' por ' + autor,
   }
}

const thebook = livro("HArry Potter", 2000, "Josh.p.alexandre")
console.log(thebook.frase);