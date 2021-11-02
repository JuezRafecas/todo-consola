# Comandos utiles aprendidos

# Lecturas y escrituras en consola

const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readLine.question('Selecciona una opción ', (opt) =>{
        console.log({opt});
        readLine.close();
    })

# Para generar id unicos usar: uuid (v4)

# delete para borrar objeto