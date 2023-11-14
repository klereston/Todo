# Ejemplo básico de TS

TODO:
Este programa sirve para ver, añadir, quitar o update una tarea.

Una tarea tiene:
id dado por defecto (random), "0.23423324"
name (title) de tipo string,
completed un booleano (true or false) para saber si esta completada la tarea

Utilazando la arquiterua hexagonal.

1º solicita una lista de tareas (simula una API) a traves de service.
2º esta lista rellena datos en la base de datos por defecto.
3º utilizando interfaces y injecion de depencia se crea un CRUD
4º desde del archivo app si estancia y transfiere las peticiones del CLI
5º en index.ts se ejecuta el CRUD en el CLI.




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
