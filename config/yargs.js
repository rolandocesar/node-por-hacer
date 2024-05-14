const descripcion ={
        required: true,
        demand: true,
        alias: 'd'
}
const completado={
    alias: 'c',
    default: true
}

const argv = require("yargs")
                .command('crear','Crea un elemento por hacer', {descripcion})
                .command('actualizar', 'Actualiza el estado completado de una tarea',{descripcion, completado})
                .command('listar','Muestra el listad de por hacer')
                .command('borrar','Borra una tarea del listado',{descripcion})
                .help()
                .argv;

module.exports={
    argv
} 