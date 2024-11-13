function gerarAleatoriosProfessor() {
  const vetor = [];

  while (vetor.length < 6) {
      let aleatorio = Math.floor(Math.random() * 60 + 1);

      if (!vetor.includes(aleatorio)) {
          vetor.push(aleatorio);
      }
  }
  return vetor;
}

console.log("Números profesor: ", gerarAleatoriosProfessor());



function gerarAleatoriosMelhor() {
  const resultado = [];
  //Array de 60 posições, com false em todas elas, para marcar quais números já foram escolhidos.
  const escolhidos = Array(60).fill(false);

  while (resultado.length < 6) {
      const aleatorio = Math.floor(Math.random() * 60);
      
      //Checa se o número já foi escolhido
      if (!escolhidos[aleatorio]) {
        escolhidos[aleatorio] = true; //Marca como escolhido
        resultado.push(aleatorio + 1); //Adiciona ao resultado, ajustado para ficar entre 1 e 60 
      }
  }

  return resultado;
}

console.log(gerarAleatoriosMelhor());


console.time("Original");
gerarAleatoriosProfessor();

console.timeEnd("Original");


console.time("Otimizado");
gerarAleatoriosMelhor();

console.timeEnd("Otimizado");
console.log("Tem momentos que o do professor é mais rapido que o melhorado, mas na maioria das vezes o melhorado é mais rapido. 👍")