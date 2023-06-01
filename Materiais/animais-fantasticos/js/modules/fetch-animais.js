import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {

  //cria a div contendo informacoes com o total de animais.
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // preenche cada animal no dom
  function preencherAnimal(animal) {
    const numerosGrid = document.querySelector('.numeros-grid');
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // anima os numeros de cada animal.
  function animaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // puxa os animais atraves de um aqruivo json
  // e cria cada animal utilizando create animal
  async function criarAnimais() {
    try {
      // fetch e espera a resposta e transforma a resposta em json.
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // após a trnsformacao de json, ativa as funcoes
      // para preencher e animar os Numeros.
      animaisJSON.forEach(animal => preencherAnimal(animal));
      animaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
