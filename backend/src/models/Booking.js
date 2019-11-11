const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,

    //Guardando apenas a referencia do ID do usuário
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' //passar a referencia, para qual cara ele aponta e pega o ID
    },

    //Criar relacionamento com SPOT
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot' //passar a referencia, para qual cara ele aponta e pega o ID
    },
});

module.exports = mongoose.model('Booking', BookingSchema);