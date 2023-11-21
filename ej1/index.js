// Hacer un ls
const fs = require('node:fs/promises');
const path = require('node:path')
// fs.readdir('.',(err,files)=>{
// if (err){
//     console.log('Error al obtener el directorio:', err);
// }
// files.forEach(file=>{
//     console.log(file)
// })
// });

// process --> objeto global que ofrece informacion del proceso actual
/* permite ademas manejar el proceso. Ej process.exit() admite dos valores 0 --> todo ok y 1 --> terminado con error */
// console.log(process.argv[1])
// console.log(process.cwd())


// ls mejorado

const folder = process.argv[2] ?? process.cwd();
// asignamos cwd al valor de folder si no se establece el argumento de valor para argv[22]
// console.log(folder)
fs.readdir(folder).then((files) => {
  files.forEach(file => {
    const filePath = path.join(folder, file)
    console.log(filePath)
  })
}).catch((err) => {
  console.error('Error al leer el directorio o no existe el directorio');
  process.exit(1);
});
