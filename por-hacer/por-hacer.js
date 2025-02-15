const fs=require('fs');

let listadoPorHacer=[];

const guardarDB=()=>{
    let data=JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err)=>{
        if (err) throw new Error ('No se pudo hacer');
    });
}

const cargarDB = () =>{
    try{
        listadoPorHacer = require ('../db/data.json');
    } catch{
        listadoPorHacer=[];
    }
   
}

const crear=(descripcion)=>{
    cargarDB();
    let porHacer={
        descripcion,
        completado: false
    };
    listadoPorHacer.push (porHacer);

    return porHacer;
}

const getListado = ()=>{
    cargarDB();
    return listadoPorHacer;
}

const actualizar =(descripcion, completado = true)=>{

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea=>tarea.descripcion === descripcion);

    if (index>=0){
        listadoPorHacer[index].completado=completado;
        guardarDB();
        return true;
    }else {
        return false;
    }
}

const borrar=(descripcion)=>{
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea=>tarea.descripcion === descripcion);
    let removed = listadoPorHacer.splice(index, 1);
    guardarDB();
    return removed;
}

module.exports={
    crear, 
    guardarDB,
    getListado,
    actualizar,
    borrar
}