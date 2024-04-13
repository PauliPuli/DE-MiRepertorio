import pool from '../config/db.js';

//agregar canción
const postData= async (cancion)=>{
    try{
const agregarCancion= {
    text: 'insert into canciones (titulo, artista, tono) values ($1,$2,$3) returning *',
    values: cancion,
}
const response= await pool.query(agregarCancion);
return response.rows
    }catch(error){
        console.log(error.message)
    }
};


//Mostrar consultas

const getData= async ()=>{
    try{
const consultarCancion={
    text:'select * from canciones',
}
const response= await pool.query(consultarCancion);
return response.rows
    }catch(error){
console.log(error.message)
    };
}

//actualizar canciones
const putData=async(cancion)=>{
    try{
        const actualizarCancion={
            text:'update canciones set titulo=$1, artista=$2, tono=$3 where id=$4 returning *',
            values:cancion
        }
        const response=await pool.query(actualizarCancion);
        return response.rows
    }catch(error){
        console.log(error.message)
    }
};

//eliminar cancion
const deleteData=async(id)=>{
    try{
        const borrarCancion= {
            text: 'delete from canciones where id=$1',
            values: [id]
        }
        const response= await pool.query(borrarCancion);
        if (response.rowCount == 0) {
            throw new Error("Cancion no encontrada");
          }
        return response.rows
    }catch (error){
        console.log(error.message)
    }
}


export { postData, getData , putData, deleteData};