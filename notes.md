# Modules

## CommonJS

```js
//En el archivo donde estan los modulos a exportar
const saludar = (name)=>{
  return `Hola ${name}`;
}
export.modules{
  saludar
}

// En el archivo donde se van a importar los modulos
const { saludar } = require('./path');
console.log(saludar('Juan Pirindingo'));
```

## Modules Java Script

```js
//En el archivo en el que se van a exportar los modulos
export const saludar = (name) => {
  return `Hola ${name}`;
};
//En el archivo en el que se van a importar
import { saludar } from "./path";
console.log(saludar("Juan Pirindingo"));
```

**_Usando ESModules hay que cambiar las extensiones de los archivos a .mjs, o declarar en packaje.json el "type" : "module"_**

## Modulos Nativos

### os

```js
const os = require("node:os");
//Se piede importar directamente los modulos nativos sin necesidad de declararlos como 'node:module', pero se recomienda hacerlo de esta forma
console.log(`nombre del sistema operativo: ${os.platform()}`);
```

### fs

**_ File System fs es un metodo asincrono _**

```js
const fs = require("node:fs");
fs.readFile("Path", "Codif", (callback) => {
  //Ejecura el callback
});
```

**_fs tambien se puede utilizar con promesas_**

```js
const fs = require("node:fs/promises");
fs.readFile("path", "codif").then(console.log(elemento));
```

**_Existe la forma de convertir un modulo que no acepte promesas a que trabaje con promesas_**

```js
const readFilePromises = promisify(fs.readFile);
```

**_Una vez hecho el promises con este modulo se puede utilizar async await, pero encerrando todo el codigo en una funcion autollamada_**

```js
const fs = require(".node:fs/promises");
async () => {
  const text = await fs.readFile("Path", "Codif");
  console.log(text);
};
```

### path

