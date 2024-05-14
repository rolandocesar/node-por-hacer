const {argv} = require('./config/yargs');
const porHacer= require('./por-hacer/por-hacer');
const color= require ('colors');

let comando= argv._[0];

switch(comando){
    case 'crear':
    let tarea=porHacer.crear(argv.descripcion);
    porHacer.guardarDB(tarea);
    console.log(tarea);
    break;

    case 'listar':

    let listado = porHacer.getListado();

    for (let tarea of listado){
        console.log('=====Por hacer====='.green);
        console.log(tarea.descripcion);
        console.log('Estado: ', tarea.completado);
        console.log('==================='.green);
    }
    break;
    case 'actualizar':
    let actualizado= porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    break;  
    case 'borrar':
        let nuevoListado=porHacer.borrar(argv.descripcion);
        console.log(nuevoListado);
        break;
    default:
        console.log('Comando no reconocido');
}
