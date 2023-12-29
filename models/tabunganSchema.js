import mongoose from 'mongoose';

const tabunganSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    uang: {
        type: Number,
        required: true,
        default: 0
    },
    saldo: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['pembuatan','setor', 'tarik'],
        required: true,
        default : 'pembuatan'
    }
});

const Tabungan = mongoose.model('Tabungan', tabunganSchema);

export default Tabungan; 
