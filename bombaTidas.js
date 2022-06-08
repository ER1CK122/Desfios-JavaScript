let tentativas = 3;

function verificarSenha(){
  let senha = document.querySelector('#senha').value;
  let modalNo = document.querySelector('#modal-no');
  let modalYes = document.querySelector('#modal-yes');
  
  if(senha == 835947){ 
    
    console.log('Passou no teste soldado');
  }

  if (tentativas == 0) {
    console.log('Reprovou no teste soldado');   
  } else {
    tentativas = tentativas -1
  }


 console.log(tentativas)


  
};

/* Contagem regressiva
function tempoDaBomba(duration, tempo) {
    let timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        tempo.textContent = seconds;
        if (--timer < 0) {
            timer = duration;
        };
    }, 100); 
    if(tempoDaBomba == 0){
        modalNo.classList.toggle('display-block');
        console.log('Reprovou no teste');
    };
};
window.onload = function () {
    let duration = 30; // Converter para segundos
    let tempo = document.querySelector('#tempo'); // selecionando o timer
        tempoDaBomba(duration, tempo); // iniciando o timer
    };
*/























/*  Senha Aqui  */
function apareceu(){
    const strong = document.querySelector('strong')
    strong.classList.toggle('display-block')
}
// Fazer uma input com um oque é oque é, e se ele acertar a pergunta, ele recebe a senha