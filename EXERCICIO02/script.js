const students = [
    {
        name: "João",
        first_note: 6,
        second_note: 6,
    },
    {
        name: "Letícia",
        first_note: 9,
        second_note: 10,
    },
    {
        name: "Diego",
        first_note: 9,
        second_note: 9,
    },
    {
        name: "Julia",
        first_note: 6,
        second_note: 4,
    },
]

function calculate(first_note, second_note) {
    return ((first_note + second_note) / 2)
}

function printStudentsNote(student) {
    if (calculate(student.first_note, student.second_note) >= 7) {
        return `A média do(a) aluno(a) ${student.name} é: ${calculate(student.first_note, student.second_note)}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
    `
    } else {
        return `A média do(a) aluno(a) ${student.name} é: ${calculate(student.first_note, student.second_note)}
    Não foi desse vez, ${student.name}! Tente novamente!
    `
    }
}

for (let student of students) {
    let calculateMessage = printStudentsNote(student)
    alert(calculateMessage)
}