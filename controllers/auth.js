const { response } = require("express");
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require("../helpers/generar-jwt");

const login = async(req, res = response )=> {

    try {
        //Verificar si el email existe
        const usuario = await Usuario.findOne({ correo });
        if( !usuario ){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }
        //Si el usuario esta activo
        if( !usuario.estado ){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false'
            });
        }

        //Verificar la contraseña
        const validPassword = bcryptjs.compareSync( password, usuario.password);
        if(!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }
        //Generar el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            msg: 'Login ok'
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
    
}
module.exports = {
    login
}