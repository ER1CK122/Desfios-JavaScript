let tentativas = 2;

function checkPassword(){
  let password = document.querySelector('#password').value;
  let modal = document.querySelector('.modal-wrapper');
  let modalBody = document.querySelector('.modal-body');
  let cOrE = document.querySelector('.c-or-e');

  document.querySelector("body").classList.add('overflow-none');


  if(password == 835947){   
    modal.style.display = "flex";

    setTimeout(function(){
      modal.classList.add("in", "modal-yes");
    }, 200);

    modalBody.innerHTML = "A Bomba Foi Desarmada";
    console.log('Passou no teste soldado');
    cOrE.innerHTML = "*A senha está correta parabéns*"
    cOrE.classList.add('turquoise')
  }else{
    cOrE.innerHTML = "*A senha está incorreta, tente novamente*";
    cOrE.classList.add('red')
  }

  if (tentativas == 0) {    
    modal.style.display = "flex";

    setTimeout(function(){
      modal.classList.add("in", "modal-no");
    }, 200);
 
    modalBody.innerHTML = "A Bomba Explodiu";
    console.log('Reprovou no teste soldado');


  } else {
    tentativas = tentativas - 1;
  }

  console.log("tentativas restantes: " + tentativas);
};

function closeModal(){
  let modal = document.querySelector('#modal');

  document.querySelector("body").classList.remove('overflow-none');

  modal.classList.remove("in");

  setTimeout(function(){
    modal.style.display = "none";
  }, 150);

  console.log('Fecho o modal');
}

function tempoDaBomba(duration, tempo) {
  let modalBody = document.querySelector('.modal-body');

  let timer = duration, seconds;
  
  setInterval(function () {
    seconds = parseInt(timer % 60, 10);
    
    tempo.textContent = seconds;
    
    if (--timer < 0) {
      timer = duration;
    };

    if (timer == 0) {
      modal.style.display = "flex";
      setTimeout(function(){
        modal.classList.add("in", "modal-no");
      }, 200);
      
      modalBody.innerHTML = "A Bomba Explodiu";
      console.log('Reprovou no teste soldado');
      duration = -1;
    };

  }, 1000);
}

function tempoDaBomba2(duration, tempo) {
  let modalBody = document.querySelector('.modal-body'); 
  
   let mytimer = setInterval(function () { 
    tempo.textContent = duration;
    
    if (duration > 0 ) {
      duration = --duration
    } else {
      modal.style.display = "flex";
      setTimeout(function(){
        modal.classList.add("in", "modal-no");
      }, 200);
      
      modalBody.innerHTML = "A Bomba Explodiu";
      console.log('Reprovou no teste soldado');   
      
      clearInterval(mytimer);
    } 
  }, 1000);
}

window.onload = function () {
  let duration = 30;
  let tempo = document.querySelector('#time');
  tempoDaBomba2(duration, tempo); 
};

