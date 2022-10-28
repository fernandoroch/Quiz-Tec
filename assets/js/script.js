let quizSelection = ''

function selecionarQuiz(quiz) {
  if (quiz === "questoesHtml") {
    quizAtualJogo(questoesHtml);
    quizSelection = questoesHtml
  } else if (quiz === "questoesCss") {
    quizAtualJogo(questoesCss);
    quizSelection = questoesCss
  } else {
    quizAtualJogo(questoesJs);
    quizSelection = questoesJs
  }
}



let respostaSelecionada = "";
let repostasCorretas = 0;
let mudarValor = 0;
let atual = 0;

function quizAtualJogo(quizAtual) {
  let iniciarQuiz = document.querySelector("#container-geral");
  let conteudoQuiz = "";

  if (quizAtual[atual]) {
    console.log(quizAtual[atual])
    let q = quizAtual[atual];
    conteudoQuiz += '<main class="bg-quiz">';
    conteudoQuiz += '<div class"container-quetoes">';
    conteudoQuiz += "<div class='pergunta'><h2></h2></div>";
    conteudoQuiz += '<div class="questoes-quiz"></div>';
    conteudoQuiz += ` <button class="button">proximo</button>`;
    conteudoQuiz += "</div>";
    conteudoQuiz += "</main>";

    iniciarQuiz.innerHTML = conteudoQuiz;

    let pergunta = document.querySelector(".pergunta h2");
    let questao = document.querySelector(".questoes-quiz");

    pergunta.innerHTML = `${q.pergunta}`;

    for (let i in q.questoes) {
      questao.innerHTML += `<div id="organizar"><input type="radio" name="escolha" value="escolha" id="escolha${mudarValor}"><label class="respostaSelecionada" for="escolha${mudarValor}">${q.questoes[i]}</label></div>`;

      mudarValor++;
    }

    let respostaSelecionada = document.querySelectorAll(".respostaSelecionada");

    function respondido() {
      let verificar = this.innerHTML;
      if (verificar === q.correta) {
        this.classList.add("cor-green");
        repostasCorretas++;
      } else {
        this.classList.add("cor-red");
      }
    }
    respostaSelecionada.forEach((e) => {
      e.addEventListener("click", respondido);
    });

    atual++;

    let proximaPergunta = document.querySelector(".button");
    proximaPergunta.addEventListener("click", proximaNow);
    quizAtual[atual]
  } else {
    finishQuiz()
    
  }
}

function proximaNow(){
  quizAtualJogo(quizSelection)
}

/*   Finalizar o Quiz*/

function finishQuiz(){
   
}








//let arrey = Array.prototype.slice.call(respostaSelecionada)
//let arrey = Array.from(respostaSelecionada)
