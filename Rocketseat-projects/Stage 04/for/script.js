/*
O que será abordado nesse desafio:

- Variáveis;
- Operações matemáticas;
- Operadores comparativos;
- Condicional.
*/

const estudantes = [
  {
    name: "Gabriel",
    nota1: 70,
    nota2: 60,
    media: null,
    status: null
  }, 
  {
    name: "Rafael",
    nota1: 30,
    nota2: 10,
    media: null,
    status: null
  },
  {
    name: "Rodolfo",
    nota1: 60,
    nota2: 90,
    media: null,
    status: null
  }
]

let CalculaMedia = () => {
  for (let estudante of estudantes) {
    console.log(estudante.media = ((estudante.nota1+estudante.nota2)/20))
    if (estudante.media >= 7){
      estudante.status = "aprovado"
      alert(`Parabéns ${estudante.name}! \n Voce foi aprovado com uma média de: ${estudante.media} `)
    }else {
      alert(`${estudante.name} Infelizmente voce nao foi aprovado! \n Sua média foi de: ${estudante.media} `)
    }
  }
}

CalculaMedia()