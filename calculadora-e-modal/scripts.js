//////////////////////////////////////////////////

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function tabuadaDe2(item) {
    console.log(item*2)
}
numeros.forEach(tabuadaDe2);

//////////////////////////////////////////////////
const elemento = document.querySelector('h1')
elemento.textContent; //Muda o Texto
elemento.innerHTML; //Muda o Texto mas podendo utilizar elementos do HTML
elemento.innerText; //Muda somente Texto interno do elemento 
//////////////////////////////////////////////////

const header = document.querySelector('header');
header.setAttribute("id", "header");
header.getAttribute; // mostra o atributo
header.removeAttribute; // remove o atributo do elemento
header.style; // modifica ou adiciona, um style para o elemento

/////////////////////////////////////////////////

const elements = document.querySelector('header');
elements.parentElement;  // Navega pelos elementos Pais
elements.parentNode; // Navega pelos elementos Pais
elements.childNodes; //Navega pelos elemntos filhos
elements.children; //Navega pelos elemntos filhos
elements.firstChild; //Navega pelos mais proximos elementos filhos
elements.firstElementChild; //Navega pelos elemntos filhos
elements.lastChild; //Navega pelo ultimo elemento filho
elements.lastElementChild; //Navega pelo ultimo elemento filho
elements.nextSibling; //Navega pelo irmão mais proximo
elements.nextElementSibling; //Navega pelo elemento irmão mais proximo
elements.previousSibling; //Navega pelo irmão acima mais proximo
elements.previousElementSibling //Navega pelo elemento irmão acima mais proximo

/////////////////////////////////////////////////

const div = document.createElement('div');
div.innerText = "Olá Devs!"
div.style.textAlign = "center";
const body = document.querySelector('body');
const header3 = body.querySelector('header');
body.append; //Adiciona o elemento por ultimo
body.prepend; //Adiciona o elemento por primeiro
body.insertBefore(div, header3.nextSibling); //Adiciona o elemento no depois, e com um machete consegue ser colocado antes

/////////////////////////////////////////////////

const input = document.querySelector('input')

