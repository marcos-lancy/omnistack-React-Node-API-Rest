const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],

    //Guardando apenas a referencia do ID do usuário
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' //passar a referencia, para qual cara ele aponta e pega o ID
    }
});

module.exports = mongoose.model('Spot', SpotSchema);