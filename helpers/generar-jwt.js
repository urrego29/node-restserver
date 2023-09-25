const jwt = require('jsonwebtoken');

const generarJWT = ( uid = '' ) => {

    return new Promise((resolve, reject ) => {

        const payload = {uid};

        jwt.sing( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        }),(error, token ) => {

            if(error){
                console.log(err);
                reject('No se pudo generar el token')
            }else {
                resolve(token);
            }
        }

    })


}
module.exports = {
    generarJWT
}