const mongoose = require('mongoose');

const tabunganSchema = new mongoose.Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    uang: {
        type: Number,
        required: true
    },
    saldo: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['setor', 'tarik'],
        required: true
    }
});

const Tabungan = mongoose.model('Tabungan', tabunganSchema);

module.exports = Tabungan;
