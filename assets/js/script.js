let quizSelection = [];

function selecionarQuiz(quiz) {
  if (quiz === "questoesHtml") {
    quizAtualJogo(questoesHtml);
    quizSelection = questoesHtml; 
  } else if (quiz === "questoesCss") {
    quizAtualJogo(questoesCss);
    quizSelection = questoesCss;
  } else if (quiz === "questoesJs") {
    quizAtualJogo(questoesJs);
    quizSelection = questoesJs;
  } else if (quiz === "questoesReacte") {
    quizAtualJogo(questoesReacte);
    quizSelection = questoesReacte;
  } else if (quiz === "questoesRedux") {
    quizAtualJogo(questoesRedux);
    quizSelection = questoesRedux;
  } else {
    quizAtualJogo(questoesSass);
    quizSelection = questoesSass;
  }
}



let respostaSe = [];
let repostasCorretas = 0;
let atual = 0;

function quizAtualJogo(quizAtual) {
  let iniciarQuiz = document.querySelector("#container-geral .remover-quiz");
  let conteudoQuiz = "";
  
  if (quizAtual[atual]) {
    let q = quizAtual[atual];
    conteudoQuiz += '<main class="bg-quiz">';
    conteudoQuiz += '<div class="pergunta-questoes">';
    conteudoQuiz += '<div class="pergunta"><h2></h2></div>';
    conteudoQuiz +=
      '<div class="questoes-quiz"><form id="form"><button type="submit" class="button">proximo</button></form></div>';
    conteudoQuiz += "</div>";
    conteudoQuiz += "</main>";

    iniciarQuiz.innerHTML = conteudoQuiz;

    let pergunta = document.querySelector(".pergunta h2");
    pergunta.innerHTML = `${q.pergunta}`;

    let questao = document.querySelector(".questoes-quiz #form");
    for (let i in q.questoes) {
      questao.innerHTML += `<div id="organizar"><input type="radio" name="escolha" value="${i}" id="escolha${i}"><label class="respostaSelecionada" for="escolha${i}">${q.questoes[i]}</label></div>`;
    }

    let proximaPergunta = document.querySelector(".button");
    proximaPergunta.addEventListener("click", (e) => {
      e.preventDefault();
      if (questao.escolha.value) {
        respostaSe.push(questao.escolha.value);
        quizAtualJogo(quizSelection);
      }else {
        alert('Escolha uma resposta')
      }
    });
    quizAtual[atual];
  } else {
    finishQuiz();
  }

  

  atual++;
}

/*   Finalizar o Quiz*/

function finishQuiz() {
  let finalizar = document.querySelector(".bg-quiz");
  finalizar.classList.add("fechar");

  let abrirResumo = document.querySelector("#bg-abrir");
  abrirResumo.classList.remove("fechar");

  let arreyRespostas = []
  let arreySelecionado = []
  let arreyResErrada = []
  let somar = 0
  let qtc = 0
  let qtcSelec = 0
  

  quizSelection.forEach((e) => {
    arreyRespostas.push(e.correta) 
  })

  respostaSe.forEach((e) => {
    if(e !== arreyRespostas[somar]){
      let charResposta = +quizSelection[somar].correta
      arreyResErrada.push(quizSelection[somar].questoes[charResposta])
    }else {
      qtcSelec++
      
    }
    somar++
    qtc++
    
  })

 /*   mostrar os elementos na tela   */
  let porcentagemAcerto = parseInt((qtcSelec * 100) / qtc)
  let parabens = document.querySelector('.resumo-geral p')
  let porAcerto = document.querySelector('.resumo-geral .porcentagem-acerto')
  let perDaResposta = document.querySelector('.respostas-erradas dt')
  let respostasEradas = document.querySelector('.respostas-erradas dd')
  

  reiniciarGame()
}
/*   reiniciar o game*/
function reiniciarGame(){

}







