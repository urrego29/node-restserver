const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query 

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = (req, res = response) => {
      
    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - usuariosPost',
        nombre,
        edad 
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - usuarioPut',
        id
    });
} 

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API - usuarioPatch'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuarioDelete'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}