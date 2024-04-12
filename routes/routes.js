import express from "express";
const router = express.Router();
import path from "path";
const __dirname = import.meta.dirname;
import pool from '../config/db.js';
import { postData, getData } from '../controllers/consultas.js';


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });


//Ruta para agregar
router.post("/cancion", async(req,res)=>{
  const { titulo, artista, tono }= req.body; //desestructuramos e indicamos que estamos capturando los datos desde el body
  const cancion = [titulo, artista, tono]
const response =  await postData(cancion);
console.log("Nombre",response)
}) ; 


//Ruta para lista
router.get('/canciones', async (req,res)=>{
  const response = await getData();//
  res.send(response);
})

export default router;