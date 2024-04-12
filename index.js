import express from "express";
import path from "path";
import router from './routes/routes.js';
const __dirname = import.meta.dirname;

const app = express();
const PORT = process.env.PORT || 3002;


//middlewares

app.use(express.json());//cómo enviar data
app.use(express.urlencoded({ extended: false }));//envía datos por formularios
app.use('/', router);


app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);