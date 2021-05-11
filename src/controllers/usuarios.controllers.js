//const { delete } = require('../models/routes');
const Usuario = require('../models/usuarios.model');

module.exports = {
    async index(req,res){
        const user = await Usuario.find();
        res.json(user);
    },
    async create(req,res){
        const {codigo, nome, datanascimento, foto} = req.body;

        let data = {};

        let user = Usuario.findOne({nome});
        if(!user){
            data = {codigo, nome, datanascimento,foto};
            user = await Usuario.create(data);
            return res.status(200).json(user);
        }else{
            return res.status(500).json(user);
        }
    },
    
    async details(req,res){
        const {_id} = req.params;
        const user = await Usuario.findOne({_id});
        res.json(user);
    },

    async delete(req,res){
        const {_id} = req.params;
        const user = await Usuario.findByIdAndDelete({_id});
        return res.json(user);
    },

    async update(req,res){
        const {_id, codigo, nome, datanascimento, foto } = req.body;
        const data = (codigo, nome, datanascimento, foto);
        const user = await Usuario.findByIdUpdate({_id}, data, {new:true});
        res.json(user);
    }

}
