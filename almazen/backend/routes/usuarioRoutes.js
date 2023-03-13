import express from "express";
import {usuarios, crearUsuario, registrar} from '../controllers/usuarioControll.js'

const router = express.Router();

router.get('/', usuarios )

//router.post('/', crearUsuario)

//Creación, Registro y confirmación de los usuarios.

router.post('/', registrar); // crea un nuevo usuario


export default router;