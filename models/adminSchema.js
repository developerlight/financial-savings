import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    username: { type: String, unique: true , required: true},
    password: { type: String, required: true },
    email: { type: String, unique: true , required: true},
    joined_at: { type: Date, default: Date.now }
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;