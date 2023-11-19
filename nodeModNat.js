const os = require('node:os');
console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());
// console.log(os.release());
// console.log(os.cpus());
console.log(os.freemem()/1024/1024);
console.log(os.totalmem()/1024/1024);
console.log(os.uptime()/60/60/24);
console.log('-----------------------------------------------------');
const fs = require('node:fs');
const textos = fs.readFileSync('./textos.txt','utf-8');
console.log(textos);
console.log('-----------------------------------------------------');
console.log('Leyendo Textos 1');
fs.readFile('./textos.txt','utf-8',(err,text)=>{
  console.log('Texto 1:', text);
});
console.log('Halgo sincrono');
fs.readFile('./textos2.txt','utf-8',(err,text)=>{
  console.log('Texto 2:', text);
});
console.log('-----------------------------------------------------');
const fsProm = require('node:fs/promises');
fsProm.readFile('./textos.txt','utf-8').then(text => console.log('TExto obtenido con promesas:',text));
console.log('-----------------------------------------------------');
// console.log('Async-Await');
// (
//   async()=>{
//   const text = async fsProm.readFile('./textos.txt', 'utf-8')
//   console.log('Con async await:', text)
// }
// )();
console.log('-----------------------------------------------------');
Promise.all([
  fsProm.readFile('./textos.txt','utf-8'),
  fsProm.readFile('./textos2.txt','utf-8')
]).then(([text1,text2])=>{
  console.log('Async paralelos: texto1:', text1)
  console.log('Async paralelos: textos2:', text2)
});
console.log('-----------------------------------------------------');
const path = require('node:path');
console.log(path.sep);
const ruta1 = path.join('content','path','file');
console.log(ruta1)