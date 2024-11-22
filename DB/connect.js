const mongoose = require('mongoose');

const connectDB = async () => {
    try { 
        await mongoose.connect('mongodb+srv://aci00997:1234@kimjeongsig.ckw4lyi.mongodb.net/?retryWrites=true&w=majority&appName=kimjeongsig')
    } catch (error) {
        throw new Error("Connection Failed!");
    }
};
module.exports = connectDB;