const {Schema, model} = require('mongoose');
require('../database');

const imgeSchema = new Schema({
    usuario:{type:String},
    nombre:{type:String},
    extencion:{type:String},
    ubicacion:{type:String},
    size:{type:Number},
    fecha:{type:Date,default:Date.new}
});

module.exports=model('Imagen',imgeSchema);