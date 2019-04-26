const alumnos = [
  { nombre: 'German David Neira Rivera', edad: 23 },
  { nombre: 'Santiago Pascual Plaus', edad: 32 },
  { nombre: 'Santiago Canosa', edad: 40 },
  { nombre: 'Francisco Campos', edad: 46 },
  { nombre: 'Daniel Andres Gallo Garcia', edad: 22 },
  { nombre: 'Juanse Calviño', edad: 28 },
  { nombre: 'Jorge Roldan', edad: 31 },
  { nombre: 'Leymar Gutierrez', edad: 42 },
  { nombre: 'Juan Jose Diaz', edad: 27 },
  { nombre: 'Matias Fernandez', edad: 29 },
  { nombre: 'Leandro Amaro', edad: 26 },
  { nombre: 'Franco Carini', edad: 31 },
  { nombre: 'Francisco Escobar Sabio', edad: 28 },
  { nombre: 'Pilar Castro', edad: 27 },
  { nombre: 'Sebastian Rodriguez', edad: 31 },
  { nombre: 'Carlos Martin Rodriguez', edad: 28 },
  { nombre: 'Pablo Aramayo', edad: 33 },
]

// DISCLAIMER: La edad es ficticia y solo destinada para realizar los siguientes ejercicios

// 1. Obtener un array de strings con solo nombres de cada alumno usando .map()
const arrNombres = alumnos.map(function(alumno) {
  return alumno['nombre'];
})

console.log('Nombres: ', arrNombres)

// 2. Obtener un array con aquellos alumnos mayores a 30 años usando .filter()
const arrAlumnos30 = alumnos.filter(function(alumno) {
  return alumno.edad > 30
})

console.log('Mayores de 30: ', arrAlumnos30)

// 3. Obtener un entero con la edad total de todos los alumnos usando .reduce() (Investigar)
const edadTotal = alumnos.reduce(function(total, alumno) {
  return total + alumno.edad
}, 0)

console.log('Edad Total: ', edadTotal)

// 4. Obtener en una constante la edad de "Leandro Amaro" usando .find() ( Investigar ) y destructuring del resultado
const {edad: edadLeandro} = alumnos.find(function(alumno) {
  return alumno.nombre === 'Leandro Amaro'
})

console.log('Edad Leandro Amaro: ', edadLeandro)

// 5. Obtener en una constante primer alumno del array de alumnos usando destructuring y posteriormente en otra constante su nombre también
const [alumno1] = alumnos
const {nombre: nombrePrimerAlumno} = alumno1

console.log('Primer Alumno Array: ', alumno1)
console.log('Nombre Primer Alumno Array: ', nombrePrimerAlumno)

// 6. Obtener un array con aquellos alumnos que empiezan con la letra "F", usando .filter()
const arrAlumnosF = alumnos.filter(function(alumno) {
  return alumno.nombre[0].indexOf('F') > -1
})

console.log('Array Alumnos F: ', arrAlumnosF)
// 7. Obtener un array agregando una propiedad/key/atributo más a cada elemento usando .map()
const arrNewAlumnos = alumnos.map(function(alumno, index) {
  alumno['telefono'] = 887666 + index
  return alumno
})

console.log('Nuevos Alumnos: ', arrNewAlumnos)
