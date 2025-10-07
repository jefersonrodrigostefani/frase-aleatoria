/*
* Arquivo de script do projeto
*/

const frases = ["Sua criatividade, explore novos horizontes.",
                "Um momento de alegria está próximo, aproveite!",
                "A sorte sorri para quem acredita em si mesmo.",
                "Novos caminhos se abrirão em sua jornada.",
                "Sua determinação trará grandes conquistas.",
                "A felicidade está nas pequenas coisas da vida.",
                "Um encontro especial mudará seu dia.",
                "Confie em sua intuição, ela não te enganará.",
                "Grandes oportunidades estão no horizonte.",
                "Seu sorriso iluminará o dia de alguém especial."];

function gerarFrase() {
    const dia = document.getElementById("diaAniversario").value;
    
    let divFrase = document.querySelector(".fortune");
    let divMsgErro = document.querySelector(".msgErro");
    let spanMsgErro = divMsgErro.querySelector("span");
    
    spanMsgErro.textContent = "";
    
    if (dia < 1 || dia > 31) {
        //alert("Por favor, informe um dia válido entre 1 e 31!");
        spanMsgErro.textContent = "Por favor, informe um dia válido entre 1 e 31!";
        divFrase.textContent = "Erro";
        return;
    }

    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    divFrase.textContent = `Sua Sorte: ${fraseAleatoria}`
}

