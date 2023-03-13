import Usuario from "../models/Usuario.js";

const usuarios = (req, res) =>{
    res.send('Hola mundo desde routers')
}

const crearUsuario = (req, res) =>{
    res.send("Creando usuario")
}

const registrar = async (req, res) =>{

    try {
        const usuario = new Usuario(req.body);  
        const usuarioAlmacenado = await usuario.save();
        res.json( usuarioAlmacenado);
        
    } catch (error) {
        console.log(error)
    }

    
}

export {
    usuarios,
    crearUsuario,
    registrar
}