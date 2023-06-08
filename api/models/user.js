const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String, select: false },
    status: { type: Boolean, default: true },
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
