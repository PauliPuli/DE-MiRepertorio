import pool from '../config/db.js';

//agregar canción
const postData= async (cancion)=>{
    try{
const agregarCancion= {
    text: 'insert into canciones (titulo, artista, tono) values ($1,$2,$3) returning *',
    values: cancion,
}
const response= await db.query(agregarCancion);
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



export { postData, getData };