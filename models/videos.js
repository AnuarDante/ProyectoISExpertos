const {Schema, model} = require('mongoose');
require('../database');

const vdoSchema = new Schema({
    usuario:{type:String},
    nombre:{type:String},
    extencion:{type:String},
    ubicacion:{type:String},
    size:{type:Number},
    fecha:{type:Date,default:Date.new}
});

module.exports=model('Video',vdoSchema);