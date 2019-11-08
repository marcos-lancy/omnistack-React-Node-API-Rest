/*
    index
    show
    store = create
    update
    destroy
*/ 

const User = require('./../models/User');

module.exports = {

    async store(req, res){
        const {email} = req.body;

        //Verificar se o mesmo já existe, fazer find por email
        let user = await User.findOne({ email });

        //Se não encontrou, cria
        if(!user){
            user = await User.create({ email });
        }
        return res.json(user);
    }
};