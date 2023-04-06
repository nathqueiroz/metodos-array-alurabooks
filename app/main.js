let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()
const elementoParaInserirLivros = document.getElementById('livros')

async function getBuscarLivrosDaAPI(){//função assíncrona para a função esperar uma promessa para receber os livros
    const resposta = await fetch(endpointDaAPI) //espere a promessa, realize a requisição do endpointdaapi
    livros = await resposta.json()//pega a resposta do código anterior, da requisição e atribui em livros
    console.table(livros)//mostrar em
    exibirOsLivrosNaTela(livros)
}

function exibirOsLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {//forEcha() significa para cada. Então para cada livro quero fazer uma ação
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
    })
}