function calcular(){
  let primeiroValor = parseInt(document.querySelector('#primeiroValor').value);
  let operador = document.querySelector('#operador').value;
  let segundoValor = parseInt(document.querySelector('#segundoValor').value);
  let resul;
  switch(operador){
    case '+':
      resul =  primeiroValor + segundoValor;
      break;
    case '-':
      resul =  primeiroValor - segundoValor;
      break;
    case '/':
      resul =  primeiroValor / segundoValor;
      break;
    case '*':
      resul = primeiroValor * segundoValor;
      break;
  }

 


  const alertSuccess = document.querySelector('#mensagem');
  let texto = 'O Resultado do Calculo é: ' + resul;
  
  alertSuccess.textContent = texto;
  console.log(texto)
}