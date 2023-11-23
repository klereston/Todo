
# DeBounce
---
Esta app esta hecha con CLI y Test con jest.

La app pide a un usuario que inicie una transaccion y depues dentro del periodo de 5s el usuario intentara hacer otra tarea
si todo funciona como es debido no deberia de poder ejecutar la peticion hasrta acabado la transacion.

Contiene dos funciones principales: 1º startDebounce y 2º goToPage 

1º startDebounce - esta funcion pide al usuario que empiece la app (una transacion),

1.1º startTransaction - hace un timeout de 5s y devuelve true cuando acaba.

1.2º isTransactionFinished - es de tipo any porque hasta que no se la envoca su valor es
undefined hasta que startAndWaitTransaction(async function) que coje el valor del await startTransaction
que sera true si no hay error. 


2º goToPage
Es la forma de probar (simular) una interacion del usuario con la app mientras esta haciendo algo.
Pide al user que vaya a otra pagina llamando la funcion goToPage. 

2.1º goToPage - comprueba si isTransactionFinished es true (si finalizo) si es asi go Other page!!! 

---

# Ejemplo básico de TS

---

En este ejemplo básico hay:

- ESLint
- Prettier
- ts-jest
- nodemon
- VSCode Debugging
- Github Actions
- Pequeño ejemplo de código funcional con import

La configuración del debugger apunta a src/index.ts como archivo de inicio del proyecto.

Comandos:

Testing:

```sh
npm run test
```

Ejecuta los tests ignorando los que existan en dist/

Prettier format:

```sh
npm run prettier-format
```

Ejecuta manualmente el prettier en el proyecto, recomiendo instalar la extensión prettier y que se autoejecute al guardar.

Watcher:

```sh
npm run dev:watcher
```

Ejecuta nodemon usando src/index.ts como archivo inicial

Dev Run:

```sh
npm run dev:run
```

Ejecuta el proyecto sin watcher

Build:

```sh
npm run build
```

Transpila el proyecto en dist/

---

## Debugger

en el archivo .vscode/launch.json está la configuración del debugger.

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Lanza debug",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/src/index.ts",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```
