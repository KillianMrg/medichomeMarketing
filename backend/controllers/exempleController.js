const Student = require('./student.js')

// Créer un étudiant
const createStudent = async studentData => {
 const student = await Student.create(studentData)
 return student
}

// Récupérer un étudiant
const findStudent = async firstName => {
 const student = await Student.findOne({firstName})
 return student
}

// Récupérer tous les étudiants
const findStudents = async firstName => {
 const student = await Student.find({})
 return student
}