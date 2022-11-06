let quizSelection = "";
let respostaSe = [];

let repostasCorretas = 0;
let atual = 0;

let qtc = 0;
let qtcSelec = 0;

/*   Define o Quiz que será jogado*/
function selecionarQuiz(quiz) {
  quizAtualJogo(quiz);
  quizSelection = quiz;
}

/*   Inicia o quiz basiado na escolha da tela inicial e remove a tela*/
function quizAtualJogo(quizAtual) {
  if (quizAtual[atual]) {
    let iniciarQuiz = document.querySelector("#container-geral .remover-quiz");
    let conteudoQuiz = "";
    let q = quizAtual[atual];

    conteudoQuiz += '<main class="bg-quiz">';
    conteudoQuiz += '<div class="pergunta-questoes">';
    conteudoQuiz += '<div class="pergunta"><h2></h2></div>';
    conteudoQuiz += '<div class="questoes-quiz">';
    conteudoQuiz += '<form id="form">';
    conteudoQuiz += '<button type="submit" class="button">proximo</button>';
    conteudoQuiz += "</form>";
    conteudoQuiz += "</div>";
    conteudoQuiz += "</div>";
    conteudoQuiz += "</main>";

    iniciarQuiz.innerHTML = conteudoQuiz;

    estruturaSelecaoQuestoes(q);
    quizAtual[atual];
    atual++;
  } else {
    finishQuiz();
  }
}

/*   Estrutura que faz as perguntas e seleção das questões aparecer na tela   */
function estruturaSelecaoQuestoes(q) {
  let pergunta = document.querySelector(".pergunta h2");
  pergunta.innerHTML = `${q.pergunta}`;

  let questao = document.querySelector(".questoes-quiz #form");
  for (let i in q.questoes) {
    questao.innerHTML += `<div id="organizar">
                          <input type="radio" name="escolha" value="${i}" id="escolha${i}">
                          <label class="respostaSelecionada" for="escolha${i}">${q.questoes[i]}</label>
                          </div>`;
  }
  validarSelecaoQuestao(questao);
}

/*   Verificar se o jogador selecionou alguma questão*/
function validarSelecaoQuestao(questao) {
  const proximaPergunta = document.querySelector(".button");
  proximaPergunta.addEventListener("click", (e) => {
    e.preventDefault();
    if (questao.escolha.value) {
      respostaSe.push(questao.escolha.value);
      quizAtualJogo(quizSelection);
    } else {
      alert("Escolha uma resposta");
    }
  });
}

/*   abrir tela de resultado final*/
function AbrirTelaDeResultado(){
  let finalizar = document.querySelector(".bg-quiz");
  finalizar.classList.add("fechar");

  let abrirResumo = document.querySelector("#bg-abrir");
  abrirResumo.classList.remove("fechar");
}

/*   Finalizar o Quiz*/
function finishQuiz() {
  AbrirTelaDeResultado()
  let arreyRespostas = quizSelection.map(item => item.correta)  
  let arreyResErrada = [];
  let arreyPerResErrada = [];

  respostaSe.forEach((e, index) => {
    if (e !== arreyRespostas[index]) {
      let charResposta = +quizSelection[index].correta;
      arreyResErrada.push(quizSelection[index].questoes[charResposta]);
      arreyPerResErrada.push(quizSelection[index].pergunta);
    } else {
      qtcSelec++;
    }
    qtc++;
  });
  mostraElementosTela(arreyResErrada, arreyPerResErrada)
}

 /*   mostrar os elementos na tela depois de finalizar o quis  */
function mostraElementosTela(res, per){
  let porcentagemAcerto = parseInt((qtcSelec * 100) / qtc);
  let parabens = document.querySelector(".resumo-geral p");
  let perDaResposta = document.querySelector(".respostas-erradas .respotas");
  let porAcerto = document.querySelector(".resumo-geral .porcentagem-acerto");
  porAcerto.innerHTML = `De ${qtc} perguntas você acentou ${qtcSelec}`;

  per.forEach((e, index) => {
    perDaResposta.innerHTML += `<dt><span class="cor-blue">Pergunta:</span> ${e}</dt>`;
    perDaResposta.innerHTML += `<dd><span class="cor-red">Resposta certa:</span> ${res[index]}</dd>`;
  });

  if (porcentagemAcerto <= 40) {
    parabens.innerHTML = "Você foi horrivel";
    parabens.classList.add("cor-red");
  } else if (porcentagemAcerto <= 70) {
    parabens.innerHTML = "Você foi mas precisa melhorar";
    parabens.classList.add("cor-red");
  } else if (porcentagemAcerto <= 90) {
    parabens.innerHTML = "Parabéns você foi bom";
    parabens.classList.add("cor-green");
  } else {
    parabens.innerHTML = "Parabéns você foi incrivel";
    parabens.classList.add("cor-green");
  }
}