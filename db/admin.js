const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    name: String,
    email: String,
    pass : String,
    cpass : String
})
module.exports = mongoose.model("admin",adminSchema)