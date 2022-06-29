//Passo 1 - Crie uma função construtora que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números).
function aluno(nome = " ", qtfaltas, notas = []) {
  this.nome = nome;
  this.qtfaltas = qtfaltas;
  this.notas = notas;
  this.media = (function calcularMedia() {
    let soma = 0;
    for (let valor of notas) {
      soma += valor;
    }
    let mediaAluno = soma / notas.length;
    this.media = mediaAluno.toFixed(2);
    return this.media;
  })();

  this.faltas = function () {
    let numeroFaltas = this.qtfaltas;
    let soma = 0;
    soma = numeroFaltas + 1;
    this.qtfaltas = soma;
    return soma;
  };
}

/*Passo 2 - Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora. */

let aluno1 = new aluno("Henrique Schneider", 10, [70, 70, 70]);
let aluno2 = new aluno("Theo Domene", 10, [90, 100, 60]);
let aluno3 = new aluno("Jose Antonio", 11, [90, 100, 100]);
let aluno4 = new aluno("Celeste Maria", 0, [70, 70, 70]);
let aluno5 = new aluno("Analice Andrade", 9, [70, 70, 70]);

//----------- somar faltas -----------//

//console.log("O numero de faltas do aluno" +" "+`${aluno5.nome}`+" "+'é:' + aluno5.faltas(1));

/*Passo 3 - crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2).*/

const curso = {
  nomeDoCurso: "Certified Tech Developer",
  notaAprovacao: 70,
  faltasMaximas: 10,
  listaAlunos: [aluno1, aluno2, aluno3, aluno4, aluno5],

  cadastrarAluno(nome, qtfaltas, notas) {
    let novoAluno = new aluno(nome, qtfaltas, notas);
    this.listaAlunos.push(novoAluno);
  },
  statusAluno(aluno) {
    for (let i = 0; i < this.listaAlunos.length; i++) {
      const alunoCurso = this.listaAlunos[i];
      let media = alunoCurso.media;
      let media10 = this.notaAprovacao + this.notaAprovacao * 0.1;
      let faltas = alunoCurso.qtfaltas;
      let aprovado =
        (media >= this.notaAprovacao && faltas < this.faltasMaximas) ||
        (faltas == this.faltasMaximas && media >= media10)
          ? 'Aluno aprovado!'
          : 'Aluno reprovado!';
          
      if (alunoCurso.nome == aluno) {
        console.log(
          "Aluno encontrado!!!",
          "\n",
          alunoCurso.nome,
          "\n",
          "Faltas:",
          faltas,
          "\n",
          "media:",
          media,
          "\n",
          "Aprovado:",
          aprovado
        );
        return alunoCurso;
      }
    }

    console.log("Aluno não encontrado");
  },

  resultadoDosAlunos() {
    let resultado = [];

    for (let i = 0; i < this.listaAlunos.length; i++) {
      const alunoCurso = this.listaAlunos[i];
      let media = alunoCurso.media;
      let media10 = this.notaAprovacao + this.notaAprovacao * 0.1;
      let faltas = alunoCurso.qtfaltas;
      let aprovado =
        (media >= this.notaAprovacao && faltas < this.faltasMaximas) ||
        (faltas == this.faltasMaximas && media >= media10)
          ? true
          : false;

      resultado.push(aprovado);
    }
    console.log(resultado);
    return resultado;
  },
};

/*Passo 4 -Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.*/

//----------- cadastrar aluno -----------//
curso.cadastrarAluno("Shaianne Pereira", 0, [30, 70, 70]);

//----------- lista dos alunos -----------//
console.log("Curso:", curso.nomeDoCurso.toUpperCase());
console.log(curso.listaAlunos)



/*Passo 5 - Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.*/

//----------- status do aluno-----------//O status do aluno muda de 'aprovado' para 'reprovado' se chamar a 'Função faltas' no console.log.

//console.log("O numero de faltas do aluno" + " " + `${aluno5.nome}` + " " + "é:" +  aluno5.faltas());

//curso.statusAluno("Analice Andrade");

/*Passo 6 - Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. */

//----------- array de resultados -----------//
curso.resultadoDosAlunos();
