/*Elementos*/
const screen = document.querySelectorAll('.screen')
const abrirBiscoito = document.querySelectorAll('.abrirBiscoito')
const mensagem = document.getElementById('mensagem')

const mensagens = [
    "Acredite e faça acontecer.",
    "A sorte favorece os corajosos.",
    "Seu potencial é ilimitado.",
    "Grandes coisas estão por vir.",
    "O segredo do sucesso é a persistência.",
    "A perseverança é a chave para o sucesso.",
    "A gratidão transforma o que temos em suficiente.",
    "Grandes realizações nascem de pequenas ações.",
    "A paciência é a chave para todas as portas do sucesso.",
    "Seja a mudança que você deseja ver no mundo."
]

/*abrir Biscoito e abrir outro biscoito*/
abrirBiscoito.forEach(function(botao){
    botao.addEventListener('click', function(){
        // Escolhe uma mensagem aleatória do array
        const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        //Exibe a mensagme pseudo-aleatoria no elemento HTML
        mensagem.textContent = mensagemAleatoria;

        // Alterna a classe hide nas telas
        screen.forEach(function(tela){
            tela.classList.toggle('hide');
        })
    });
});





