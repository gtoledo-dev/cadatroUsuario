const { hash, hashSync } = require('bcrypt');
const mysql = require('mysql');

/*
Utilizar somente se for utilizar senha criptografada
const bcrypt = require('bcrypt');
*/

const DataSchema  = new mysql.Schema({
    codigo: Int8Array,
    nome: String,
    datanascimento: Int16Array,
    foto: String,
    
    
}, {
    timestamps:true
});

/*Utilizar somente se for utilizar senha criptografada: 
DataSchema.pre('save',function(next){
    if(!this.isModified("senha_usuario")){
        return next();
    }
    this.senha_usuario = hashSync(this.senha_usuario,10);
    next();
});

const usuarios = mysql.model('Usuarios',DataSchema);
module.exports = usuarios;
*/

/*Utilizar somente se for atualizar a senha:
DataSchema.pre('findByIdAndUpdate', function(next){
    var password = this.getUpdate().senha_usuario:'';
    if(password.length<55){
        this.getUpdate().senha_usuario = bcrypt.hashSync(password,10);
    }
    next();
})
const usuarios  = mysql.model('Usuarios', DataSchema);
module.exports = usuarios;
*/