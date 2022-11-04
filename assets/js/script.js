let quizSelection = '';
let respostaSe = [];
let repostasCorretas = 0;
let atual = 0;

function selecionarQuiz(quiz) {
  quizAtualJogo(quiz)
  quizSelection = quiz 
}

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
      } else {
        alert("Escolha uma resposta");
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

  let arreyRespostas = [];
  let arreySelecionado = [];
  let arreyResErrada = [];
  let arreyPerResErrada = [];
  let somar = 0;
  let qtc = 0;
  let qtcSelec = 0;

  quizSelection.forEach((e) => {
    arreyRespostas.push(e.correta);
  });

  respostaSe.forEach((e) => {
    if (e !== arreyRespostas[somar]) {
      let charResposta = +quizSelection[somar].correta;
      arreyResErrada.push(quizSelection[somar].questoes[charResposta]);
      arreyPerResErrada.push(quizSelection[somar].pergunta);
    } else {
      qtcSelec++;
    }
    somar++;
    qtc++;
  });

  /*   mostrar os elementos na tela   */
  let porcentagemAcerto = parseInt((qtcSelec * 100) / qtc);
  let parabens = document.querySelector(".resumo-geral p");
  let porAcerto = document.querySelector(".resumo-geral .porcentagem-acerto");
  let perDaResposta = document.querySelector(".respostas-erradas .respotas");
  let somarRes = 0;

  porAcerto.innerHTML = `De ${qtc} perguntas você acentou ${qtcSelec}`;

  arreyPerResErrada.forEach((e) => {
    perDaResposta.innerHTML += `<dt><span class="cor-blue">Pergunta:</span> ${e}</dt>`;
    perDaResposta.innerHTML += `<dd><span class="cor-red">Resposta certa:</span> ${arreyResErrada[somarRes]}</dd>`;
    somarRes++;
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
/*   reiniciar o game*/
