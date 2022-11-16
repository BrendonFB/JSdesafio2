let students = [
  {
    name: "Brendon",
    noteOne: 10,
    noteTwo: 8
  },
  {
    name: "Caio",
    noteOne: 5,
    noteTwo: 6
  },
  {
    name: "Pedro",
    noteOne: 7,
    noteTwo: 9
  }
]

function media(nota1, nota2){
  return (nota1 + nota2) / 2
}

for(let student of students){
  if(media(student.noteOne, student.noteTwo) >= 7){
    alert(`A média do aluno foi ${media(student.noteOne, student.noteTwo)}
  Parabéns, ${student.name} vc foi aprovado no concurso!
  `)
  } else {
    alert(`A média do aluno foi ${media(student.noteOne, student.noteTwo)}
  Não foi dessa vez ${student.name} tente novamente.
  `)
  }
}
