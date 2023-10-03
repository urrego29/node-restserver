const { Schema, model } = require('mongoose');

const CategriaShema = Schema ({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

CategriaShema.methods.toJSON = function(){
    const { _v, estado, ...data } = this.toObject();
    return data; 
}

module.exports = model( 'Categiria', CategriaShema)