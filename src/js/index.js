// objetivo 1 - quando clicar no botao de troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para lua


// passo 1 - pegar no JS o elemento HTML correspondente ao botao de troca de tema


const botaoAlterarTema = document.getElementById("botao-alterar-tema");


// passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body

const body = document.querySelector("body")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

//passo 3 - dar um jeito de identificar o clique do usuario no botao de troca de tema

botaoAlterarTema.addEventListener("click", () => {

        // passo 6 - verificar se o body ja tem a classe modo-escuro
        const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
        if(modoEscuroEstaAtivo) {
    
        // passo 7 remover a classe modo-escuro do body
         body.classList.remove("modo-escuro");
            
        // passo 8 trocar a imagem do botao de alterar tema para sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
        

            } else {

// passo 4 - adicionar a classe modo-escuro no body
body.classList.add("modo-escuro");

// passo 5 - trocar a imagem do botao de alterar tema para lua
imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")

            }

  
    

    // objetivo 2 - quando clicar no botao de troca de tema, caso o body já tenha a calsse modo-escuro, remover a classe para mudar pro modo claro e mudar a imagem pro sol


    

    


    



} );





