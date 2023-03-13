import express from "express";
import dotenv from "dotenv"

import conectarDB from "./config/db.js";

//Routers
import router from "./routes/usuarioRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

//ROUTING
app.use('/api/usuarios', router)


const PORT = process.env.PORT || 4000

app.listen(PORT, () =>{
    console.log(`servidor corriendo en el puerto ${PORT}`)
})