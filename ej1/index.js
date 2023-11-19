//Hacer un ls
const fs =  require('node:fs');
fs.readdir('.',(err,files)=>{
  if (err){
    console.log('Error al obtener el directorio:', err);
  }
  files.forEach(file=>{
    console.log(file)
  })
});

// process --> objeto global que ofrece informacion del proceso actual
/* permite ademas manejar el proceso. Ej process.exit() admite dos valores 0 --> todo ok y 1 --> terminado con error */
console.log(process.argv[1])
console.log(process.cwd())
// ls mejorado

