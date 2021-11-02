const Tarea = require('./tarea');

class Tareas {

    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach((key) =>{
            listado.push(this._listado[key]);
        })
        return listado;
    }

    constructor() {
        this._listado ={};
    }

    borrarTarea(id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    cargarTareasFromArray( tareas = [] ){
        tareas.forEach((tarea) =>{
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log();
        this.listadoArr.forEach((tarea, i) =>{
            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                                    ? 'Competada'.green
                                    : 'Pendiente'.red;
            console.log(`${idx} ${desc} :: ${estado}`);
        })
    }

    listarPendientesCompletadas( completadas = true){
        console.log();
        let i = 1;
        this.listadoArr.forEach((tarea) =>{
            const { desc } = tarea;
            if(completadas){
                if(tarea.completadoEn !== null){
                    const idx = `${i}`.green;
                    console.log(`${idx} ${desc} :: ${tarea.completadoEn.green}`);
                    i++;
                }
            } else{
                if(tarea.completadoEn === null){
                    const idx = `${i}`.green;
                    console.log(`${idx} ${desc} :: ${'Pendiente'.red}`);
                    i++;
                }
            }
        })
    }

    toggleCompletadas( ids = []) {

        ids.forEach(id => {
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach(tarea =>{
            if(!ids.includes(tarea.id)){
                tarea.completadoEn = null;
            }
        })
    }

}


module.exports = Tareas;