require('colors');


const mostrarMenu = () => {
    return new Promise(resolve =>{
        console.clear();
    console.log('====================='.green);
    console.log('Selecciona una opción'.green);
    console.log('====================='.green);
    
    console.log(`${'1'.green}. Crear tarea`);
    console.log(`${'2'.green}. Listar tareas`);
    console.log(`${'3'.green}. Listar tareas completadas`);
    console.log(`${'4'.green}. Listar tareas pendientes`);
    console.log(`${'5'.green}. Completar tarea(s)`);
    console.log(`${'6'.green}. Borrar tarea`);
    console.log(`${'0'.green}. Salir \n`);

    //Creo la interfaz
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readLine.question('Selecciona una opción ', (opt) =>{
        readLine.close();
        resolve(opt);
    })
    })
}

const pausa = () => {
    return new Promise(() =>{
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) =>{
            readLine.close();
        })
    })
}



module.exports = {
    mostrarMenu,
    pausa,
}